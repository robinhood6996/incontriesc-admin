import React, {Key, useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import Loader from '../../../Components/Custom Components/common/Loader'
import ErrorComponent from '../../../Components/Custom Components/common/ErrorComponent'
import NotFoundComponent from '../../../Components/Custom Components/common/NotFoundComponent'
import moment from 'moment'
import {
  useDeleteSingleCityTourMutation,
  useGetAllCityToursQuery,
} from '../../../../redux/features/api/cityTourApi/cityTourApi'
import {useGetSingleEscortDetailsQuery} from '../../../../redux/features/api/escorts/escortsApi'
import DeleteModal from '../Common/DeleteModal'
import {toast} from 'react-toastify'

type Props = {
  className: string
}

const TourList: React.FC<Props> = ({className}) => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteTourId, setDeleteTourId] = useState<string>('')

  //api call
  const {data, isFetching, isError, isSuccess} = useGetAllCityToursQuery(null)
  const [
    deleteSelectedTour,
    {isLoading: isLoadingDelete, isSuccess: isSuccessDelete, isError: isErrorDelete},
  ] = useDeleteSingleCityTourMutation()

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal)
  }

  const handleDeleteTour = () => {
    if (
      deleteTourId !== null &&
      deleteTourId !== undefined &&
      deleteTourId !== '' &&
      deleteTourId?.length > 0
    ) {
      deleteSelectedTour(deleteTourId)
    }
    setDeleteModal(false)
  }

  //toast
  useEffect(() => {
    if (!isLoadingDelete && !isErrorDelete && isSuccessDelete) {
      toast.success('Successfully deleted tour', {
        hideProgressBar: true,
        toastId: 'tourDeleteSuccess',
      })
    }
    if (!isLoadingDelete && isErrorDelete && !isSuccessDelete) {
      toast.error('Failed to delete tour', {
        hideProgressBar: true,
        toastId: 'tourDeleteError',
      })
    }
    return () => {
      setTimeout(() => {
        toast.dismiss('tourDeleteSuccess')
        toast.dismiss('tourDeleteError')
      }, 2000)
    }
  }, [isErrorDelete, isLoadingDelete, isSuccessDelete])
  return (
    <>
      {isFetching ? (
        <Loader />
      ) : !isFetching && !isError && isSuccess ? (
        <>
          {data?.cityTours?.length > 0 ? (
            <>
              {
                <div className={`card ${className}`}>
                  {/* begin::Header */}
                  <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                      <span className='card-label fw-bold fs-3 mb-1'>Ads</span>
                      <span className='text-muted mt-1 fw-semibold fs-7'>
                        Total Ads: {data?.cityTours?.length}
                      </span>
                    </h3>
                    {/* <div
                      className='card-toolbar'
                      data-bs-toggle='tooltip'
                      data-bs-placement='top'
                      data-bs-trigger='hover'
                      title='Click to add a user'
                    >
                      <a
                        href='/'
                        className='btn btn-sm btn-light-primary'
                        // data-bs-toggle='modal'
                        // data-bs-target='#kt_modal_invite_friends'
                      >
                        <KTSVG
                          path='media/icons/duotune/arrows/arr075.svg'
                          className='svg-icon-3'
                        />
                        New Member
                      </a>
                    </div> */}
                  </div>
                  {/* end::Header */}
                  {/* begin::Body */}
                  <div className='card-body py-3'>
                    {/* begin::Table container */}
                    <div className='table-responsive'>
                      {/* begin::Table */}
                      <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                        {/* begin::Table head */}
                        <thead>
                          <tr className='fw-bold text-muted'>
                            <th className='min-w-150px'>Title</th>
                            <th className='min-w-150px'>Author</th>
                            <th className='min-w-140px'>Create Date</th>
                            <th className='min-w-120px'>Expires</th>
                            <th className='min-w-120px'>Views</th>
                            <th className='min-w-100px text-end'>Actions</th>
                          </tr>
                        </thead>
                        {/* end::Table head */}
                        {/* begin::Table body */}
                        <tbody>
                          {data?.cityTours?.map(
                            (
                              ad: {
                                name: string
                                createdAt: string
                                email: string
                                profileImage: string
                                username: string
                                dateTo: string
                                dateFrom: string
                                _id: string
                              },
                              index: Key
                            ) => {
                              return (
                                <>
                                  <tr key={index}>
                                    <td>
                                      <div className='d-flex align-items-center'>
                                        <div className='d-flex justify-content-start flex-column'>
                                          <span className='text-dark fw-bold  fs-7'>
                                            {ad?.name}
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className='d-flex align-items-center'>
                                        <div className='symbol symbol-45px me-5'>
                                          <img
                                            src={`${process.env.REACT_APP_CUSTOM_BASE_URL}/esc/${ad?.profileImage}`}
                                            alt=''
                                          />
                                        </div>
                                        <div className='d-flex justify-content-start flex-column'>
                                          <a
                                            href='/'
                                            className='text-dark fw-bold text-hover-primary fs-6'
                                          >
                                            {ad?.username}
                                          </a>
                                          <span className='text-muted fw-semibold text-muted d-block fs-7'>
                                            {ad?.email}
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className='d-flex flex-column w-100 me-2'>
                                        <div className='d-flex flex-stack mb-2'>
                                          <span className='text-muted me-2 fs-7 fw-semibold'>
                                            {moment(ad?.dateFrom).format('MMM Do YYYY, h:mm a')}
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className='text-end'>
                                      <div className='d-flex flex-column w-100 me-2'>
                                        <div className='d-flex flex-stack mb-2'>
                                          <span className='text-muted me-2 fs-7 fw-semibold'>
                                            {moment(ad?.dateTo).format('MMM Do YYYY, h:mm a')}
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className='text-end'>
                                      <div className='d-flex flex-column w-100 me-2'>
                                        <div className='d-flex flex-stack mb-2'>
                                          <span className='text-muted me-2 fs-7 fw-semibold'>
                                            Active
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className='d-flex justify-content-end flex-shrink-0'>
                                        <a
                                          href='/'
                                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                        >
                                          <KTSVG
                                            path='/media/icons/duotune/art/art005.svg'
                                            className='svg-icon-3'
                                          />
                                        </a>
                                        <button
                                          className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'
                                          onClick={() => {
                                            setDeleteTourId(ad?._id)
                                            handleDeleteModal()
                                          }}
                                        >
                                          <KTSVG
                                            path='/media/icons/duotune/general/gen027.svg'
                                            className='svg-icon-3'
                                          />
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                </>
                              )
                            }
                          )}
                        </tbody>
                        {/* end::Table body */}
                      </table>
                      {/* end::Table */}
                    </div>
                    {/* end::Table container */}
                  </div>
                  {/* begin::Body */}
                </div>
              }
            </>
          ) : (
            <NotFoundComponent type='Ads Data' />
          )}
        </>
      ) : (
        <ErrorComponent />
      )}
      <DeleteModal
        show={deleteModal}
        handleModal={handleDeleteModal}
        handleDelete={handleDeleteTour}
      />
    </>
  )
}

export default TourList
