import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import {KTSVG} from '../../../_metronic/helpers'
import CreateCategory from './CreateCategory'
import DeleteModal from "../Custom/Common/DeleteModal";
import EditCategory from "../Custom/Common/EditCategory";

type Props = {
  className: string
}

const CategoriesList: React.FC<Props> = ({className}) => {
  const [show, setShow] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const handleClose = () => {
    setShow(!show)
  }

  const handleDelete = () => {
    setDeleteModal(!deleteModal)
  }

  const handleEdit = () => {
    setEditModal(!editModal)
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
          Create
        </Button>
      </div>
      <div className={`card ${className}`}>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Categories</span>
          </h3>

          {/* <div className='card-toolbar'>
            <button
              type='button'
              className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='top-end'
            >
              <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
            </button>
            <div
              className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
              data-kt-menu='true'
            >
              <div className='menu-item px-3'>
                <div className='menu-content fs-6 text-dark fw-bold px-3 py-4'>Quick Actions</div>
              </div>
              <div className='separator mb-3 opacity-75'></div>
              <div className='menu-item px-3'>
                <a href='/' className='menu-link px-3'>
                  New Ticket
                </a>
              </div>
              <div className='menu-item px-3'>
                <a href='/' className='menu-link px-3'>
                  New Customer
                </a>
              </div>
              <div
                className='menu-item px-3'
                data-kt-menu-trigger='hover'
                data-kt-menu-placement='right-start'
                data-kt-menu-flip='left-start, top'
              >
                <a href='/' className='menu-link px-3'>
                  <span className='menu-title'>New Group</span>
                  <span className='menu-arrow'></span>
                </a>
                <div className='menu-sub menu-sub-dropdown w-175px py-4'>
                  <div className='menu-item px-3'>
                    <a href='/' className='menu-link px-3'>
                      Admin Group
                    </a>
                  </div>
                  <div className='menu-item px-3'>
                    <a href='/' className='menu-link px-3'>
                      Staff Group
                    </a>
                  </div>
                  <div className='menu-item px-3'>
                    <a href='/' className='menu-link px-3'>
                      Member Group
                    </a>
                  </div>
                </div>
              </div>
              <div className='menu-item px-3'>
                <a href='/' className='menu-link px-3'>
                  New Contact
                </a>
              </div>
              <div className='separator mt-3 opacity-75'></div>
              <div className='menu-item px-3'>
                <div className='menu-content px-3 py-3'>
                  <a className='btn btn-primary btn-sm px-4' href='/'>
                    Generate Reports
                  </a>
                </div>
              </div>
            </div>
          </div> */}
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
                      Couple
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
                    <button
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      onClick={handleEdit}
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </button>
                    <button
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                      onClick={handleDelete}
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </button>
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
                      Female
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
                    <button
                        onClick={handleEdit}
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </button>
                    <button
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                      onClick={handleDelete}
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </button>
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
        <CreateCategory show={show} handleClose={handleClose} />
        <DeleteModal show={deleteModal} handleClose={handleDelete} />
        <EditCategory show={editModal} handleClose={handleEdit} />
      </div>
    </>
  )
}

export default CategoriesList
