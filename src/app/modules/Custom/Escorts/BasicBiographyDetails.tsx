import clsx from 'clsx'
import React from 'react'

export default function BasicBiographyDetails() {
  const ethnicityTypes = [
    {value: 'asian', label: 'Asian'},
    {value: 'black', label: 'Black'},
    {value: 'caucasian', label: 'Caucasian'},
    {value: 'south_american', label: 'South American'},
    {value: 'indian', label: 'Indian'},
    {value: 'arabic', label: 'Arabic'},
    {value: 'mixed', label: 'Mixed'},
  ]

  const categoryList = [
    {label: 'Escorts', value: 'escorts'},
    {label: 'Massage', value: 'massage'},
    {label: 'BDSM', value: 'bdsm'},
  ]

  const genderTypes = [
    {label: 'Female', value: 'female'},
    {label: 'Male', value: 'male'},
    {label: 'Trans', value: 'trans'},
    {label: 'Couple', value: 'couple'},
  ]
  return (
    <>
      <div className='mb-5'>
        <h2 className='text-base mb-1'>Basic Biography Details</h2>
        {/* <p className='text-danger'>
                    Set/edit basic information of your profile. Mandatory fields are marked with an
                    * (asterisk). Once you have updated your info, don't forget to save the changes.
                  </p> */}
      </div>
      {/* Pome Profile Start */}
      <div className='row border rounded py-5'>
        <div className='col-lg-6 col-12 mb-3'>
          <label className='fw-bolder text-dark fs-6 required'>Pome Profile</label>
          <input
            placeholder='Pome Profile Name'
            type='text'
            autoComplete='off'
            defaultValue={'Ana Simmons'}
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
        {/* Pome Profile End */}
        {/* Category start */}
        <div className='col-lg-12 col-12 btn-group my-3'>
          <div className='my-2'>
            <label className='form-label fw-bolder text-dark fs-6 required'>Category</label>
            <div className='d-flex'>
              {categoryList.map((option, index) => (
                <>
                  <div className='form-check form-check-custom form-check-solid me-3'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='category'
                      id={option.value}
                      value={option.value}
                      defaultChecked={index === 1}
                    />
                    <label key={option.value} className='form-check-label fs-6'>
                      {option.label}
                    </label>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        {/* Category end */}
        {/* sex start */}
        <div className='col-lg-12 col-12 my-3'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6 required'>Sex</label>
            <div className='d-flex'>
              {genderTypes.map((option, index) => (
                <>
                  <div className='form-check form-check-custom form-check-solid me-3'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='sex'
                      id={option.value}
                      value={option.value}
                      defaultChecked={index === 0}
                    />
                    <label key={option.value} className='form-check-label fs-6'>
                      {option.label}
                    </label>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        {/* sex end */}
        {/* age start */}
        <div className='col-lg-6 col-12 mb-3'>
          <label className='form-label fw-bolder text-dark fs-6 required'>Age</label>
          <select className='form-select' aria-label='Select example'>
            <option>Select age</option>
            <option value='1'>One</option>
            <option value='1'>One</option>
            <option value='1'>One</option>
            <option value='1'>One</option>
          </select>
        </div>
        {/* age end */}
        {/* Ethnicity start */}
        <div className='col-lg-12 col-12 my-3'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6 required'>Ethnicity</label>
            <div className='d-flex'>
              {ethnicityTypes.map((option, index) => (
                <>
                  <div className='form-check form-check-custom form-check-solid me-3'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='ethnicity'
                      id={option.value}
                      value={option.value}
                      defaultChecked={index === 3}
                    />
                    <label key={option.value} className='form-check-label fs-6'>
                      {option.label}
                    </label>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        {/* Ethnicity end */}
        {/* Nationality start */}
        <div className='col-lg-4 col-12 my-3'>
          <label className='form-label fw-bolder text-dark fs-6 required'>Nationality</label>
          <select className='form-select' aria-label='Select example'>
            <option>Select nationality</option>
            <option value='1' selected>
              18+
            </option>
            <option value='1'>One</option>
            <option value='1'>One</option>
            <option value='1'>One</option>
          </select>
        </div>
      </div>
      {/* Nationality end */}
    </>
  )
}
