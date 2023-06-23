import React, {Key, useEffect, useState} from 'react'
import {KTSVG} from '../../../../_metronic/helpers'
import ErrorComponent from '../../../Components/Custom Components/common/ErrorComponent'
import NotFoundComponent from '../../../Components/Custom Components/common/NotFoundComponent'
import DeleteModal from '../Common/DeleteModal'
import Loader from '../../../Components/Custom Components/common/Loader'
import {toast} from 'react-toastify'
import ImageModal from '../Common/ImageModal'
import {
  useDeleteVerificationMutation,
  useGetAllVerificationQuery,
} from '../../../../redux/features/api/verification/verificationApi'

type Props = {
  className: string
}

const VerifiedIDList: React.FC<Props> = ({className}) => {
  const [showImageModal, setShowImageModal] = useState(false)
  const [selectedImageURL, setSelectedImageURL] = useState('')
  const [deleteEscortUserName, setDeleteEscortUserName] = useState<string>('')
  const [deleteModal, setDeleteModal] = useState(false)

  const handleImageModal = () => {
    setShowImageModal(!showImageModal)
  }
  //api call
  const {data, isFetching, isError, isSuccess} = useGetAllVerificationQuery(null)
  console.log('data', data)
  const [
    deleteVerification,
    {isLoading: isLoadingDelete, isError: isErrorDelete, isSuccess: isSuccessDelete},
  ] = useDeleteVerificationMutation()

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal)
  }

  const handleDelete = () => {
    if (deleteEscortUserName !== '') {
      deleteVerification(deleteEscortUserName)
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
          {data?.length > 0 ? (
            <>
              <div className={`card ${className}`}>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Escorts</span>
                    <span className='text-muted mt-1 fw-semibold fs-7'>120 Total Escorts</span>
                  </h3>
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
                          <th className='min-w-200px'>Photos</th>
                          <th className='min-w-100px'>Status</th>
                          <th className='min-w-100px text-end'>Actions</th>
                        </tr>
                      </thead>
                      {/* end::Table head */}
                      {/* begin::Table body */}
                      <tbody>
                        {data?.map(
                          (
                            escort: {
                              _id: string
                              name: string
                              userEmail: string
                              status: string
                              createdAt: string
                              profileImage: string
                              username: string
                              photos: any
                            },
                            index: Key
                          ) => {
                            if (escort?.status === 'approved') {
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
                                            {escort?.name}
                                          </a>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <a
                                        href='/'
                                        className='text-dark fw-bold text-hover-primary d-block fs-6'
                                      >
                                        {escort?.username}
                                      </a>
                                      {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                                      VIP
                                    </span> */}
                                    </td>
                                    <td className='text-end'>
                                      <div className='d-flex flex-column w-100 me-2'>
                                        <div className='d-flex flex-stack mb-2'>
                                          {escort?.userEmail}
                                        </div>
                                      </div>
                                    </td>
                                    <td className='text-start'>
                                      <div className='d-flex w-100 me-2'>
                                        {escort?.photos?.map(
                                          (image: {filename: string}, index: Key) => {
                                            return (
                                              <>
                                                <div
                                                  key={index}
                                                  className='symbol symbol-45px me-5'
                                                  onClick={() => {
                                                    setSelectedImageURL(
                                                      `${process.env.REACT_APP_CUSTOM_BASE_URL}/esc/${image?.filename}`
                                                    )
                                                    handleImageModal()
                                                  }}
                                                >
                                                  <img
                                                    src={`${process.env.REACT_APP_CUSTOM_BASE_URL}/esc/${image?.filename}`}
                                                    alt=''
                                                  />
                                                </div>
                                              </>
                                            )
                                          }
                                        )}
                                      </div>
                                    </td>
                                    <td className='text-end'>
                                      <div className='d-flex flex-column w-100 me-2'>
                                        <div className='form-check form-switch form-check-custom form-check-solid'>
                                          <input
                                            className='form-check-input h-20px w-30px'
                                            type='checkbox'
                                            id='flexSwitchDefault'
                                            defaultChecked={true}
                                            disabled
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className='d-flex justify-content-end flex-shrink-0'>
                                        <button
                                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                          // onClick={handleEdit}
                                        >
                                          <KTSVG
                                            path='/media/icons/duotune/art/art005.svg'
                                            className='svg-icon-3'
                                          />
                                        </button>
                                        <button
                                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                                          onClick={() => {
                                            setDeleteEscortUserName(escort?._id)
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
            <NotFoundComponent type='Verified Escort' />
          )}
        </>
      ) : (
        <ErrorComponent />
      )}
      <ImageModal
        show={showImageModal}
        handleClose={handleImageModal}
        imageURL={selectedImageURL}
      />
    </>
  )
}

export default VerifiedIDList
