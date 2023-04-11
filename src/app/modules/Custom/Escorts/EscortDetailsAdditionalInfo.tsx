import React from 'react'

export default function EscortDetailsAdditionalInfo() {
  const toSmokeTypes = [
    {label: 'Yes', value: 'yes'},
    {label: 'No', value: 'no'},
    {label: 'Occasionally', value: 'occasionally'},
  ]
  const drinkingTypes = [
    {label: 'Yes', value: 'yes'},
    {label: 'No', value: 'no'},
    {label: 'Occasionally', value: 'occasionally'},
  ]
  return (
    <div className='row'>
      <div className='my-5'>
        <h2 className='text-base mb-1'>Physical Feature</h2>
      </div>

      <div className='row border rounded p-4'>
        {/* To smoke start */}
        <div className='col-lg-6 col-12 my-5'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6 required'>To smoke</label>
            <div className='d-flex'>
              {toSmokeTypes.map((option) => (
                <>
                  <div className='form-check form-check-custom form-check-solid me-3'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='to_smoke'
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
        {/* To smoke end */}
        {/* Drinking start */}
        <div className='col-lg-6 col-12 my-5'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6 required'>Drinking</label>
            <div className='d-flex'>
              {drinkingTypes.map((option) => (
                <>
                  <div className='form-check form-check-custom form-check-solid me-3'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='drinking'
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
        {/* Drinking end */}
        {/* Tattoos start */}
        <div className='col-lg-6 col-12 my-5'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6 required'>Tattoos</label>
            <div className='d-flex'>
              <div className='form-check form-check-custom form-check-solid me-3'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='tattoos1'
                  id={'tattooYes'}
                  value={'yes'}
                />
                <label key={'tattoo1'} className='form-check-label fs-6'>
                  Yes
                </label>
              </div>
              <div className='form-check form-check-custom form-check-solid me-3'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='tattoos2'
                  id={'no'}
                  value={'no'}
                />
                <label key={'tattoo2'} className='form-check-label fs-6'>
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Tattoos end */}
        {/* Piercings start */}
        <div className='col-lg-6 col-12 my-5'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6 required'>Piercings</label>
            <div className='d-flex'>
              <div className='form-check form-check-custom form-check-solid me-3'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='piercings1'
                  id={'PiercingsYes'}
                  value={'yes'}
                />
                <label key={'Piercings1'} className='form-check-label fs-6'>
                  Yes
                </label>
              </div>
              <div className='form-check form-check-custom form-check-solid me-3'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='piercings2'
                  id={'PiercingsNo'}
                  value={'no'}
                />
                <label key={'Piercings2'} className='form-check-label fs-6'>
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Piercings end */}
      </div>
    </div>
  )
}
