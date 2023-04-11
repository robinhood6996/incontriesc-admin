import React, {useState} from 'react'
// import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_green.css'
import clsx from 'clsx'

export default function EscortDetailsRates() {
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

    // THIS `wrap` option is  when using external elements!
    // https://flatpickr.js.org/examples/#flatpickr-external-elements
    wrap: true,
  }

  return (
    <div>
      <div className='my-5'>
        <h2 className='text-base mb-1'>Odds</h2>
      </div>

      <div className='row border rounded p-4'>
        <div className='col-lg-4 col-12 mb-3'>
          <label className='fw-bolder text-dark fs-6 mb-2'>Price currencies</label>
          <select className='form-select' aria-label='Select example'>
            <option>Select currency</option>
            <option value='1' selected>
              USD
            </option>
            <option value='1'>EUR</option>
            <option value='1'>GBP</option>
          </select>
        </div>
      </div>

      <div className='my-5'>
        <h2 className='text-base mb-1'>Reach home</h2>
      </div>

      <div className='row border rounded p-4'>
        <div className='col-md-3 col-12 mb-3'>
          <label className='fw-bolder text-dark fs-6 mb-2'>1 hour</label>
          <input
            placeholder='1 hour price'
            type='text'
            autoComplete='off'
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
        <div className='col-md-3 col-12 mb-3'>
          <label className='fw-bolder text-dark fs-6 mb-2'>3 hours</label>
          <input
            placeholder='3 hours price'
            type='text'
            autoComplete='off'
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
        <div className='col-md-3 col-12 mb-3'>
          <label className='fw-bolder text-dark fs-6 mb-2'>Additional hour</label>
          <input
            placeholder='Additional hour price'
            type='text'
            autoComplete='off'
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
        <div className='col-md-3 col-12 mb-3'>
          <label className='fw-bolder text-dark fs-6 mb-2'>Night</label>
          <input
            placeholder='Night price'
            type='text'
            autoComplete='off'
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
        <div className='col-md-3 col-12 mb-3'>
          <label className='fw-bolder text-dark fs-6 mb-2'>Dinner date</label>
          <input
            placeholder='Dinner date price'
            type='text'
            autoComplete='off'
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
        <div className='col-md-3 col-12 mb-3'>
          <label className='fw-bolder text-dark fs-6 mb-2'>Weekend</label>
          <input
            placeholder='Weekend price'
            type='text'
            autoComplete='off'
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
      </div>

      <div className='my-5'>
        <h2 className='text-base mb-1'>Host</h2>
      </div>

      <div className='row border rounded p-4'>
        <div className='col-md-3 col-12 mb-3'>
          <label className='fw-bolder text-dark fs-6 mb-2'>1 hour</label>
          <input
            placeholder='1 hour price'
            type='text'
            autoComplete='off'
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
        <div className='col-md-3 col-12 mb-3'>
          <label className='fw-bolder text-dark fs-6 mb-2'>3 hours</label>
          <input
            placeholder='3 hours price'
            type='text'
            autoComplete='off'
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
        <div className='col-md-3 col-12 mb-3'>
          <label className='fw-bolder text-dark fs-6 mb-2'>Additional hour</label>
          <input
            placeholder='Additional hour price'
            type='text'
            autoComplete='off'
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
        <div className='col-md-3 col-12 mb-3'>
          <label className='fw-bolder text-dark fs-6 mb-2'>Night</label>
          <input
            placeholder='Night price'
            type='text'
            autoComplete='off'
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
        <div className='col-md-3 col-12 mb-3'>
          <label className='fw-bolder text-dark fs-6 mb-2'>Dinner date</label>
          <input
            placeholder='Dinner date price'
            type='text'
            autoComplete='off'
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
        <div className='col-md-3 col-12 mb-3'>
          <label className='fw-bolder text-dark fs-6 mb-2'>Weekend</label>
          <input
            placeholder='Weekend price'
            type='text'
            autoComplete='off'
            className={clsx('form-control form-control-lg form-control-solid')}
          />
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
