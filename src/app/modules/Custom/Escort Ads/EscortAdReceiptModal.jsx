import React, {useEffect, useRef} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import moment from 'moment'
import {Modal} from 'react-bootstrap'

export default function EscortAdReceiptModal({show, handleClose, data}) {
  console.log('data', data)
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
          <h2>Payment Receipt</h2>
          {/* begin::Close */}
          <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
            <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
          </div>
          {/* end::Close */}
        </div>
        <div className='modal-body py-lg-10 px-lg-10'>
          <div className='d-flex align-items-center justify-content-center'>
            <img className='w-75' src={toAbsoluteUrl('/media/receipt.jpeg')} alt='' />
          </div>
        </div>
      </Modal>
    </div>
  )
}
