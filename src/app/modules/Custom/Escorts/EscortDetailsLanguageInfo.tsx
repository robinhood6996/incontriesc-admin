import React from 'react'

export default function EscortDetailsLanguageInfo() {
  const englishLanguageOptions = [
    {label: 'Essential', value: 'essential'},
    {label: 'Discrete', value: 'discrete'},
    {label: 'Good', value: 'good'},
    {label: 'Excellent/Native', value: 'native'},
  ]
  const frenchLanguageOptions = [
    {label: 'Basic', value: 'basic'},
    {label: 'Fair', value: 'fair'},
    {label: 'Good', value: 'good'},
    {label: 'Excellent/Native', value: 'native'},
  ]
  const germanLanguageOptions = [
    {label: 'Basic', value: 'basic'},
    {label: 'Fair', value: 'fair'},
    {label: 'Good', value: 'good'},
    {label: 'Excellent/Native', value: 'native'},
  ]
  const italianLanguageOptions = [
    {label: 'Basic', value: 'basic'},
    {label: 'Fair', value: 'fair'},
    {label: 'Good', value: 'good'},
    {label: 'Excellent/Native', value: 'native'},
  ]
  const russianLanguageOptions = [
    {label: 'Basic', value: 'basic'},
    {label: 'Fair', value: 'fair'},
    {label: 'Good', value: 'good'},
    {label: 'Excellent/Native', value: 'native'},
  ]
  const spanishLanguageOptions = [
    {label: 'Basic', value: 'basic'},
    {label: 'Fair', value: 'fair'},
    {label: 'Good', value: 'good'},
    {label: 'Excellent/Native', value: 'native'},
  ]
  return (
    <div className='row border rounded p-4'>
      <div className='row my-5'>
        <h2 className='text-base mb-1'>Language Information</h2>
      </div>

      <div className='row border rounded p-4'>
        {/* English Language start */}
        <div className='col-lg-6 col-12 my-5 mx-auto'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6 required'>English</label>
            <div className='d-flex'>
              {englishLanguageOptions.map((option, index) => (
                <>
                  <div className='form-check form-check-custom form-check-solid me-3'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='english'
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
        {/* English Language end */}
        {/* French Language start */}
        <div className='col-lg-6 col-12 my-5'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6 required'>French</label>
            <div className='d-flex'>
              {frenchLanguageOptions.map((option, index) => (
                <>
                  <div className='form-check form-check-custom form-check-solid me-3'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='french'
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
        {/* French Language end */}
        {/* German Language start */}
        <div className='col-lg-6 col-12 my-5'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6 required'>German</label>
            <div className='d-flex'>
              {germanLanguageOptions.map((option, index) => (
                <>
                  <div className='form-check form-check-custom form-check-solid me-3'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='german'
                      id={option.value}
                      value={option.value}
                      defaultChecked={index === 2}
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
        {/* German Language end */}
        {/* Italian Language start */}
        <div className='col-lg-6 col-12 my-5'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6 required'>Italian</label>
            <div className='d-flex'>
              {italianLanguageOptions.map((option, index) => (
                <>
                  <div className='form-check form-check-custom form-check-solid me-3'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='eye_color'
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
        {/* Italian Language end */}
        {/* Russian Language start */}
        <div className='col-lg-6 col-12 my-5'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6 required'>Russian</label>
            <div className='d-flex'>
              {russianLanguageOptions.map((option, index) => (
                <>
                  <div className='form-check form-check-custom form-check-solid me-3'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='eye_color'
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
        {/* Russian Language end */}
        {/* Spanish Language start */}
        <div className='col-lg-6 col-12 my-5'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6 required'>Spanish</label>
            <div className='d-flex'>
              {spanishLanguageOptions.map((option, index) => (
                <>
                  <div className='form-check form-check-custom form-check-solid me-3'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='eye_color'
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
        {/* Russian Language end */}
      </div>
    </div>
  )
}
