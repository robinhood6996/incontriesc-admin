/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {useFormik} from 'formik'
import React, {useEffect, useRef, useState} from 'react'
import * as Yup from 'yup'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {useUserRegistrationMutation} from '../../../../redux/features/api/auth/authApi'
import {useGetAllCountryQuery} from '../../../../redux/features/api/country/countryApi'
import {useLazyGetCitiesByCountryQuery} from '../../../../redux/features/api/citiesApi/citiesApi'
import {useDropzone} from 'react-dropzone'
import {useCreateFreeAdMutation} from '../../../../redux/features/api/freeAds/freeAdsApi'
export function CreateAd() {
  //const [hasError, setHasError] = useState(false);
  // register api
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedDuration, setSelectedDuration] = useState('')
  const [countryName, setCountryName] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const telephoneRef = useRef()
  const emailRef = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const userNameRef = useRef()

  const [createFreeAd, {data, isLoading, isSuccess, isError}] = useCreateFreeAdMutation()

  const [loading, setLoading] = useState(false)
  const {data: countriesData} = useGetAllCountryQuery(null)

  const [getCities, {data: citiesApiData}] = useLazyGetCitiesByCountryQuery()
  const handleSelectCountry = (country) => {
    getCities(country)
    setCountryName(country)
  }
  //image input
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone()
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))
  const handlePhotoSubmit = (e) => {
    e.preventDefault()
    var formdata = new FormData()
    formdata.append('image', acceptedFiles)
  }

  useEffect(() => {
    if (!isLoading && !isError && isSuccess) {
      toast.success('Successfully created freead', {
        hideProgressBar: true,
        toastId: 'registerSuccess',
      })
      navigate('/ads')
    }
    if (!isLoading && isError && !isSuccess) {
      toast.error('Failed to create ad', {
        hideProgressBar: true,
        toastId: 'registerError',
      })
    }
  }, [isError, isLoading, isSuccess])

  const categoryOptions = ['BDMS/Fetish', 'Couple', 'Women', 'Massage', 'Man']
  const durationOptions = ['3', '10', '15', '30']
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const telephoneNumebr = telephoneRef?.current?.value
    const email = emailRef?.current?.value
    const qualification = titleRef?.current?.value
    const description = descriptionRef?.current?.value
    const username = userNameRef?.current?.value
    if (!acceptedFiles.length > 0) {
      toast.warning('Please upload 1 photo')
      return
    }
    let formdata = new FormData()
    formdata.append('title', qualification)
    formdata.append('category', selectedCategory)
    formdata.append('city', selectedCity)
    formdata.append('country', countryName)
    formdata.append('description', description)
    formdata.append('phone', telephoneNumebr)
    formdata.append('email', email)
    formdata.append('username', username)
    formdata.append('duration', selectedDuration)
    formdata.append('status', 'active')
    acceptedFiles.forEach((file) => {
      formdata.append('photos', file)
    })

    createFreeAd(formdata)
  }
  return (
    <div className='card'>
      {/* begin::Form */}
      <form className='form d-flex flex-center' onSubmit={(e) => handleFormSubmit(e)}>
        <div className='card-body mw-800px py-20'>
          {/* begin::Form row */}
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Title</label>
            <div className='col-lg-9'>
              <div className='spinner spinner-sm spinner-primary spinner-right'>
                <input
                  ref={titleRef}
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  placeholder='Enter name'
                  required
                />
              </div>
            </div>
          </div>
          {/* end::Form row */}

          {/* begin::Form row */}
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Select Category</label>
            <div className='col-lg-9'>
              <div className='input-group input-group-lg input-group-solid'>
                <select
                  className='form-select'
                  aria-label='Select example'
                  onChange={(e) => {
                    if (e.target.value !== 'default') {
                      setSelectedCategory(e.target.value)
                    }
                  }}
                >
                  <option value={'default'}>select</option>
                  {categoryOptions?.map((option, index) => {
                    return (
                      <option key={index} value={option.toLowerCase()}>
                        {option}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Country</label>
            <div className='col-lg-9'>
              <div className='input-group input-group-lg input-group-solid'>
                <select
                  className='form-select'
                  aria-label='Select example'
                  onChange={(e) => handleSelectCountry(e.target.value)}
                >
                  <option value={'default'}>Select country</option>
                  {countriesData?.countries?.map((country, index) => {
                    return (
                      <option value={country?.name?.toLowerCase()} key={index}>
                        {country?.name?.toUpperCase()}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>City</label>
            <div className='col-lg-9'>
              <div className='input-group input-group-lg input-group-solid'>
                <select
                  className='form-select'
                  aria-label='Select example'
                  onChange={(e) => {
                    setSelectedCity(e.target.value)
                  }}
                >
                  <option value={'default'}>Select city</option>
                  {citiesApiData?.cities?.map((city, index) => {
                    return (
                      <option value={city?.name?.toLowerCase()} key={index}>
                        {city?.name?.toUpperCase()}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Duration</label>
            <div className='col-lg-9'>
              <select
                className='form-select'
                aria-label='Select example'
                onChange={(e) => {
                  if (e.target.value !== 'default') {
                    setSelectedDuration(e.target.value)
                  }
                }}
              >
                <option value={'default'}>Select Duration</option>
                {durationOptions?.map((option, index) => {
                  return (
                    <option key={index} value={option.toLowerCase()}>
                      {option}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>

          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Phone</label>
            <div className='col-lg-9'>
              <div className='input-group input-group-lg input-group-solid'>
                <input
                  ref={telephoneRef}
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Enter phone'
                  required
                />
              </div>
            </div>
          </div>
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Email</label>
            <div className='col-lg-9'>
              <div className='input-group input-group-lg input-group-solid'>
                <input
                  ref={emailRef}
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Enter email'
                  required
                />
              </div>
            </div>
          </div>
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Escort Username</label>
            <div className='col-lg-9'>
              <div className='input-group input-group-lg input-group-solid'>
                <input
                  ref={userNameRef}
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Enter escort username'
                  required
                />
              </div>
            </div>
          </div>
          <div className='row mb-8'>
            <label htmlFor='message' className='form-label fw-bolder text-dark fs-6'>
              Description
            </label>
            <div className='col-lg-12'>
              <textarea
                rows={10}
                cols={10}
                className='form-control'
                id='message'
                ref={descriptionRef}
                placeholder='Message'
              />
            </div>
          </div>
          <div className='row border rounded p-4 flex-column'>
            <div className='col-lg-12 col-12 my-3 w-100'>
              <form onSubmit={(e) => handlePhotoSubmit(e)}>
                <label htmlFor='message' className='form-label required'>
                  Photo
                </label>
                <div {...getRootProps({className: 'dropzone  mb-5'})}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
                <aside>
                  <h4>Files</h4>
                  <ul>{files}</ul>
                </aside>
              </form>
            </div>
          </div>

          {/* end::Form row */}

          <div className='separator separator-dashed my-10'></div>
          {/* end::Form row */}

          {/* begin::Form row */}

          {/* end::Form row */}

          {/* begin::Form row */}
          <div className='row'>
            <label className='col-lg-3 col-form-label'></label>
            <div className='col-lg-9'>
              <button
                type='submit'
                id='kt_sign_up_submit'
                className='btn btn-lg btn-primary w-50 mb-5'
              >
                {!isLoading && <span className='indicator-label'>Submit</span>}
                {isLoading && (
                  <span className='indicator-progress' style={{display: 'block'}}>
                    Please wait...{' '}
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                )}
              </button>
            </div>
          </div>
          {/* end::Form row */}
        </div>
      </form>
      {/* end::Form */}
    </div>
  )
}
