import clsx from 'clsx'
import React from 'react'

export default function EscortDetailsContact() {
  const appsAvailavbleTypes = [
    {label: 'Whatsapp', value: 'whatsapp'},
    {label: 'Telegram', value: 'telegram'},
    {label: 'Viber', value: 'viber'},
  ]
  const telephoneDirectionsTypes = [
    {label: 'SMS and Calls', value: 'sms_calls'},
    {label: 'SMS only', value: 'sms'},
    {label: 'No SMS', value: 'no_sms'},
  ]
  return (
    <div>
      <div className='my-5'>
        <h4 className='text-base mb-1'>Contact Details</h4>
        <p className='text-danger'>
          ATTENTION: Do not enter or write sexually explicit texts, contacts, services, timetables
          and prices, otherwise it will not be published or the profile will be blocked and
          DEACTIVATED by the Staff!
        </p>
      </div>
      {/* end::Contact Details */}

      <div className='row border rounded p-4'>
        {/* National country code start */}
        <div className='col-lg-6 col-12 my-5'>
          <label className='form-label fw-bolder text-dark fs-6'>National country code</label>
          <select className='form-select' aria-label='Select example'>
            <option>Select country code</option>
            <option>Italy (+39)</option>
          </select>
        </div>
        {/* National country code end */}
        {/* Telephone number Start */}
        <div className='col-lg-6 col-12 my-5'>
          <label className='form-label fw-bolder text-dark fs-6 required'>Telephone Number</label>
          <input
            placeholder='Telephone number'
            type='text'
            autoComplete='off'
            //   {...formik.getFieldProps('firstname')}
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
        {/* Telephone number End */}
        {/* Apps Available start */}
        <div className='col-lg-6 col-12 my-5'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6 '>Apps Available</label>
            <div className='d-flex my-3'>
              {appsAvailavbleTypes.map((option) => (
                <>
                  <div className='form-check form-check-custom form-check-solid me-3'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='hair_color'
                      id={option.value}
                      value={option.value}
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
        {/* Apps Available end */}
        {/* Email address Start */}
        <div className='col-lg-6 col-12 my-5'>
          <label className='form-label fw-bolder text-dark fs-6 '>Email Address</label>
          <input
            placeholder='example@provider.com'
            type='text'
            autoComplete='off'
            //   {...formik.getFieldProps('firstname')}
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
        {/* Email address End */}
        {/* Website / URL Start */}
        <div className='col-lg-6 col-12 my-5'>
          <label className='form-label fw-bolder text-dark fs-6 '>Website / URL</label>
          <input
            placeholder='https://www.example.com'
            type='text'
            autoComplete='off'
            //   {...formik.getFieldProps('firstname')}
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
        {/* Website / URL End */}

        {/* Telephone Directions start */}
        <div className='col-lg-6 col-12 my-5'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6 required'>
              Telephone Directions
            </label>
            <div className='d-flex'>
              {telephoneDirectionsTypes.map((option) => (
                <>
                  <div className='form-check form-check-custom form-check-solid me-3'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='eye_color'
                      id={option.value}
                      value={option.value}
                    />
                    <label key={option.value} className='form-check-label fs-6'>
                      {option.label}
                    </label>
                  </div>
                </>
              ))}
              <div className='form-check form-check-custom form-check-solid me-3'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  name='notAnonymous'
                  id={'notAnonymous'}
                  value={'notAnonymous'}
                />
                <label key={'notAnonymous'} className='form-check-label fs-6'>
                  {'Not Anonymous'}
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Telephone Directions end */}
      </div>
    </div>
  )
}
