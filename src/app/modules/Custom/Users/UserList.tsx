import React, {useState, useEffect, useRef} from 'react'
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
import PaginationSetQuery from '../../../Components/Custom Components/common/PaginationSetQuery'

type Props = {
  className: string
}

const UserList: React.FC<Props> = ({className}) => {
  const limit: number = 16
  const [page, setPage] = useState(1)
  const [searchParams, setSearchParams] = useState({
    limit,
    offset: 0,
  })
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteUserName, setDeleteUserName] = useState<string>('')
  const searchRef = useRef<HTMLInputElement>(null)
  //api call
  const {data, isFetching, isError, isSuccess, refetch} = useGetAllUserQuery({
    search: searchRef?.current?.value ?? '',
  })
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
      <>
        <div className='card card-xxl-stretch mb-5 mb-xl-8'>
          <div className='row p-3 align-items-center'>
            <div className='col-lg-6 col-md-6 col-6'>
              <input
                ref={searchRef}
                className='form-control form-control-lg form-control-solid border border-secondary'
                placeholder='Search user name'
                type='text'
                autoComplete='off'
              />
            </div>
            {/* <div className='col-lg-2 col-md-4 col-6'>
                    <select className='form-select' aria-label='Select example'>
                      <option>Select city</option>
                      <option value='1'>Milan</option>
                      <option value='1'>Rome</option>
                    </select>
                  </div> */}
            <div className='col-lg-1 col-md-4 col-6'>
              <Button
                onClick={() => refetch()}
                className='btn fw-bold btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_create_app'
              >
                Search
              </Button>
            </div>
            {/* <div className='col-lg-2 col-md-4 col-6'>
                    <Button
                      // onClick={() => setShowCreateModal(true)}
                      className='btn fw-bold btn-primary'
                      data-bs-toggle='modal'
                      data-bs-target='#kt_modal_create_app'
                    >
                      <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                      Create User
                    </Button>
                  </div> */}
          </div>
        </div>
        <div className={`card ${className}`}>
          <div className='card-header border-0 pt-5'>
            <h3 className='card-title align-items-start flex-column'>
              <span className='card-label fw-bold fs-3 mb-1'>Users</span>
              <span className='text-muted mt-1 fw-semibold fs-7'>Total Users: {data?.length}</span>
            </h3>
            {/* <h3 className='card-title align-items-start flex-column'>
                    <span className='text-muted mt-1 fw-semibold fs-7'>120 Total Members</span>
                  </h3> */}
          </div>

          {isFetching ? (
            <Loader />
          ) : !isFetching && !isError && data?.length > 0 ? (
            <div className='card-body py-3'>
              <div className='table-responsive'>
                <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                  <thead>
                    <tr className='fw-bold text-muted'>
                      <th className='min-w-150px'>Name/Email</th>
                      <th className='min-w-140px'>Type</th>
                      {/* <th className='min-w-120px'>Join Date</th> */}
                      <th className='min-w-100px text-end'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map(
                      (
                        user: {name: string; email: string; type: string; username: string},
                        index: string
                      ) => {
                        return (
                          <tr key={index}>
                            <td>
                              <div className='d-flex align-items-center'>
                                <div className='symbol symbol-45px me-5'>
                                  {/* <img src={toAbsoluteUrl('/media/avatars/300-14.jpg')} alt='' /> */}
                                </div>
                                <div className='d-flex justify-content-start flex-column'>
                                  <a href='/' className='text-dark fw-bold text-hover-primary fs-6'>
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
                            {/* <td className='text-end'>
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
                            </td> */}
                            <td className='text-end'>
                              <button
                                className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'
                                onClick={() => {
                                  setDeleteUserName(user?.username)
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
          ) : (
            <NotFoundComponent type='User' />
          )}
          {/* <CreateCategory show={showCreateModal} handleClose={handleCreateModal} /> */}
          <DeleteModal
            show={deleteModal}
            handleModal={handleDeleteModal}
            handleDelete={handleDelete}
          />
        </div>
        <PaginationSetQuery
          limit={limit}
          page={page}
          dataLength={10}
          params={searchParams}
          setParams={setSearchParams}
          setPage={setPage}
          totalPage={10}
        />
      </>
      <ToastContainer />
    </>
  )
}

export default UserList
