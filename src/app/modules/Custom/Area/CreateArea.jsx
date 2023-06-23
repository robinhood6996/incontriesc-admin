import React, {useEffect, useRef, useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {useGetAllCountryQuery} from '../../../../redux/features/api/country/countryApi'
import {
  useCreateAreaMutation,
  useCreateCityMutation,
  useEditAreaMutation,
  useEditCityMutation,
  useLazyGetCitiesByCountryQuery,
} from '../../../../redux/features/api/citiesApi/citiesApi'
import {KTSVG} from '../../../../_metronic/helpers'

// type Props = {
//   show: boolean
//   handleClose: () => void
//   type: string
// }

export default function CreateArea({
  show,
  handleClose,
  type,
  cityId,
  defaultCountryName,
  defaultCityName,
  defaultAreaName,
  defaultDescription,
}) {
  const [selectedCountry, setSelectedCountry] = useState()
  const countryNameRef = useRef()
  const cityNameRef = useRef()
  const areaNameRef = useRef()
  const descriptionRef = useRef()

  //api call
  const {data, isFetching, isSuccess} = useGetAllCountryQuery(null)
  const [getCities, {isLoading: loadingCity, data: CitiesData}] = useLazyGetCitiesByCountryQuery()
  const [
    createCity,
    {isLoading: isLoadingCreate, isError: isErrorCreate, isSuccess: isSuccessCreate},
  ] = useCreateAreaMutation()
  const [editCity, {isLoading: isLoadingEdit, isError: isErrorEdit, isSuccess: isSuccessEdit}] =
    useEditAreaMutation()

  const handleModal = (e) => {
    e.preventDefault()
    const countryName = countryNameRef?.current?.value
    const cityName = cityNameRef?.current?.value
    const areaName = areaNameRef.current.value
    const description = descriptionRef.current.value
    if (
      type === 'add-city' &&
      (countryName !== null ||
        countryName !== '' ||
        countryName !== undefined ||
        cityName !== null ||
        cityName !== '' ||
        cityName !== undefined)
    ) {
      createCity({
        name: areaNameRef.current.value,
        country: countryName,
        city: cityName,
        description,
      })
    }
    if (
      type === 'edit-city' &&
      (defaultAreaName !== null || defaultAreaName !== '' || defaultAreaName !== undefined) &&
      cityId
    ) {
      editCity({
        id: cityId,
        name: areaName ?? defaultAreaName,
        description: description ?? defaultDescription,
      })
      // console.log('edit', cityId, countryName, cityName)
    }
    handleClose()
  }

  //toast create city
  useEffect(() => {
    if (!isLoadingCreate && !isErrorCreate && isSuccessCreate) {
      toast.success('Successfully created area', {
        hideProgressBar: true,
        toastId: 'cityCreateSuccess',
      })
    }
    if (!isLoadingCreate && isErrorCreate && !isSuccessCreate) {
      toast.error('Failed to create area', {
        hideProgressBar: true,
        toastId: 'cityCreateError',
      })
    }
    return () => {
      setTimeout(() => {
        toast.dismiss('cityCreateSuccess')
        toast.dismiss('cityCreateError')
      }, 2000)
    }
  }, [isErrorCreate, isLoadingCreate, isSuccessCreate])
  //toast Edit city
  useEffect(() => {
    if (!isLoadingEdit && !isErrorEdit && isSuccessEdit) {
      toast.success('Successfully edited area', {
        hideProgressBar: true,
        toastId: 'cityEditSuccess',
      })
    }
    if (!isLoadingEdit && isErrorEdit && !isSuccessEdit) {
      toast.error('Failed to edit area', {
        hideProgressBar: true,
        toastId: 'cityEditError',
      })
    }
    return () => {
      setTimeout(() => {
        toast.dismiss('cityEditSuccess')
        toast.dismiss('cityEditError')
      }, 2000)
    }
  }, [isErrorEdit, isLoadingEdit, isSuccessEdit])

  useEffect(() => {
    if (selectedCountry) {
      getCities(selectedCountry)
    }
  }, [selectedCountry])

  console.log('country?.name', defaultCityName)
  return (
    <div>
      <Modal
        id='kt_modal_create_app'
        tabIndex={-1}
        aria-hidden='true'
        dialogClassName='modal-dialog modal-dialog-centered mw-900px'
        show={show}
        onHide={handleClose}
      >
        <div className='modal-header'>
          <h2>{type === 'add-city' ? 'Add Area' : 'Edit Area'}</h2>
          {/* begin::Close */}
          <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
            <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
          </div>
          {/* end::Close */}
        </div>

        <form
          onSubmit={(e) => {
            handleModal(e)
          }}
        >
          <div className='modal-body py-lg-10 px-lg-10'>
            <div className='fv-row mb-10'>
              <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                <span className='required'>Country Name</span>
                {/* <i
                  className='fas fa-exclamation-circle ms-2 fs-7'
                  data-bs-toggle='tooltip'
                  title='Specify your desire country name'
                ></i> */}
              </label>
              <select
                className='form-select'
                aria-label='Select example'
                ref={countryNameRef}
                disabled={type === 'edit-city'}
                onChange={(e) => getCities(e.target.value)}
              >
                <option value={'default'}>Select Country</option>
                {data?.countries?.map((country, index) => {
                  return (
                    <option
                      key={index}
                      value={country?.name?.toLowerCase()}
                      selected={
                        type === 'edit-city' &&
                        country?.name?.toLowerCase() === defaultCountryName?.toLowerCase()
                      }
                    >
                      {country?.name?.toUpperCase()}
                    </option>
                  )
                })}
              </select>

              <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                <span className='required'>City Name</span>
                {/* <i
                  className='fas fa-exclamation-circle ms-2 fs-7'
                  data-bs-toggle='tooltip'
                  title='Specify your desire country name'
                ></i> */}
              </label>
              {type === 'add-city' ? (
                <select
                  className='form-select'
                  aria-label='Select example'
                  ref={cityNameRef}
                  disabled={type === 'edit-city'}
                >
                  <option value={'default'}>Select City</option>
                  {CitiesData?.cities?.map((country, index) => {
                    return (
                      <option
                        key={index}
                        value={country?.name?.toLowerCase()}
                        selected={
                          type === 'edit-city' &&
                          country?.name?.toLowerCase() === defaultCityName?.toLowerCase()
                        }
                        className='text-capitalize'
                      >
                        {country?.name}
                      </option>
                    )
                  })}
                </select>
              ) : (
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid text-capitalize'
                  name='area-name'
                  placeholder='Area name'
                  defaultValue={defaultCityName}
                  disabled
                />
              )}
              <label className='d-flex align-items-center fs-5 fw-semibold mb-2 mt-4'>
                <span className='required'>Area Name</span>
                {/* <i
                  className='fas fa-exclamation-circle ms-2 fs-7'
                  data-bs-toggle='tooltip'
                  title='Specify your desire country name'
                ></i> */}
              </label>
              <input
                type='text'
                className='form-control form-control-lg form-control-solid'
                name='area-name'
                placeholder='Area name'
                ref={areaNameRef}
                defaultValue={type === 'edit-city' ? defaultAreaName : ''}
              />
              <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                <span className='required'>Description</span>
              </label>
              <div>
                <textarea
                  ref={descriptionRef}
                  className='form-control form-control-lg form-control-solid'
                >
                  {defaultDescription ?? ''}
                </textarea>
              </div>
            </div>
            <div className='d-flex justify-content-end mb-2'>
              <Button
                className='btn btn-sm fw-bold btn-primary'
                // data-bs-toggle='modal'
                // data-bs-target='#kt_modal_create_app'
                type='submit'
              >
                {type === 'add-city' ? 'Add' : 'Edit'}
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  )
}
