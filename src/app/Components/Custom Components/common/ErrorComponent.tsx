import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const ErrorComponent = () => {
  return (
    <div>
      <div className='alert alert-dismissible bg-light-danger d-flex flex-center flex-column py-10 px-10 px-lg-20 mb-10'>
        <button
          type='button'
          className='position-absolute top-0 end-0 m-2 btn btn-icon btn-icon-danger'
          data-bs-dismiss='alert'
        >
          <i className='ki-duotone ki-cross fs-1'>
            <span className='path1'></span>
            <span className='path2'></span>
          </i>
        </button>

        <i className='ki-duotone ki-information-5 fs-5tx text-danger mb-5'>
          <span className='path1'></span>
          <span className='path2'></span>
          <span className='path3'></span>
        </i>

        <div className='text-center'>
          <h1 className='fw-bold mb-5'>
            <FontAwesomeIcon
              className='me-3 fs-1'
              // style={{fontSize: '38px'}}
              icon={faExclamationCircle}
            />
            Sorry! Something went wrong.
          </h1>

          {/* <div className='separator separator-dashed border-danger opacity-25 mb-5'></div> */}

          {/* <div className='mb-9 text-dark'>
            The alert component can be used to highlight certain parts of your page for{' '}
            <strong>higher content visibility</strong>.<br />
            Please read our{' '}
            <a href='#' className='fw-bold me-1'>
              Terms and Conditions
            </a>{' '}
            for more info.
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ErrorComponent
