import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const NotFoundComponent = ({type}: {type: string}) => {
  return (
    // <div>
    //   <div className='alert alert-dismissible bg-light-primary d-flex flex-column flex-sm-row p-5 mb-10'>
    //     <i className='ki-duotone ki-notification-bing fs-2hx text-primary me-4 mb-5 mb-sm-0'>
    //       <span className='path1'></span>
    //       <span className='path2'></span>
    //       <span className='path3'></span>
    //     </i>

    //     <div className='d-flex flex-column pe-0 pe-sm-10'>
    //       <h4 className='fw-semibold'>This is an alert</h4>

    //       <span>
    //         The alert component can be used to highlight certain parts of your page for higher
    //         content visibility.
    //       </span>
    //     </div>

    //     <button
    //       type='button'
    //       className='position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto'
    //       data-bs-dismiss='alert'
    //     >
    //       <i className='ki-duotone ki-cross fs-1 text-primary'>
    //         <span className='path1'></span>
    //         <span className='path2'></span>
    //       </i>
    //     </button>
    //   </div>
    // </div>
    <div>
      <div className='alert alert-dismissible bg-light-primary d-flex flex-center flex-column py-10 px-10 px-lg-20 mb-10'>
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
              icon={faSearch}
            />
            No {type} Data Found.
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

export default NotFoundComponent
