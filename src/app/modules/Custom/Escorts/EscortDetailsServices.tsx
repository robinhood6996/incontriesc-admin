import React, {useState} from 'react'

export default function EscortDetailsServices() {
  const [incomingCallType, setIncomingCallType] = useState('')
  const [outgoingCallType, setOutgoingCallType] = useState('')

  const offeredServicesOptions = [
    {label: 'Men', value: 'men'},
    {label: 'Gives', value: 'gives'},
    {label: 'Couples', value: 'couples'},
    {label: 'Trans', value: 'trans'},
    {label: 'Pornstar', value: 'pornstar'},
    {label: '2+', value: 'twoPlus'},
  ]
  const serviceDetailsOptions = [
    {label: 'Heterosexual', value: 'heterosexual'},
    {label: 'Bisexual', value: 'bisexual'},
    {label: 'Homosexual', value: 'homosexual'},
  ]
  const incomingOptions = [
    {label: 'Private apartment', value: 'private_apartment'},
    {label: 'Hotel room', value: 'hotel_room'},
    {label: 'Club / Studio', value: 'club_studio'},
    {label: 'Other', value: 'other'},
  ]
  const outgoingOptions = [
    {label: 'Hotel visits only', value: 'hotel'},
    {label: 'Home Visits Only', value: 'home'},
    {label: 'Hotel and Home Visits', value: 'hotel_home'},
    {label: 'Other', value: 'other'},
  ]

  const servicesProvidedOptions = [
    {label: 'Normal sex', value: 'normal_sex'},
    {label: 'Cum in Mouth', value: 'cum_in_mouth'},
    {label: 'Games/Toys Vibrator', value: 'games_toys_vibrator'},
    {label: 'Blowjob with condom', value: 'blowjob_condom'},
    {label: 'Erotic message', value: 'erotic_message'},
    {label: 'Tantric massage', value: 'tantric_massage'},
    {label: 'Sex in Group (with men or couple)', value: 'group_men_or_couple'},
    {label: 'Fetishes', value: 'fetishes'},
    {label: 'Squirting', value: 'squirting'},
    {label: 'Blowjob with swallow', value: 'blowjob_swallow'},
    {label: 'BDSM', value: 'bdsm'},
    {label: 'Position 69', value: 'position_69'},
    {label: 'Facial', value: 'facial'},
    {label: 'Kiss with tongue', value: 'facial'},
    {label: 'Blowjob without Condom', value: 'facial'},
    {label: 'Body Massage', value: 'facial'},
    {label: 'Prostatic massage', value: 'facial'},
    {label: 'Lesbian Show', value: 'facial'},
    {label: 'Golden rain', value: 'facial'},
    {label: 'Shower service', value: 'facial'},
    {label: 'Ball licking and sucking', value: 'facial'},
    {label: 'Mistresses (Soft)', value: 'facial'},
    {label: 'Anal Sex', value: 'facial'},
    {label: 'Cum on Body', value: 'facial'},
    {label: 'Sex with Friend or Transsexual', value: 'facial'},
    {label: 'Sex in Different positions', value: 'facial'},
    {label: 'Deep Throat', value: 'facial'},
    {label: 'Bisexual (for Couples)', value: 'facial'},
    {label: 'Striptease', value: 'facial'},
    {label: 'Role Playing and Fantasy', value: 'facial'},
    {label: 'Sex outdoors', value: 'facial'},
    {label: 'Kiss if there is understanding', value: 'facial'},
    {label: 'Mistress (Hard)', value: 'facial'},
  ]

  return (
    <div>
      <div className='my-5'>
        <h2 className='text-base mb-1'>Sexual orientation</h2>
      </div>
      <div className='row border rounded p-4'>
        {/* Sexual orientation start */}
        <div className='col-lg-3 col-12 mb-3'>
          {/* <label className='form-label fw-bolder text-dark fs-6 required'>Sexual orientation</label> */}
          <select className='form-select' aria-label='Select example'>
            <option>Select type</option>
            <option value='1' selected>
              Heterosexual
            </option>
            <option value='1'>Bisexual</option>
            <option value='1'>Homosexual</option>
          </select>
        </div>
        {/* Sexual orientation end */}
      </div>

      <div className='my-5'>
        <h2 className='text-base mb-1'>I offer services for</h2>
      </div>
      {/* services for start */}
      <div className='row border rounded p-4'>
        <div className='col-12'>
          <div className='d-flex'>
            {offeredServicesOptions?.map((option, index) => {
              return (
                <>
                  <div className='form-check form-check-custom form-check-solid form-check-sm me-3'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id={option.value}
                      defaultChecked={index === 2}
                    />
                    <label className='form-check-label' htmlFor={option.value}>
                      {option.label}
                    </label>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
      {/* services for end */}

      <div className='my-5'>
        <h2 className='text-base mb-1'>Details of the Service</h2>
      </div>
      {/* Details of the Service start */}
      <div className='row border rounded p-4'>
        <div className='col-12'>
          <div className='d-flex'>
            {serviceDetailsOptions.map((option, index) => (
              <>
                <div className='form-check form-check-custom form-check-solid me-3'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='serviceDetailsOptions'
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
      {/* Details of the Service end */}

      <div className='my-5'>
        <h2 className='text-base mb-1'>Incoming calls</h2>
      </div>

      {/* Incoming calls start */}
      <div className='row border rounded p-4'>
        <div className='col-12'>
          <div className='d-flex'>
            {incomingOptions.map((option, index) => (
              <>
                <div className='form-check form-check-custom form-check-solid me-3'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='incomingOptions'
                    id={option.value}
                    value={option.value}
                    onChange={(e) => {
                      setIncomingCallType(e.target.value)
                    }}
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
      {/* Incoming calls end */}

      {/* Other service details start */}
      {incomingCallType === 'other' && (
        <>
          <div className='col-12 my-3 w-100'>
            <label htmlFor='other_incoming_calls' className='form-label'>
              Other (please provide details)
            </label>
            <textarea
              rows={5}
              cols={5}
              className='form-control'
              id='other_incoming_calls'
              placeholder='please provide details....'
            />
          </div>
        </>
      )}
      {/* Other service details end*/}

      <div className='my-5'>
        <h2 className='text-base mb-1'>Outgoing calls</h2>
      </div>

      {/* Outgoing calls start */}
      <div className='row border rounded p-4'>
        <div className='col-12 btn-group '>
          {/* <label className='form-label fw-bolder text-dark fs-6'>Outgoing calls</label> */}
          <div className='d-flex'>
            {outgoingOptions.map((option, index) => (
              <>
                <div className='form-check form-check-custom form-check-solid me-3'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='outgoingOptions'
                    id={option.value}
                    value={option.value}
                    onChange={(e) => {
                      setOutgoingCallType(e.target.value)
                    }}
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
      {/* Outgoing calls end */}

      {/* Other service details start */}
      {outgoingCallType === 'other' && (
        <>
          <div className='col-lg-12 col-12 my-3 w-100'>
            <label htmlFor='other_outgoing_calls' className='form-label'>
              Other (please provide details)
            </label>
            <textarea
              rows={5}
              cols={5}
              className='form-control'
              id='other_outgoing_calls'
              placeholder='please provide details....'
            />
          </div>
        </>
      )}
      {/* Other service details end*/}

      <div className='my-5'>
        <h2 className='text-base mb-1'>Services Provided</h2>
      </div>

      {/* Services Provided start */}
      <div className='row border rounded p-4'>
        <div className='col-12 mb-3'>
          {/* <label className='form-label fw-bolder text-dark fs-6'>Services Provided</label> */}
          <div className='row g-3'>
            {servicesProvidedOptions?.map((option, index) => {
              return (
                <>
                  <div className='col-lg-3 col-6'>
                    <div className='form-check form-check-custom form-check-solid form-check-sm me-3'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id={option.value}
                        defaultChecked={
                          index === 2 ||
                          index === 4 ||
                          index === 7 ||
                          index === 9 ||
                          index === 10 ||
                          index === 12
                        }
                      />
                      <label className='form-check-label' htmlFor={option.value}>
                        {option.label}
                      </label>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
      {/* Services Provided end */}

      <div className='mt-4 d-flex justify-end'>
        <button type='submit' id='kt_sign_up_submit' className='btn btn-lg btn-primary w-25 mb-5'>
          Submit
        </button>
      </div>
    </div>
  )
}
