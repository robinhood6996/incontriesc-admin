import React, {useEffect, useRef} from 'react'
import {Button, Modal} from 'react-bootstrap'
import {KTSVG} from '../../../../_metronic/helpers'
import {
  useCreateCountryMutation,
  useGetAllCountryQuery,
} from '../../../../redux/features/api/country/countryApi'
import {toast} from 'react-toastify'
import {
  useCreateCityMutation,
  useEditCityMutation,
} from '../../../../redux/features/api/citiesApi/citiesApi'

// type Props = {
//   show: boolean
//   handleClose: () => void
//   type: string
// }

export default function CreateCity({
  show,
  handleClose,
  type,
  cityId,
  defaultCountryName,
  defaultCityName,
}) {
  const countryNameRef = useRef()
  const cityNameRef = useRef()

  //api call
  const {data, isFetching, isSuccess} = useGetAllCountryQuery(null)
  const [
    createCity,
    {isLoading: isLoadingCreate, isError: isErrorCreate, isSuccess: isSuccessCreate},
  ] = useCreateCityMutation()
  const [editCity, {isLoading: isLoadingEdit, isError: isErrorEdit, isSuccess: isSuccessEdit}] =
    useEditCityMutation()

  const handleModal = (e) => {
    e.preventDefault()
    const countryName = countryNameRef.current.value
    const cityName = cityNameRef.current.value
    if (
      type === 'add-city' &&
      (countryName !== null ||
        countryName !== '' ||
        countryName !== undefined ||
        cityName !== null ||
        cityName !== '' ||
        cityName !== undefined)
    ) {
      createCity({name: cityName, country: countryName})
    }
    if (
      type === 'edit-city' &&
      (countryName !== null ||
        countryName !== '' ||
        countryName !== undefined ||
        cityName !== null ||
        cityName !== '' ||
        cityName !== undefined) &&
      cityId
    ) {
      editCity({id: cityId, cityName: cityName})
      // console.log('edit', cityId, countryName, cityName)
    }
    handleClose()
  }

  //toast create city
  useEffect(() => {
    if (!isLoadingCreate && !isErrorCreate && isSuccessCreate) {
      toast.success('Successfully created city', {
        hideProgressBar: true,
        toastId: 'cityCreateSuccess',
      })
    }
    if (!isLoadingCreate && isErrorCreate && !isSuccessCreate) {
      toast.error('Failed to create city', {
        hideProgressBar: true,
        toastId: 'cityCreateError',
      })
    }
    return () => {
      setTimeout(() => {
        toast.dismiss('cityCreateSuccess')
        toast.dismiss('cityCreateError')
      }, 2000)
    }
  }, [isErrorCreate, isLoadingCreate, isSuccessCreate])
  //toast Edit city
  useEffect(() => {
    if (!isLoadingEdit && !isErrorEdit && isSuccessEdit) {
      toast.success('Successfully edited city', {
        hideProgressBar: true,
        toastId: 'cityEditSuccess',
      })
    }
    if (!isLoadingEdit && isErrorEdit && !isSuccessEdit) {
      toast.error('Failed to edit city', {
        hideProgressBar: true,
        toastId: 'cityEditError',
      })
    }
    return () => {
      setTimeout(() => {
        toast.dismiss('cityEditSuccess')
        toast.dismiss('cityEditError')
      }, 2000)
    }
  }, [isErrorEdit, isLoadingEdit, isSuccessEdit])

  return (
    <div>
      <Modal
        id='kt_modal_create_app'
        tabIndex={-1}
        aria-hidden='true'
        dialogClassName='modal-dialog modal-dialog-centered mw-900px'
        show={show}
        onHide={handleClose}
      >
        <div className='modal-header'>
          <h2>{type === 'add-city' ? 'Add City' : 'Edit City'}</h2>
          {/* begin::Close */}
          <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
            <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
          </div>
          {/* end::Close */}
        </div>

        <form
          onSubmit={(e) => {
            handleModal(e)
          }}
        >
          <div className='modal-body py-lg-10 px-lg-10'>
            <div className='fv-row mb-10'>
              <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                <span className='required'>Country Name</span>
                {/* <i
                  className='fas fa-exclamation-circle ms-2 fs-7'
                  data-bs-toggle='tooltip'
                  title='Specify your desire country name'
                ></i> */}
              </label>
              <select className='form-select' aria-label='Select example' ref={countryNameRef}>
                <option value={'default'}>Select age</option>
                {data?.countries?.map((country, index) => {
                  return (
                    <option
                      key={index}
                      value={country?.name?.toLowerCase()}
                      selected={
                        type === 'edit-city' &&
                        country?.name?.toLowerCase() === defaultCountryName?.toLowerCase()
                      }
                    >
                      {country?.name?.toUpperCase()}
                    </option>
                  )
                })}
              </select>
              {
                <div className='fv-plugins-message-container'>
                  <div data-field='appname' data-validator='notEmpty' className='fv-help-block'>
                    Country name is required
                  </div>
                </div>
              }
              <label className='d-flex align-items-center fs-5 fw-semibold mb-2 mt-4'>
                <span className='required'>City Name</span>
                {/* <i
                  className='fas fa-exclamation-circle ms-2 fs-7'
                  data-bs-toggle='tooltip'
                  title='Specify your desire country name'
                ></i> */}
              </label>
              <input
                type='text'
                className='form-control form-control-lg form-control-solid'
                name='city-name'
                placeholder='City name'
                ref={cityNameRef}
                defaultValue={type === 'edit-city' ? defaultCityName : ''}
              />
              {
                <div className='fv-plugins-message-container'>
                  <div data-field='appname' data-validator='notEmpty' className='fv-help-block'>
                    City name is required
                  </div>
                </div>
              }
            </div>
            <div className='d-flex justify-content-end mb-2'>
              <Button
                className='btn btn-sm fw-bold btn-primary'
                // data-bs-toggle='modal'
                // data-bs-target='#kt_modal_create_app'
                type='submit'
              >
                Add
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  )
}
