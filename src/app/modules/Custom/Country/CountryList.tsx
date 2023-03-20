import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import {KTSVG} from '../../../../_metronic/helpers'
import CreateCountry from './CreateCountry'

type Props = {
  className: string
}

const CountryList: React.FC<Props> = ({className}) => {
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(!show)
  }
  return (
    <>
      <div className='d-flex justify-content-end mb-2'>
        <Button
          onClick={() => setShow(true)}
          className='btn btn-sm fw-bold btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#kt_modal_create_app'
        >
          Add Country
        </Button>
      </div>
      <div className={`card ${className}`}>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Countries</span>
          </h3>
        </div>
        <div className='card-body py-3'>
          <div className='table-responsive'>
            <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
              <thead>
                <tr className='fw-bold text-muted'>
                  <th className='w-25px'>
                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value='1'
                        data-kt-check='true'
                        data-kt-check-target='.widget-13-check'
                      />
                    </div>
                  </th>
                  <th className='min-w-150px'>Serial</th>
                  <th className='min-w-140px'>Name</th>
                  <th className='min-w-120px'>Status</th>
                  <th className='min-w-100px text-end'>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                      <input
                        className='form-check-input widget-13-check'
                        type='checkbox'
                        value='1'
                      />
                    </div>
                  </td>
                  <td>
                    <a href='/' className='text-dark fw-bold text-hover-primary fs-6'>
                      1
                    </a>
                  </td>
                  <td>
                    <a href='/' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                      Italy
                    </a>
                  </td>
                  <td>
                    <a href='/' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                      Active
                    </a>
                  </td>

                  <td className='text-end'>
                    <a
                      href='/'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen019.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a
                      href='/'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='/'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                      <input
                        className='form-check-input widget-13-check'
                        type='checkbox'
                        value='1'
                      />
                    </div>
                  </td>
                  <td>
                    <a href='/' className='text-dark fw-bold text-hover-primary fs-6'>
                      2
                    </a>
                  </td>
                  <td>
                    <a href='/' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                      Argentina
                    </a>
                  </td>
                  <td>
                    <a href='/' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                      Active
                    </a>
                  </td>

                  <td className='text-end'>
                    <a
                      href='/'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen019.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a
                      href='/'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='/'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
              {/* end::Table body */}
            </table>
            {/* end::Table */}
          </div>
          {/* end::Table container */}
        </div>
        {/* begin::Body */}
        <CreateCountry show={show} handleClose={handleClose} />
      </div>
    </>
  )
}

export default CountryList
