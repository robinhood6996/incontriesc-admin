import React, {useEffect} from 'react'
import {Button, Modal} from 'react-bootstrap'
import {useFormik} from 'formik'
import clsx from 'clsx'
import {KTSVG} from '../../../../_metronic/helpers'

type Props = {
  show: boolean
  imageURL: string
  handleClose: () => void
}

export default function ImageModal({show, handleClose, imageURL}: Props) {
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
          <h2>Verification Image</h2>
          {/* begin::Close */}
          <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
            <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
          </div>
          {/* end::Close */}
        </div>
        <div className='modal-body py-lg-10 px-lg-10'>
          {/* <div className='d-flex align-items-center justify-content-between fv-row mb-10'> */}
          <div className=''>
            <img className='w-50 mx-auto d-block' src={imageURL} alt='' />
          </div>
        </div>
      </Modal>
    </div>
  )
}
