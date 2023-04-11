import clsx from 'clsx'
import React from 'react'

export default function EscortDetailsWorkingCities() {
  const englishLanguageOptions = [
    {label: 'Essential', value: 'essential'},
    {label: 'Discrete', value: 'discrete'},
    {label: 'Good', value: 'good'},
    {label: 'Excellent/Native', value: 'native'},
  ]
  return (
    <div>
      <div className='my-5'>
        <h2 className='text-base mb-1'>Working Cities</h2>
        <p className='text-danger'>
          Attention! When entering Working Cities, please keep in mind that the distance of the
          Second, Third and Fourth cities should not exceed 100 km from the Base City.
        </p>
      </div>

      <div className='row border rounded p-4'>
        {/* base city start */}
        <div className='col-lg-6 col-12 mb-3'>
          <label className='form-label fw-bolder text-dark fs-6 required'>Base City</label>
          <select className='form-select' aria-label='Select example'>
            <option>Select age</option>
            <option value='1' selected>
              Rome
            </option>
            <option value='1'>Milan</option>
            <option value='1'>Turin</option>
            <option value='1'>Naples</option>
          </select>
        </div>
        {/* base city end */}
        {/* Second city start */}
        <div className='col-lg-6 col-12 mb-3'>
          <label className='form-label fw-bolder text-dark fs-6 '>Second City</label>
          <select className='form-select' aria-label='Select example'>
            <option>Select age</option>
            <option value='1'>Rome</option>
            <option value='1' selected>
              Milan
            </option>
            <option value='1'>Turin</option>
            <option value='1'>Naples</option>
          </select>
        </div>
        {/* Second city end */}
        {/* Third city start */}
        <div className='col-lg-6 col-12 mb-3'>
          <label className='form-label fw-bolder text-dark fs-6 '>Third City</label>
          <select className='form-select' aria-label='Select example'>
            <option>Select age</option>
            <option value='1'>Rome</option>
            <option value='1'>Milan</option>
            <option value='1' selected>
              Turin
            </option>
            <option value='1'>Naples</option>
          </select>
        </div>
        {/* base city end */}
        {/* Fourth city start */}
        <div className='col-lg-6 col-12 mb-3'>
          <label className='form-label fw-bolder text-dark fs-6 '>Fourth City</label>
          <select className='form-select' aria-label='Select example'>
            <option>Select age</option>
            <option value='1'>Rome</option>
            <option value='1'>Milan</option>
            <option value='1'>Turin</option>
            <option value='1' selected>
              Naples
            </option>
          </select>
        </div>
        {/* Fourth city end */}
        {/* base city start */}
        <div className='col-lg-6 col-12 mb-3'>
          <label className='form-label fw-bolder text-dark fs-6 '>
            Your selected zone (Settimo Milanese)
          </label>
          <select className='form-select' aria-label='Select example' disabled>
            <option value='1' selected>
              Settimo Milanese
            </option>
          </select>
        </div>
        {/* base city end */}
      </div>

      <div className='my-5'>
        <h2 className='text-base mb-1'>Exact Location (Settimo Milanese)</h2>
        <p className='text-danger'>
          You can better position the pin by simply dragging it to the desired point on the map.
        </p>
      </div>

      <div className='row border rounded p-4'>
        {/* Get start */}
        <div className='col-lg-6 col-12 mb-3'>
          <label className='form-label fw-bolder text-dark fs-6'>Get</label>
          <select className='form-select' aria-label='Select example'>
            <option>Select type</option>
            <option value='1' selected>
              Private apartment
            </option>
            <option value='1'>Hotel room</option>
            <option value='1'>Studio club</option>
            <option value='1'>Other (please provide details)</option>
          </select>
        </div>
        {/* Get end */}
        {/* Head Start */}
        <div className='col-lg-6 col-12 mb-3'>
          <label className='form-label fw-bolder text-dark fs-6'>Head</label>
          <input
            placeholder='Head'
            type='text'
            autoComplete='off'
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
        {/* Head End */}
        {/* Outcall for start */}
        <div className='col-lg-6 col-12 mb-3'>
          <label className='form-label fw-bolder text-dark fs-6'>Outcall</label>
          <select className='form-select' aria-label='Select example'>
            <option>Select type</option>
            <option value='1'>Others only in hotel</option>
            <option value='1'>Others only in home</option>
            <option value='1' selected>
              Others only in hotel & home
            </option>
            <option value='1'>Other (please provide details)</option>
          </select>
        </div>
        {/* Outcall for end */}
        {/* Head Start */}
        <div className='col-lg-6 col-12 mb-3'>
          <label className='form-label fw-bolder text-dark fs-6'>Others Details</label>
          <input
            placeholder='Others Details'
            type='text'
            autoComplete='off'
            className={clsx('form-control form-control-lg form-control-solid')}
          />
        </div>
        {/* Head End */}
      </div>

      <div className='mt-4 d-flex justify-end'>
        <button type='submit' id='kt_sign_up_submit' className='btn btn-lg btn-primary w-25 mb-5'>
          Submit
        </button>
      </div>
    </div>
  )
}
