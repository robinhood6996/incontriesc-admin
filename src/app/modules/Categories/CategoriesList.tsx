import React, {Key, useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import {KTSVG} from '../../../_metronic/helpers'
import CreateCategory from './CreateCategory'
import DeleteModal from '../Custom/Common/DeleteModal'
import EditCategory from '../Custom/Common/EditCategory'
import {
  useDeleteCategoryMutation,
  useGetAllCategoryQuery,
} from '../../../redux/features/api/category/categoryApi'
import Loader from '../../Components/Custom Components/common/Loader'
import NotFoundComponent from '../../Components/Custom Components/common/NotFoundComponent'
import ErrorComponent from '../../Components/Custom Components/common/ErrorComponent'
import {ToastContainer, toast} from 'react-toastify'

type Props = {
  className: string
}

const CategoriesList: React.FC<Props> = ({className}) => {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [deleteCategoryId, setDeleteCategoryId] = useState<string>('')

  // api call
  const {data, isFetching, isSuccess, isError} = useGetAllCategoryQuery(null)
  const [deleteCategory, {isLoading, isError: isErrorDelete, isSuccess: isSuccessDelete}] =
    useDeleteCategoryMutation()

  const handleCreateModal = () => {
    setShowCreateModal(!showCreateModal)
  }

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal)
  }

  const handleEdit = () => {
    setEditModal(!editModal)
  }

  const handleDelete = () => {
    if (deleteCategoryId !== '') {
      deleteCategory(deleteCategoryId)
    }
    setDeleteModal(false)
  }

  //toast
  useEffect(() => {
    if (!isLoading && !isErrorDelete && isSuccessDelete) {
      toast.success('Successfully deleted category', {
        hideProgressBar: true,
        toastId: 'categoryDeleteSuccess',
      })
    }
    if (!isLoading && isErrorDelete && !isSuccessDelete) {
      toast.error('Failed to deleted category', {
        hideProgressBar: true,
        toastId: 'categoryDeleteError',
      })
    }
    return () => {
      setTimeout(() => {
        toast.dismiss('categoryDeleteSuccess')
        toast.dismiss('categoryDeleteError')
      }, 2000)
    }
  }, [isErrorDelete, isLoading, isSuccessDelete])

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : !isFetching && !isError && isSuccess ? (
        <>
          <div className='d-flex justify-content-end mb-2'>
            <Button
              onClick={() => setShowCreateModal(true)}
              className='btn btn-sm fw-bold btn-primary'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_create_app'
            >
              Create
            </Button>
          </div>

          {data?.length > 0 ? (
            <>
              <div className={`card ${className}`}>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Categories</span>
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
                        {data?.map((category: {_id: string; name: string}, index: string) => {
                          return (
                            <tr key={index}>
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
                                  {parseInt(index) + 1}
                                </a>
                              </td>
                              <td>
                                <a
                                  href='/'
                                  className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'
                                >
                                  {category?.name?.toUpperCase()}
                                </a>
                              </td>
                              <td>
                                <a
                                  href='/'
                                  className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'
                                >
                                  Active
                                </a>
                              </td>
                              <td className='text-end'>
                                {/* <a
                                  href='/'
                                  className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                >
                                  <KTSVG
                                    path='/media/icons/duotune/general/gen019.svg'
                                    className='svg-icon-3'
                                  />
                                </a> */}
                                <button
                                  className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                  onClick={handleEdit}
                                >
                                  <KTSVG
                                    path='/media/icons/duotune/art/art005.svg'
                                    className='svg-icon-3'
                                  />
                                </button>
                                <button
                                  className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                                  onClick={() => {
                                    setDeleteCategoryId(category?._id)
                                    handleDeleteModal()
                                  }}
                                >
                                  <KTSVG
                                    path='/media/icons/duotune/general/gen027.svg'
                                    className='svg-icon-3'
                                  />
                                </button>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                      {/* end::Table body */}
                    </table>
                    {/* end::Table */}
                  </div>
                  {/* end::Table container */}
                </div>
                {/* begin::Body */}
                <CreateCategory show={showCreateModal} handleClose={handleCreateModal} />
                <DeleteModal
                  show={deleteModal}
                  handleModal={handleDeleteModal}
                  handleDelete={handleDelete}
                />
                <EditCategory show={editModal} handleClose={handleEdit} />
              </div>
            </>
          ) : (
            <NotFoundComponent type='Category List' />
          )}
        </>
      ) : (
        <ErrorComponent />
      )}
      <ToastContainer />
    </>
  )
}

export default CategoriesList
