import React, {Key, useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import ErrorComponent from '../../../Components/Custom Components/common/ErrorComponent'
import NotFoundComponent from '../../../Components/Custom Components/common/NotFoundComponent'
import DeleteModal from '../Common/DeleteModal'
import Loader from '../../../Components/Custom Components/common/Loader'
import {ToastContainer, toast} from 'react-toastify'
import {
  useDeleteEscortAdMutation,
  useDeleteSingleEscortMutation,
  useGetFeaturedEscortsQuery,
} from '../../../../redux/features/api/escorts/escortsApi'
import moment from 'moment'
import ImageModal from '../Common/ImageModal'
import {useGetAllVerificationQuery} from '../../../../redux/features/api/verification/verificationApi'
import EscortAdReceiptModal from './EscortAdReceiptModal'

type Props = {
  className: string
}

const EscortVerifieyRequestList: React.FC<Props> = ({className}) => {
  const [showImageModal, setShowImageModal] = useState(false)
  const [deleteEscortUserName, setDeleteEscortUserName] = useState<string>('')
  const [deleteModal, setDeleteModal] = useState(false);
  const [receiptModal, setReceiptModal] = useState<boolean>(false)
  const [receiptData, setReceiptData] = useState<any>({})
  const handleImageModal = () => {
    setReceiptModal(!receiptModal)
  }
  //api call
  const [query, setQuery] = useState({isPaid: false, expired: false, limit: 50, offset: 0})
  const {data, isFetching, isError, isSuccess} = useGetFeaturedEscortsQuery(query, {skip: !query})
  const [
    deleteEscort,
    {isLoading: isLoadingDelete, isError: isErrorDelete, isSuccess: isSuccessDelete},
  ] = useDeleteEscortAdMutation()

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal)
  }

  const handleDelete = () => {
    if (deleteEscortUserName !== '') {
      deleteEscort(deleteEscortUserName)
    }
    setDeleteModal(false)
  }

  //toast
  useEffect(() => {
    if (!isLoadingDelete && !isErrorDelete && isSuccessDelete) {
      toast.success('Successfully deleted escort', {
        hideProgressBar: true,
        toastId: 'escortDeleteSuccess',
      })
    }
    if (!isLoadingDelete && isErrorDelete && !isSuccessDelete) {
      toast.error('Failed to deleted escort', {
        hideProgressBar: true,
        toastId: 'escortDeleteError',
      })
    }
    return () => {
      setTimeout(() => {
        toast.dismiss('escortDeleteSuccess')
        toast.dismiss('escortDeleteError')
      }, 2000)
    }
  }, [isErrorDelete, isLoadingDelete, isSuccessDelete])

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : !isFetching && !isError && isSuccess ? (
        <>
          {data?.ads?.length > 0 ? (
            <>
              <div className={`card ${className}`}>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Escorts Pending Ads</span>
                    <span className='text-muted mt-1 fw-semibold fs-7'>
                      {data?.ads?.length ?? 0} Total Escorts
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
                      <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
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
                          <th className='min-w-130px'>Name</th>
                          <th className='min-w-110px'>Username</th>
                          <th className='min-w-120px'>Email</th>
                          <th className='min-w-100px'>Payment Type</th>
                          <th className='min-w-100px'>Payment Status</th>
                          <th className='min-w-100px text-end'>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.ads?.map(
                          (
                            ad: {
                              _id: string
                              name: string
                              email: string
                              status: string
                              createdAt: string
                              profileImage: string
                              username: string
                              photos: any
                              isBank: boolean
                              isPaid: boolean
                              paymentMedia: string
                              paymentDetails: any
                            },
                            index: Key
                          ) => {
                            return (
                              <>
                                <tr key={index}>
                                  <td>
                                    <div className='d-flex align-items-center'>
                                      <div className='d-flex justify-content-start flex-column'>
                                        <a
                                          href='/'
                                          className='text-dark fw-bold text-hover-primary fs-6'
                                        >
                                          {ad?.name}
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a
                                      href='/'
                                      className='text-dark fw-bold text-hover-primary d-block fs-6'
                                    >
                                      {ad?.username}
                                    </a>
                                  </td>
                                  <td className='text-end'>
                                    <div className='d-flex flex-column w-100 me-2'>
                                      <div className='d-flex flex-stack mb-2'>{ad?.email}</div>
                                    </div>
                                  </td>
                                  
                                  <td className='text-end'>
                                    <div className='d-flex flex-column w-100 me-2'>
                                      <div className='d-flex flex-stack mb-2 fw-bold'>
                                        {ad?.isBank ? 'Bank' : 'Card'}
                                      </div>
                                    </div>
                                  </td>
                                  <td className='text-end'>
                                    <div className='d-flex flex-column w-100 me-2'>
                                      <div className='d-flex flex-stack mb-2'>
                                        {ad?.isPaid ? (
                                          <span className='badge badge-primary'>Paid</span>
                                        ) : (
                                          <span className='badge badge-warning'>Pending</span>
                                        )}
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className='d-flex justify-content-end flex-shrink-0'>
                                      {ad?.paymentMedia === 'bank' && (
                                        <button className='btn btn-primary btn-sm me-1'  onClick={() => {
                                          setReceiptData({...ad?.paymentDetails})
                                          setReceiptModal(true)
                                        }}>
                                          View Receipt
                                        </button>
                                      )}
                                      <button
                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                                        onClick={() => {
                                          setDeleteEscortUserName(ad?._id)
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
                <DeleteModal
                  show={deleteModal}
                  handleModal={handleDeleteModal}
                  handleDelete={handleDelete}
                />
                {/* begin::Body */}
              </div>
            </>
          ) : (
            <NotFoundComponent type='Pending Ad' />
          )}
        </>
      ) : (
        <ErrorComponent />
      )}
       <EscortAdReceiptModal
        show={receiptModal}
        handleClose={handleImageModal}
        data={receiptData}
      />
    </>
  )
}

export default EscortVerifieyRequestList
