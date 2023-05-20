import React, {useState, useEffect} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import DeleteModal from '../Common/DeleteModal'
import ErrorComponent from '../../../Components/Custom Components/common/ErrorComponent'
import NotFoundComponent from '../../../Components/Custom Components/common/NotFoundComponent'
import {ToastContainer, toast} from 'react-toastify'
import EditCategory from '../Common/EditCategory'
import {
  useDeleteSingleUserMutation,
  useGetAllUserQuery,
} from '../../../../redux/features/api/auth/authApi'
import {Button} from 'react-bootstrap'
import Loader from '../../../Components/Custom Components/common/Loader'

type Props = {
  className: string
}

const UserList: React.FC<Props> = ({className}) => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteUserName, setDeleteUserName] = useState<string>('')

  //api call
  const {data, isFetching, isError, isSuccess} = useGetAllUserQuery(null)
  const [
    deleteUser,
    {isLoading: isLoadingDelete, isError: isErrorDelete, isSuccess: isSuccessDelete},
  ] = useDeleteSingleUserMutation()

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal)
  }

  const handleDelete = () => {
    if (deleteUserName !== '') {
      deleteUser(deleteUserName)
    }
    setDeleteModal(false)
  }

  //toast
  useEffect(() => {
    if (!isLoadingDelete && !isErrorDelete && isSuccessDelete) {
      toast.success('Successfully deleted user', {
        hideProgressBar: true,
        toastId: 'userDeleteSuccess',
      })
    }
    if (!isLoadingDelete && isErrorDelete && !isSuccessDelete) {
      toast.error('Failed to deleted user', {
        hideProgressBar: true,
        toastId: 'userDeleteError',
      })
    }
    return () => {
      setTimeout(() => {
        toast.dismiss('userDeleteSuccess')
        toast.dismiss('userDeleteSuccess')
      }, 2000)
    }
  }, [isErrorDelete, isLoadingDelete, isSuccessDelete])

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : !isFetching && !isError && isSuccess ? (
        <>
          {data?.length > 0 ? (
            <>
              {/* <div className='d-flex justify-content-end mb-2'>
                <Button
                  // onClick={() => setShowCreateModal(true)}
                  className='btn btn-sm fw-bold btn-primary'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_create_app'
                >
                  Create
                </Button>
              </div> */}
              <div className={`card ${className}`}>
                <div className='card-header border-0 pt-5'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Users</span>
                  </h3>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='text-muted mt-1 fw-semibold fs-7'>120 Total Members</span>
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
                          <th className='min-w-150px'>Name</th>
                          <th className='min-w-140px'>Type</th>
                          {/* <th className='min-w-120px'>Join Date</th> */}
                          <th className='min-w-120px'>Status</th>
                          <th className='min-w-100px text-end'>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.map(
                          (user: {name: string; email: string; type: string}, index: string) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                    <input
                                      className='form-check-input widget-9-check'
                                      type='checkbox'
                                      value='1'
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className='d-flex align-items-center'>
                                    <div className='symbol symbol-45px me-5'>
                                      <img
                                        src={toAbsoluteUrl('/media/avatars/300-14.jpg')}
                                        alt=''
                                      />
                                    </div>
                                    <div className='d-flex justify-content-start flex-column'>
                                      <a
                                        href='/'
                                        className='text-dark fw-bold text-hover-primary fs-6'
                                      >
                                        {user?.name}
                                      </a>
                                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                                        {user?.email}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <a
                                    href='/'
                                    className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'
                                  >
                                    {user?.type?.toUpperCase()}
                                  </a>
                                </td>
                                {/* <td>
                                    <a
                                      href='/'
                                      className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'
                                    >
                                      Active
                                    </a>
                                  </td> */}
                                <td className='text-end'>
                                  <div className='d-flex flex-column w-100 me-2'>
                                    <div className='form-check form-switch form-check-custom form-check-solid'>
                                      <input
                                        className='form-check-input h-20px w-30px'
                                        type='checkbox'
                                        value=''
                                        id='flexSwitchDefault'
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td className='text-end'>
                                  <button
                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                                    onClick={() => {
                                      setDeleteUserName('')
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
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <CreateCategory show={showCreateModal} handleClose={handleCreateModal} /> */}
                <DeleteModal
                  show={deleteModal}
                  handleModal={handleDeleteModal}
                  handleDelete={handleDelete}
                />
              </div>
            </>
          ) : (
            <NotFoundComponent type='Users List' />
          )}
        </>
      ) : (
        <ErrorComponent />
      )}
      <ToastContainer />
    </>
  )
}

export default UserList
