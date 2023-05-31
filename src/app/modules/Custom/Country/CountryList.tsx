import React, {Key, useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import {KTSVG} from '../../../../_metronic/helpers'
import CreateCountry from './CreateCountry'
import {
  useCreateCountryMutation,
  useDeleteSingleCountryMutation,
  useGetAllCountryQuery,
} from '../../../../redux/features/api/country/countryApi'
import Loader from '../../../Components/Custom Components/common/Loader'
import ErrorComponent from '../../../Components/Custom Components/common/ErrorComponent'
import NotFoundComponent from '../../../Components/Custom Components/common/NotFoundComponent'
import {toast} from 'react-toastify'
import DeleteModal from '../Common/DeleteModal'

type Props = {
  className: string
}

const CountryList: React.FC<Props> = ({className}) => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [isCreateModal, setIsCreateModal] = useState(false)
  const [isEditModal, setIsEditModal] = useState(false)
  const [type, setType] = useState('')
  const [selectedForDelete, setSelectedForDelete] = useState<string>('')

  //api call
  const {data, isFetching, isSuccess} = useGetAllCountryQuery(null)

  const [
    deleteCountry,
    {isLoading: isLoadingDelete, isError: isErrorDelete, isSuccess: isSuccessDelete},
  ] = useDeleteSingleCountryMutation()

  const handleCreateCountryModal = () => {
    setIsCreateModal(!isCreateModal)
  }
  // const handleEditCountryModal = () => {
  //   setIsEditModal(!isEditModal)
  // }

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal)
  }

  const handleDelete = () => {
    deleteCountry(selectedForDelete)
    setDeleteModal(!deleteModal)
  }

  //toast delete country
  useEffect(() => {
    if (!isLoadingDelete && !isErrorDelete && isSuccessDelete) {
      toast.success('Successfully deleted country', {
        hideProgressBar: true,
        toastId: 'countryDeleteSuccess',
      })
    }
    if (!isLoadingDelete && isErrorDelete && !isSuccessDelete) {
      toast.error('Failed to delete country', {
        hideProgressBar: true,
        toastId: 'countryDeleteError',
      })
    }
    return () => {
      setTimeout(() => {
        toast.dismiss('countryDeleteSuccess')
        toast.dismiss('countryDeleteError')
      }, 2000)
    }
  }, [isErrorDelete, isLoadingDelete, isSuccessDelete])

  return (
    <>
      <div className='d-flex justify-content-end mb-2'>
        <Button
          onClick={() => {
            setType('add-country')
            setIsCreateModal(true)
          }}
          className='btn btn-sm fw-bold btn-primary'
          // data-bs-toggle='modal'
          // data-bs-target='#kt_modal_create_app'
        >
          Add Country
        </Button>
      </div>
      {isFetching ? (
        <Loader />
      ) : !isFetching && isSuccess ? (
        <>
          {data?.countries?.length > 0 ? (
            <>
              <div className={`card ${className}`}>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Countries</span>
                    <span className='text-muted mt-1 fw-semibold fs-7'>
                      Total Countries: {data?.countries?.length ?? 0}
                    </span>
                  </h3>
                </div>
                <div className='card-body py-3'>
                  <div className='table-responsive'>
                    <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                      <thead>
                        <tr className='fw-bold text-muted'>
                          <th className='min-w-10px'>Serial</th>
                          <th className='min-w-140px'>Name</th>
                          <th className='min-w-120px'>Status</th>
                          <th className='min-w-100px text-end'>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.countries?.map(
                          (country: {name: string; _id: string}, index: string) => {
                            return (
                              <>
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td className='fw-bold'>{country?.name?.toUpperCase()}</td>
                                  <td>
                                    <a
                                      href='/'
                                      className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'
                                    >
                                      Active
                                    </a>
                                  </td>

                                  <td className='text-end'>
                                    <button className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
                                      <KTSVG
                                        path='/media/icons/duotune/general/gen019.svg'
                                        className='svg-icon-3'
                                      />
                                    </button>
                                    <button
                                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                      onClick={() => {
                                        setType('edit-country')
                                        setIsCreateModal(true)
                                      }}
                                    >
                                      <KTSVG
                                        path='/media/icons/duotune/art/art005.svg'
                                        className='svg-icon-3'
                                      />
                                    </button>
                                    <button
                                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                                      onClick={() => {
                                        setSelectedForDelete(country?._id)
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
                {/* <CreateCountry
                  show={isEditModal}
                  handleClose={handleEditCountryModal}
                  type='edit-country'
                /> */}
              </div>
            </>
          ) : (
            <NotFoundComponent type='Countries' />
          )}
        </>
      ) : (
        <ErrorComponent />
      )}
      <CreateCountry show={isCreateModal} handleClose={handleCreateCountryModal} type={type} />
      <DeleteModal show={deleteModal} handleModal={handleDeleteModal} handleDelete={handleDelete} />
    </>
  )
}

export default CountryList
