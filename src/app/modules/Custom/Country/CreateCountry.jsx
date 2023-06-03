import React, {useEffect, useRef} from 'react'
import {Button, Modal} from 'react-bootstrap'
import {KTSVG} from '../../../../_metronic/helpers'
import {
  useCreateCountryMutation,
  useEditCountryMutation,
} from '../../../../redux/features/api/country/countryApi'
import {toast} from 'react-toastify'

// type Props = {
//   show: boolean
//   handleClose: () => void
//   type: string
// }

export default function CreateCountry({show, handleClose, type, countryId, defaultName}) {
  const countryNameRef = useRef()

  //api call
  const [
    createCountry,
    {isLoading: isLoadingCreate, isError: isErrorCreate, isSuccess: isSuccessCreate},
  ] = useCreateCountryMutation()
  const [editCountry, {isLoading: isLoadingEdit, isError: isErrorEdit, isSuccess: isSuccessEdit}] =
    useEditCountryMutation()

  const handleModal = (e) => {
    e.preventDefault()
    const countryName = countryNameRef.current.value
    if (
      type === 'add-country' &&
      (countryName !== null || countryName !== '' || countryName !== undefined)
    ) {
      createCountry(countryName)
    }
    if (
      type === 'edit-country' &&
      (countryName !== null || countryName !== '' || countryName !== undefined) &&
      (countryId !== null || countryId !== '' || countryId !== undefined)
    ) {
      editCountry({id: countryId, countryName: countryName})
    }
    handleClose()
  }

  //toast create country
  useEffect(() => {
    if (!isLoadingCreate && !isErrorCreate && isSuccessCreate) {
      toast.success('Successfully created country', {
        hideProgressBar: true,
        toastId: 'countryCreateSuccess',
      })
    }
    if (!isLoadingCreate && isErrorCreate && !isSuccessCreate) {
      toast.error('Failed to create country', {
        hideProgressBar: true,
        toastId: 'countryCreateError',
      })
    }
    return () => {
      setTimeout(() => {
        toast.dismiss('countryCreateSuccess')
        toast.dismiss('countryCreateError')
      }, 2000)
    }
  }, [isErrorCreate, isLoadingCreate, isSuccessCreate])
  //toast Edit country
  useEffect(() => {
    if (!isLoadingEdit && !isErrorEdit && isSuccessEdit) {
      toast.success('Successfully edited country', {
        hideProgressBar: true,
        toastId: 'countryEditSuccess',
      })
    }
    if (!isLoadingEdit && isErrorEdit && !isSuccessEdit) {
      toast.error('Failed to create country', {
        hideProgressBar: true,
        toastId: 'countryEditError',
      })
    }
    return () => {
      setTimeout(() => {
        toast.dismiss('countryEditSuccess')
        toast.dismiss('countryEditError')
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
          <h2>{type === 'add-country' ? 'Add Country' : 'Edit Country'}</h2>
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
                <i
                  className='fas fa-exclamation-circle ms-2 fs-7'
                  data-bs-toggle='tooltip'
                  title='Specify your desire country name'
                ></i>
              </label>
              <input
                type='text'
                className='form-control form-control-lg form-control-solid'
                name='country-name'
                placeholder='Country name'
                ref={countryNameRef}
                defaultValue={defaultName ?? ''}
              />
              {
                <div className='fv-plugins-message-container'>
                  <div data-field='appname' data-validator='notEmpty' className='fv-help-block'>
                    Country name is required
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
