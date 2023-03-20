import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import {KTSVG} from '../../../../_metronic/helpers'

type Props = {
  show: boolean
  handleClose: () => void
}

export default function CreateCity({show, handleClose}: Props) {
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
          <h2>Add City</h2>
          {/* begin::Close */}
          <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
            <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
          </div>
          {/* end::Close */}
        </div>

        <div className='modal-body py-lg-10 px-lg-10'>
          <div className='fv-row mb-10'>
            <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
              <span className='required'>City Name</span>
              <i
                className='fas fa-exclamation-circle ms-2 fs-7'
                data-bs-toggle='tooltip'
                title='Specify your desire City name'
              ></i>
            </label>
            <input
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='city-name'
              placeholder='City name'
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
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_create_app'
            >
              Add
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
