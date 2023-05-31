import React, {Key, useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {
  useDeleteSingleFreeAdsMutation,
  useGetAllFreeAdsQuery,
} from '../../../../redux/features/api/freeAds/freeAdsApi'
import Loader from '../../../Components/Custom Components/common/Loader'
import ErrorComponent from '../../../Components/Custom Components/common/ErrorComponent'
import NotFoundComponent from '../../../Components/Custom Components/common/NotFoundComponent'
import moment from 'moment'
import DeleteModal from '../Common/DeleteModal'
import {toast} from 'react-toastify'

type Props = {
  className: string
}

const AdList: React.FC<Props> = ({className}) => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteAdId, setDeleteAdId] = useState<string>('')
  //api call
  const {data, isFetching, isError, isSuccess} = useGetAllFreeAdsQuery(null)

  const [
    deleteAd,
    {isLoading: isLoadingDelete, isError: isErrorDelete, isSuccess: isSuccessDelete},
  ] = useDeleteSingleFreeAdsMutation()

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal)
  }

  const handleDelete = () => {
    if (deleteAdId !== '') {
      deleteAd(deleteAdId)
    }
    setDeleteModal(false)
  }

  //toast
  useEffect(() => {
    if (!isLoadingDelete && !isErrorDelete && isSuccessDelete) {
      toast.success('Successfully deleted ad', {
        hideProgressBar: true,
        toastId: 'adDeleteSuccess',
      })
    }
    if (!isLoadingDelete && isErrorDelete && !isSuccessDelete) {
      toast.error('Failed to delete ad', {
        hideProgressBar: true,
        toastId: 'adDeleteError',
      })
    }
    return () => {
      setTimeout(() => {
        toast.dismiss('adDeleteSuccess')
        toast.dismiss('adDeleteError')
      }, 2000)
    }
  }, [isErrorDelete, isLoadingDelete, isSuccessDelete])

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : !isFetching && !isError && isSuccess ? (
        <>
          {data?.data?.length > 0 ? (
            <>
              {
                <div className={`card ${className}`}>
                  {/* begin::Header */}
                  <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                      <span className='card-label fw-bold fs-3 mb-1'>Classified Ads</span>
                      <span className='text-muted mt-1 fw-semibold fs-7'>
                        Total Ads: {data?.data?.length}
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
                            <th className='min-w-120px'>Status</th>
                            <th className='min-w-100px text-end'>Actions</th>
                          </tr>
                        </thead>
                        {/* end::Table head */}
                        {/* begin::Table body */}
                        <tbody>
                          {data?.data?.map(
                            (
                              ad: {title: string; createdAt: string; email: string; _id: string},
                              index: Key
                            ) => {
                              return (
                                <>
                                  <tr key={index}>
                                    <td>
                                      <div className='d-flex align-items-center'>
                                        <div className='d-flex justify-content-start flex-column'>
                                          <span className='text-dark fw-bold  fs-7'>
                                            {ad?.title}
                                          </span>
                                        </div>
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
                                            Ana Simmons
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
                                            {moment(ad?.createdAt).format('MMM Do YYYY, h:mm a')}
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className='text-end'>
                                      <div className='d-flex flex-column w-100 me-2'>
                                        <div className='d-flex flex-stack mb-2'>
                                          <span className='text-muted me-2 fs-7 fw-semibold'>
                                            {moment(ad?.createdAt).format('MMM Do YYYY, h:mm a')}
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
                                        <button className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
                                          <KTSVG
                                            path='/media/icons/duotune/art/art005.svg'
                                            className='svg-icon-3'
                                          />
                                        </button>
                                        <button
                                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                                          onClick={() => {
                                            setDeleteAdId(ad?._id)
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
      <DeleteModal show={deleteModal} handleModal={handleDeleteModal} handleDelete={handleDelete} />
    </>
  )
}

export default AdList
