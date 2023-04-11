import React, {useState} from 'react'
// import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_green.css'
import clsx from 'clsx'

export default function EscortDetailsWorkingHours() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleDateChange = (date: Date[]) => {
    setSelectedDate(date[0] || null)
  }
  const options = {
    maxDate: new Date(),
    mode: 'range',
    altInputClass: 'hide',
    dateFormat: 'M d Y',
    minDate: new Date('01-01-2018'),

    // THIS `wrap` option is required when using external elements!
    // https://flatpickr.js.org/examples/#flatpickr-external-elements
    wrap: true,
  }

  return (
    <div>
      <div className='my-5'>
        <h2 className='text-base mb-1'>Working Hours</h2>
      </div>

      <div className='row border rounded p-4'>
        {/* allTime start */}
        <div className='col-12 mb-3'>
          <div className='form-check form-check-custom form-check-solid form-check-sm me-3'>
            <input className='form-check-input' type='checkbox' value='' id={'allTime'} />
            <label className='form-check-label' htmlFor={'allTime'}>
              I am available 24/7
            </label>
          </div>
        </div>
        {/* allTime end */}
        {/* monday row start */}
        <div className='d-lg-flex align-items-center flex-lg-row flex-column'>
          {/* monday start */}
          <div className='d-flex col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm me-3'>
              <input className='form-check-input' type='checkbox' value='' id={'Monday'} />
              <label className='form-check-label' htmlFor={'Monday'}>
                Monday
              </label>
            </div>
          </div>
          {/* monday end */}
          {/* monday time from start */}
          <div className='col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm me-3'>
              <label className='form-label fw-bolder text-dark fs-6 me-2'>from</label>
              <select className='form-select' aria-label='Select example'>
                <option>Select time</option>
                <option value='1'>10:00 AM</option>
                <option value='1'>11:00 AM</option>
                <option value='1'>12:00 AM</option>
              </select>
            </div>
          </div>
          <div className='col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm'>
              <label className='form-label fw-bolder text-dark fs-6 me-2'>towards</label>
              <select className='form-select' aria-label='Select example'>
                <option>Select time</option>
                <option value='1'>11:00 AM</option>
                <option value='1'>12:00 AM</option>
                <option value='1'>01:00 PM</option>
              </select>
            </div>
          </div>
          {/* monday time from end */}
        </div>
        {/* monday row end */}
        {/* Tuesday row start */}
        <div className='d-lg-flex align-items-center flex-lg-row flex-column'>
          {/* Tuesday start */}
          <div className='d-flex col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm me-3'>
              <input className='form-check-input' type='checkbox' value='' id={'Tuesday'} />
              <label className='form-check-label' htmlFor={'Tuesday'}>
                Tuesday
              </label>
            </div>
          </div>
          {/* Tuesday end */}
          {/* Tuesday time from start */}
          <div className='col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm me-3'>
              <label className='form-label fw-bolder text-dark fs-6 me-2'>from</label>
              <select className='form-select' aria-label='Select example'>
                <option>Select time</option>
                <option value='1'>10:00 AM</option>
                <option value='1'>11:00 AM</option>
                <option value='1'>12:00 AM</option>
              </select>
            </div>
          </div>
          <div className='col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm'>
              <label className='form-label fw-bolder text-dark fs-6 me-2'>towards</label>
              <select className='form-select' aria-label='Select example'>
                <option>Select time</option>
                <option value='1'>11:00 AM</option>
                <option value='1'>12:00 AM</option>
                <option value='1'>01:00 PM</option>
              </select>
            </div>
          </div>
          {/* Tuesday time from end */}
        </div>
        {/* Tuesday row end */}
        {/* Wednesday row start */}
        <div className='d-lg-flex align-items-center flex-lg-row flex-column'>
          {/* Wednesday start */}
          <div className='d-flex col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm me-3'>
              <input className='form-check-input' type='checkbox' value='' id={'Wednesday'} />
              <label className='form-check-label' htmlFor={'Wednesday'}>
                Wednesday
              </label>
            </div>
          </div>
          {/* Wednesday end */}
          {/* Wednesday time from start */}
          <div className='col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm me-3'>
              <label className='form-label fw-bolder text-dark fs-6 me-2'>from</label>
              <select className='form-select' aria-label='Select example'>
                <option>Select time</option>
                <option value='1'>10:00 AM</option>
                <option value='1'>11:00 AM</option>
                <option value='1'>12:00 AM</option>
              </select>
            </div>
          </div>
          <div className='col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm'>
              <label className='form-label fw-bolder text-dark fs-6 me-2'>towards</label>
              <select className='form-select' aria-label='Select example'>
                <option>Select time</option>
                <option value='1'>11:00 AM</option>
                <option value='1'>12:00 AM</option>
                <option value='1'>01:00 PM</option>
              </select>
            </div>
          </div>
          {/* Wednesday time from end */}
        </div>
        {/* Wednesday row end */}

        {/* Thursday row start */}
        <div className='d-lg-flex align-items-center flex-lg-row flex-column'>
          {/* Wednesday start */}
          <div className='d-flex col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm me-3'>
              <input className='form-check-input' type='checkbox' value='' id={'Thursday'} />
              <label className='form-check-label' htmlFor={'Thursday'}>
                Thursday
              </label>
            </div>
          </div>
          {/* Thursday end */}
          {/* Thursday time from start */}
          <div className='col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm me-3'>
              <label className='form-label fw-bolder text-dark fs-6 me-2'>from</label>
              <select className='form-select' aria-label='Select example'>
                <option>Select time</option>
                <option value='1'>10:00 AM</option>
                <option value='1'>11:00 AM</option>
                <option value='1'>12:00 AM</option>
              </select>
            </div>
          </div>
          <div className='col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm'>
              <label className='form-label fw-bolder text-dark fs-6 me-2'>towards</label>
              <select className='form-select' aria-label='Select example'>
                <option>Select time</option>
                <option value='1'>11:00 AM</option>
                <option value='1'>12:00 AM</option>
                <option value='1'>01:00 PM</option>
              </select>
            </div>
          </div>
          {/* Thursday time from end */}
        </div>
        {/* Thursday row end */}

        {/* Friday row start */}
        <div className='d-lg-flex align-items-center flex-lg-row flex-column'>
          {/* Wednesday start */}
          <div className='d-flex col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm me-3'>
              <input className='form-check-input' type='checkbox' value='' id={'Friday'} />
              <label className='form-check-label' htmlFor={'Friday'}>
                Friday
              </label>
            </div>
          </div>
          {/* Friday end */}
          {/* Friday time from start */}
          <div className='col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm me-3'>
              <label className='form-label fw-bolder text-dark fs-6 me-2'>from</label>
              <select className='form-select' aria-label='Select example'>
                <option>Select time</option>
                <option value='1'>10:00 AM</option>
                <option value='1'>11:00 AM</option>
                <option value='1'>12:00 AM</option>
              </select>
            </div>
          </div>
          <div className='col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm'>
              <label className='form-label fw-bolder text-dark fs-6 me-2'>towards</label>
              <select className='form-select' aria-label='Select example'>
                <option>Select time</option>
                <option value='1'>11:00 AM</option>
                <option value='1'>12:00 AM</option>
                <option value='1'>01:00 PM</option>
              </select>
            </div>
          </div>
          {/* Friday time from end */}
        </div>
        {/* Friday row end */}

        {/* Saturday row start */}
        <div className='d-lg-flex align-items-center flex-lg-row flex-column'>
          {/* Wednesday start */}
          <div className='d-flex col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm me-3'>
              <input className='form-check-input' type='checkbox' value='' id={'Saturday'} />
              <label className='form-check-label' htmlFor={'Saturday'}>
                Saturday
              </label>
            </div>
          </div>
          {/* Saturday end */}
          {/* Saturday time from start */}
          <div className='col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm me-3'>
              <label className='form-label fw-bolder text-dark fs-6 me-2'>from</label>
              <select className='form-select' aria-label='Select example'>
                <option>Select time</option>
                <option value='1'>10:00 AM</option>
                <option value='1'>11:00 AM</option>
                <option value='1'>12:00 AM</option>
              </select>
            </div>
          </div>
          <div className='col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm'>
              <label className='form-label fw-bolder text-dark fs-6 me-2'>towards</label>
              <select className='form-select' aria-label='Select example'>
                <option>Select time</option>
                <option value='1'>11:00 AM</option>
                <option value='1'>12:00 AM</option>
                <option value='1'>01:00 PM</option>
              </select>
            </div>
          </div>
          {/* Saturday time from end */}
        </div>
        {/* Saturday row end */}

        {/* Sunday row start */}
        <div className='d-lg-flex align-items-center flex-lg-row flex-column'>
          {/* Wednesday start */}
          <div className='d-flex col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm me-3'>
              <input className='form-check-input' type='checkbox' value='' id={'Sunday'} />
              <label className='form-check-label' htmlFor={'Sunday'}>
                Sunday
              </label>
            </div>
          </div>
          {/* Sunday end */}
          {/* Sunday time from start */}
          <div className='col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm me-3'>
              <label className='form-label fw-bolder text-dark fs-6 me-2'>from</label>
              <select className='form-select' aria-label='Select example'>
                <option>Select time</option>
                <option value='1'>10:00 AM</option>
                <option value='1'>11:00 AM</option>
                <option value='1'>12:00 AM</option>
              </select>
            </div>
          </div>
          <div className='col-lg-4 col-12 mb-3'>
            <div className='form-check form-check-custom form-check-solid form-check-sm'>
              <label className='form-label fw-bolder text-dark fs-6 me-2'>towards</label>
              <select className='form-select' aria-label='Select example'>
                <option>Select time</option>
                <option value='1'>11:00 AM</option>
                <option value='1'>12:00 AM</option>
                <option value='1'>01:00 PM</option>
              </select>
            </div>
          </div>
          {/* Sunday time from end */}
        </div>
        {/* Sunday row end */}
      </div>

      <div className='my-5'>
        <h2 className='text-base mb-1'>Vacation</h2>
      </div>

      <div className='row border rounded p-4'>
        <div className='col-md-3 col-12 mb-3'>
          <label className='fw-bolder text-dark fs-6 mb-2'>From</label>
          {/* <Flatpickr
            className={clsx('form-control form-control-lg form-control-solid')}
            data-input
            onChange={handleDateChange}
            options={{
              dateFormat: 'Y-m-d',
              disableMobile: true,
            }}
          >
          </Flatpickr> */}
        </div>
        <div className='col-md-3 col-12 mb-3'>
          <label className='fw-bolder text-dark fs-6 mb-2'>Towards</label>
          {/* <Flatpickr
            className={clsx('form-control form-control-lg form-control-solid')}
            data-input
            onChange={handleDateChange}
            options={{
              dateFormat: 'Y-m-d',
              disableMobile: true,
            }}
          >
          </Flatpickr> */}
        </div>
      </div>

      <div className='mt-4 d-flex justify-end'>
        <button type='submit' id='kt_sign_up_submit' className='btn btn-lg btn-primary w-25 mb-5'>
          Submit
        </button>
      </div>
    </div>
  )
}
