import React, {Key, useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import {KTSVG} from '../../../../_metronic/helpers'
import Loader from '../../../Components/Custom Components/common/Loader'
import ErrorComponent from '../../../Components/Custom Components/common/ErrorComponent'
import NotFoundComponent from '../../../Components/Custom Components/common/NotFoundComponent'
import {toast} from 'react-toastify'
import DeleteModal from '../Common/DeleteModal'
import CreateCity from './CreateCity'
import {
  useDeleteSingleCityMutation,
  useGetAllCitiesQuery,
} from '../../../../redux/features/api/citiesApi/citiesApi'

type Props = {
  className: string
}

const CityList: React.FC<Props> = ({className}) => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [isCreateModal, setIsCreateModal] = useState(false)
  const [isEditModal, setIsEditModal] = useState(false)
  const [type, setType] = useState('')
  const [selectedForDelete, setSelectedForDelete] = useState<string>('')
  const [defaultCountryName, setDefaultCountryName] = useState<string>('')
  const [defaultCityName, setDefaultCityName] = useState<string>('')
  const [cityId, setCityId] = useState<string>('')

  //api call
  const {data, isFetching, isSuccess} = useGetAllCitiesQuery(null)

  const [
    deleteCity,
    {isLoading: isLoadingDelete, isError: isErrorDelete, isSuccess: isSuccessDelete},
  ] = useDeleteSingleCityMutation()

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
    deleteCity(selectedForDelete)
    setDeleteModal(!deleteModal)
  }

  //toast delete country
  useEffect(() => {
    if (!isLoadingDelete && !isErrorDelete && isSuccessDelete) {
      toast.success('Successfully deleted city', {
        hideProgressBar: true,
        toastId: 'cityDeleteSuccess',
      })
    }
    if (!isLoadingDelete && isErrorDelete && !isSuccessDelete) {
      toast.error('Failed to delete city', {
        hideProgressBar: true,
        toastId: 'cityDeleteError',
      })
    }
    return () => {
      setTimeout(() => {
        toast.dismiss('cityDeleteSuccess')
        toast.dismiss('cityDeleteError')
      }, 2000)
    }
  }, [isErrorDelete, isLoadingDelete, isSuccessDelete])

  return (
    <>
      <div className='d-flex justify-content-end mb-2'>
        <Button
          onClick={() => {
            setType('add-city')
            setIsCreateModal(true)
          }}
          className='btn btn-sm fw-bold btn-primary'
          // data-bs-toggle='modal'
          // data-bs-target='#kt_modal_create_app'
        >
          Add City
        </Button>
      </div>
      {isFetching ? (
        <Loader />
      ) : !isFetching && isSuccess ? (
        <>
          {data?.cities?.length > 0 ? (
            <>
              <div className={`card ${className}`}>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Cities</span>
                    <span className='text-muted mt-1 fw-semibold fs-7'>
                      Total cities: {data?.cities?.length ?? 0}
                    </span>
                  </h3>
                </div>
                <div className='card-body py-3'>
                  <div className='table-responsive'>
                    <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                      <thead>
                        <tr className='fw-bold text-muted'>
                          <th className='min-w-10px'>Serial</th>
                          <th className='min-w-140px'>City Name</th>
                          <th className='min-w-140px'>Country Name</th>
                          <th className='min-w-120px'>Status</th>
                          <th className='min-w-100px text-end'>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.cities?.map(
                          (city: {name: string; _id: string; country: string}, index: string) => {
                            return (
                              <>
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td className='fw-bold'>{city?.name?.toUpperCase()}</td>
                                  <td className='fw-bold'>{city?.country?.toUpperCase()}</td>
                                  <td>
                                    <a
                                      href='/'
                                      className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'
                                    >
                                      Active
                                    </a>
                                  </td>

                                  <td className='text-end'>
                                    {/* <button className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
                                      <KTSVG
                                        path='/media/icons/duotune/general/gen019.svg'
                                        className='svg-icon-3'
                                      />
                                    </button> */}
                                    <button
                                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                      onClick={() => {
                                        setType('edit-city')
                                        setCityId(city?._id)
                                        setDefaultCityName(city?.name)
                                        setDefaultCountryName(city?.country)
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
                                        setSelectedForDelete(city?._id)
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
      <CreateCity
        show={isCreateModal}
        handleClose={handleCreateCountryModal}
        type={type}
        cityId={cityId}
        defaultCountryName={defaultCountryName}
        defaultCityName={defaultCityName}
      />
      <DeleteModal show={deleteModal} handleModal={handleDeleteModal} handleDelete={handleDelete} />
    </>
  )
}

export default CityList
