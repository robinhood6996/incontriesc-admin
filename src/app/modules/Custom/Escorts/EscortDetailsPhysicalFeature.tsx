import clsx from 'clsx'

export default function EscortDetailsPhysicalFeature() {
  const hairColorTypes = [
    {label: 'Blonde', value: 'blonde'},
    {label: 'Light brown', value: 'light_brown'},
    {label: 'Brunette', value: 'brunette'},
    {label: 'Black', value: 'black'},
    {label: 'Red', value: 'red'},
  ]

  const breastTypes = [
    {label: 'Natural', value: 'natural'},
    {label: 'Silicone', value: 'silicone'},
  ]

  const pubicHairTypes = [
    {label: 'Completely Shaved', value: 'completely-shaved'},
    {label: 'Mostly shaved', value: 'mostly_shaved'},
    {label: 'French way', value: 'french_way'},
    {label: 'Completely natural', value: 'completely_natural'},
  ]

  const eyeColorTypes = [
    {label: 'Black', value: 'black'},
    {label: 'Browns', value: 'browns'},
    {label: 'Greens', value: 'greens'},
    {label: 'Blues', value: 'Blues'},
    {label: 'Grays', value: 'grays'},
  ]

  const hairLengthOptions = [
    {value: 'very_short', label: 'Very Short'},
    {value: 'short', label: 'Short'},
    {value: 'average', label: 'Average'},
    {value: 'long', label: 'Long'},
    {value: 'very_long', label: 'Very Long'},
    {value: 'without', label: 'Without'},
  ]
  return (
    <div className='row'>
      {/* begin::Your body */}
      <div className='my-5'>
        <h2 className='text-base mb-1'>Physical Feature</h2>
      </div>
      {/* end::Your body */}

      <div className='row border rounded p-2'>
        {/* Hair color start */}
        <div className='col-lg-6 col-12 my-3'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6 required'>Hair color</label>
            <div className='d-flex'>
              {hairColorTypes.map((option) => (
                <>
                  <div className='form-check form-check-custom form-check-solid me-3'>
                    <input
                      className='form-check-input'
                      type='radio'
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
        {/* Hair color end */}

        {/* Eye color start */}
        <div className='col-lg-12 col-12 my-3'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6 required'>Eye color</label>
            <div className='d-flex'>
              {eyeColorTypes.map((option) => (
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
            </div>
          </div>
        </div>
        {/* Eye color end */}
        {/* Hair length start */}
        <div className='col-lg-4 col-12 my-3'>
          <label className='form-label fw-bolder text-dark fs-6'>Hair length</label>
          <select className='form-select' aria-label='Select example'>
            <option>Select hair length</option>
            {hairLengthOptions?.map((option, index) => {
              return (
                <>
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                </>
              )
            })}
          </select>
        </div>
        {/* Hair length end */}
        {/* Height start */}
        <div className='col-lg-4 col-12 my-3'>
          <label className='form-label fw-bolder text-dark fs-6'>Height</label>
          <select className='form-select' aria-label='Select example'>
            <option>Select height</option>
            <option value='1'>One</option>
            <option value='1'>One</option>
            <option value='1'>One</option>
            <option value='1'>One</option>
          </select>
        </div>
        {/* Height end */}
        {/* Weight start */}
        <div className='col-lg-4 col-12 my-3'>
          <label className='form-label fw-bolder text-dark fs-6'>Weight</label>
          <select className='form-select' aria-label='Select example'>
            <option>Select weight</option>
            <option value='1'>One</option>
            <option value='1'>One</option>
            <option value='1'>One</option>
            <option value='1'>One</option>
          </select>
        </div>
        {/* Weight end */}
        {/* Size clothes start */}
        <div className='col-lg-4 col-12 my-3'>
          <label className='form-label fw-bolder text-dark fs-6'>Size clothes</label>
          <select className='form-select' aria-label='Select example'>
            <option>Select size clothes</option>
            <option value='1'>One</option>
            <option value='1'>One</option>
            <option value='1'>One</option>
            <option value='1'>One</option>
          </select>
        </div>
        {/* Size clothes end */}
        {/* Shoe size start */}
        <div className='col-lg-4 col-12 my-3'>
          <label className='form-label fw-bolder text-dark fs-6'>Shoe size</label>
          <select className='form-select' aria-label='Select example'>
            <option>Select shoe size</option>
            <option value='1'>38 EU / 7.5 US / 5.5 UK</option>
            <option value='1'>38 EU / 7.5 US / 5.5 UK</option>
            <option value='1'>38 EU / 7.5 US / 5.5 UK</option>
            <option value='1'>38 EU / 7.5 US / 5.5 UK</option>
            <option value='1'>38 EU / 7.5 US / 5.5 UK</option>
          </select>
        </div>
        {/* Shoe size end */}
        {/* Bust-Waist-Hips start */}
        <div className='col-lg-4 col-12 my-3'>
          <label className='form-label fw-bolder text-dark fs-6'>Bust-Waist-Hips</label>
          <div className=''>
            <input
              placeholder='eg. 90-60-90'
              type='text'
              autoComplete='off'
              //   {...formik.getFieldProps('firstname')}
              className={clsx('w-100 form-control form-control-lg form-control-solid')}
            />
          </div>
        </div>
        <div className='col-lg-12 col-12 my-3'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6'>Pubic hair</label>
            <div className='d-flex'>
              {pubicHairTypes.map((option) => (
                <>
                  <div className='form-check form-check-custom form-check-solid me-3'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='pubic_hair'
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
        {/* Bust-Waist-Hips end */}
        {/* Breast size start */}
        <div className='col-lg-4 col-12 my-3'>
          <label className='form-label fw-bolder text-dark fs-6'>Breast size</label>
          <select className='form-select' aria-label='Select example'>
            <option>Select Breast size</option>
            <option value='1'>38 EU / 7.5 US / 5.5 UK</option>
            <option value='1'>38 EU / 7.5 US / 5.5 UK</option>
            <option value='1'>38 EU / 7.5 US / 5.5 UK</option>
            <option value='1'>38 EU / 7.5 US / 5.5 UK</option>
            <option value='1'>38 EU / 7.5 US / 5.5 UK</option>
          </select>
        </div>
        {/* Breast size end */}
        {/* Breast type start */}
        <div className='col-lg-4 col-12 my-3'>
          <div>
            <label className='form-label fw-bolder text-dark fs-6'>Breast</label>
            <div className='d-flex'>
              {breastTypes.map((option) => (
                <>
                  <div className='form-check form-check-custom form-check-solid me-3'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='breastType'
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
        {/* Breast type end */}
        {/* Pubic hair start */}

        {/* Pubic hair end */}
      </div>
    </div>
  )
}
