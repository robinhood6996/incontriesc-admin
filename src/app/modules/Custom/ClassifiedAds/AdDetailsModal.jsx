import React, {useEffect, useRef} from 'react'
import {KTSVG} from '../../../../_metronic/helpers'
import moment from 'moment'
import {Modal} from 'react-bootstrap'

export default function AdDetailsModal({show, handleClose, data}) {
  console.log('data', data)
  return (
    <div className='w-100 d-block'>
      <Modal
        id='kt_modal_create_app'
        tabIndex={-1}
        aria-hidden='true'
        dialogClassName='modal-dialog modal-dialog-centered mw-900px'
        show={show}
        onHide={handleClose}
      >
        <div className='modal-header'>
          <h2>Ad Details</h2>
          {/* begin::Close */}
          <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
            <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
          </div>
          {/* end::Close */}
        </div>
        <div className='modal-body py-lg-10 px-lg-10'>
          <p className='m-0'>
            <span className='fw-bold'>Title:</span> {data?.title}
          </p>
          {/* <p className='m-0'>
            <span className='fw-bold'>Email:</span> {data?.email}
          </p> */}
          {/* <p className='m-0'>
            <span className='fw-bold'>Owner Email:</span> {data?.ownerEmail}
          </p> */}
          <p className='m-0'>
            <span className='fw-bold'>Category:</span> {data?.category}
          </p>
          {/* <p className='m-0'>
            <span className='fw-bold'>Create Date:</span>{' '}
            {moment(data?.createdAt).format('MMM Do YYYY, h:mm a')}
          </p> */}

          <p className='m-0'>
            <span className='fw-bold'>Category:</span> {data?.category}
          </p>
          <p className='m-0'>
            <span className='fw-bold'>Phone:</span> {data?.phone}
          </p>
          <p className='m-0'>
            <span className='fw-bold'>City:</span> {data?.city?.toUpperCase()}
          </p>
          <p className='m-0'>
            <span className='fw-bold'>Description:</span> {data?.description}
          </p>
          <p className='m-0 mb-2'>
            <span className='fw-bold'>Images</span>
          </p>
          <div className='w-100 d-flex justify-content-start flex-wrap overflow-hidden'>
            {data?.photos?.map((image, index) => {
              return (
                <div key={index} className='mx-2 my-2'>
                  <img
                    src={`${process.env.REACT_APP_CUSTOM_BASE_URL}/esc/${image?.filename}`}
                    alt=''
                    width={250}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </Modal>
    </div>
  )
}
