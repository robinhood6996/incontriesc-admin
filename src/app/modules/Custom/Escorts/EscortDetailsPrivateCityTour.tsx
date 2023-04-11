import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_green.css'
import clsx from 'clsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'

export default function EscortDetailsPrivateCityTour() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [numberChecked, setNumberChecked] = useState(false)

  const handleDateChange = (date: Date[]) => {
    setSelectedDate(date[0] || null)
  }

  const appsAvailavbleTypes = [
    {label: 'Whatsapp', value: 'whatsapp'},
    {label: 'Telegram', value: 'telegram'},
    {label: 'Viber', value: 'viber'},
  ]
  const instructionsTypes = [
    {label: 'SMS and Calls', value: 's&c'},
    {label: 'SMS/Whatsapp/Viber only', value: 'SMS/Whatsapp/Viber only'},
    {label: 'No SMS', value: 'no'},
  ]

  return (
    <div>
      {/* <div className='my-5'>
        <h2 className='text-base mb-1'>ACTIVE / PLANNED TOURS</h2>
        <p>
          A list of Active and Planned tours will be displayed here. On your profile page, scheduled
          tours will appear 7 days before the start date.
        </p>
        <p className='text-warning'>
          Attention! If multiple cities have been added to your profile, when you are On Tour you
          will only be visible in your Main City, in the Tour City and in the City for which you
          have purchased a Premium Position or other Paid Options.
        </p>
        <p>You currently have no active or planned tours.</p>
      </div>
      <div className='my-5'>
        <h2 className='text-base mb-1'>HISTORICAL</h2>
        <p>
          A list of past tours will be displayed here. Please click on the right arrow to open/close
          tour history.
        </p>
        <p>No history</p>
      </div>

      <div className='my-5'>
        <h2 className='text-base mb-1'>ADD A NEW TOUR</h2>
      </div> */}

      <div className='row border rounded p-4 flex-column'>
        {/* Visit City start */}
        <div className='col-lg-6 col-12 mb-3'>
          <label className='form-label fw-bolder text-dark fs-6 required'>Visit City</label>
          <select className='form-select' aria-label='Select example'>
            <option>Select city</option>
            <option value='1'>Milan</option>
            <option value='1'>Rome</option>
          </select>
        </div>
        {/* Visit City end */}
        <div className='col-md-4 col-12 mb-3'>
          <label className='fw-bolder text-dark fs-6 mb-2'>Period</label>
          <Flatpickr
            className={clsx('form-control form-control-lg form-control-solid')}
            data-input
            data-enable-time
            // value={selectedDate}
            onChange={handleDateChange}
            placeholder='From date & time'
            options={{
              disableMobile: true,
              enableTime: true,
              dateFormat: 'Y-m-d H:i',
            }}
          >
            {/* <input type='text' placeholder='Select Date..' data-input /> */}
          </Flatpickr>
          <Flatpickr
            className={clsx('form-control form-control-lg form-control-solid mt-2')}
            data-input
            data-enable-time
            // value={selectedDate}
            onChange={handleDateChange}
            placeholder='To date & time'
            options={{
              disableMobile: true,
              enableTime: true,
              dateFormat: 'Y-m-d H:i',
            }}
          >
            {/* <input type='text' placeholder='Select Date..' data-input /> */}
          </Flatpickr>
        </div>
        <label className='form-label fw-bolder text-dark fs-3 mt-2'>Contacts</label>
        <div className='col-lg-6 col-12 mb-3'>
          <label className='form-label fw-bolder text-dark fs-6 required'>
            Select country code
          </label>
          <select className='form-select' aria-label='Select example'>
            <option>country code</option>
            <option value='1'>Italy (+39)</option>
            <option value='1'>Italy (+39)</option>
          </select>
        </div>
        {/* Telephone number start */}
        <div className='col-lg-6 col-12 mb-3'>
          <label className='form-label fw-bolder text-dark fs-6 required'>Telephone number</label>
          <div className='d-flex align-items-center'>
            <input
              placeholder='Telephone number'
              type='text'
              autoComplete='off'
              //   {...formik.getFieldProps('firstname')}
              className={clsx('form-control form-control-lg form-control-solid w-75')}
            />
            <FontAwesomeIcon
              className='btn btn-primary p-1 my-0 ms-3'
              style={{fontSize: '38px'}}
              icon={faPlusSquare}
              onClick={() => {
                setNumberChecked(!numberChecked)
              }}
            />
          </div>
        </div>
        {/* Telephone number end */}
        {/* Apps Available start */}
        {numberChecked && (
          <>
            <div className='col-lg-6 col-12 mt-2 mb-2'>
              <div>
                <label className='form-label fw-bolder text-dark fs-6 '>Apps Available</label>
                <div className='d-flex my-2'>
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
            <div className='col-lg-6 col-12 mb-5'>
              <div>
                <label className='form-label fw-bolder text-dark fs-6 '>Instructions</label>
                <div className='d-flex my-2'>
                  {instructionsTypes.map((option) => (
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
            <div className='col-lg-6 col-12 mb-5'>
              <div className=' form-check form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  name='hair_color'
                  id={'Anonymous'}
                  value={'noAnonymous'}
                />
                <label className='form-check-label fw-bold fs-6'>No Anonymous</label>
              </div>
            </div>
          </>
        )}
        {/* Apps Available end */}
        {/* Email address Start */}
        <div className='col-lg-6 col-12 mb-3'>
          <label className='form-label fw-bolder text-dark fs-6 required'>Email address</label>
          <input
            placeholder='Enter email'
            type='text'
            autoComplete='off'
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
      </div>
      {/* Email address end */}

      <div className='mt-4 d-flex justify-end'>
        <button type='submit' id='kt_sign_up_submit' className='btn btn-lg btn-primary w-25 mb-5'>
          Submit
        </button>
      </div>
    </div>
  )
}
