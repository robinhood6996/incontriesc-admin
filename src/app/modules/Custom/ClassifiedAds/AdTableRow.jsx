import React, {useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import moment from 'moment'
import {useGetSingleEscortDetailsQuery} from '../../../../redux/features/api/escorts/escortsApi'
import DeleteModal from '../Common/DeleteModal'
import {useDeleteSingleFreeAdsMutation} from '../../../../redux/features/api/freeAds/freeAdsApi'
import {toast} from 'react-toastify'
import AdDetailsModal from './AdDetailsModal'

const AdTableRow = ({ad}) => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteAdId, setDeleteAdId] = useState('')
  const [addDetailsModal, setAddDetailsModal] = useState(false)
  const [adModalData, setAdModalData] = useState(null)
  //api call
  const {data, isFetching, isSuccess, isError} = useGetSingleEscortDetailsQuery(ad?.username, {
    skip: !ad?.username,
  })

  const [
    deleteAd,
    {isLoading: isLoadingDelete, isError: isErrorDelete, isSuccess: isSuccessDelete},
  ] = useDeleteSingleFreeAdsMutation()

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal)
  }

  const handleAdDetailsModal = () => {
    setAddDetailsModal(!addDetailsModal)
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
      <tr>
        <td>
          <div className='d-flex align-items-center'>
            <div className='d-flex justify-content-start flex-column'>
              <span className='text-dark fw-bold  fs-7'>{ad?.title}</span>
            </div>
          </div>
        </td>
        <td>
          <div className='d-flex align-items-center'>
            <div className='symbol symbol-45px me-5'>
              <img
                src={`${process.env.REACT_APP_CUSTOM_BASE_URL}/esc/${ad?.photos[0]?.filename}`}
                alt=''
              />
            </div>
            <div className='d-flex justify-content-start flex-column'>
              <a href='/' className='text-dark fw-bold text-hover-primary fs-6'>
                {data?.data?.name}
              </a>
              <span className='text-muted fw-semibold text-muted d-block fs-7'>
                {ad?.ownerEmail}
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
              <span className='text-muted me-2 fs-7 fw-semibold'>Active</span>
            </div>
          </div>
        </td>
        <td>
          <div className='d-flex justify-content-end flex-shrink-0'>
            <button
              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
              onClick={() => {
                setAdModalData(ad)
                setAddDetailsModal(true)
              }}
            >
              <KTSVG path='/media/icons/eye-solid.svg' className='svg-icon-3' />
            </button>
            <button className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
              <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
            </button>
            <button
              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
              onClick={() => {
                setDeleteAdId(ad?._id)
                handleDeleteModal()
              }}
            >
              <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
            </button>
          </div>
        </td>
      </tr>
      <DeleteModal show={deleteModal} handleModal={handleDeleteModal} handleDelete={handleDelete} />
      <AdDetailsModal
        show={addDetailsModal}
        handleClose={handleAdDetailsModal}
        data={adModalData}
      />
    </>
  )
}

export default AdTableRow
