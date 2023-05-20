import React, {Key} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import ErrorComponent from '../../../Components/Custom Components/common/ErrorComponent'
import NotFoundComponent from '../../../Components/Custom Components/common/NotFoundComponent'
import DeleteModal from '../Common/DeleteModal'
import Loader from '../../../Components/Custom Components/common/Loader'
import {ToastContainer, toast} from 'react-toastify'
import {useGetAllEscortsQuery} from '../../../../redux/features/api/escorts/escortsApi'
import moment from 'moment'

type Props = {
  className: string
}

const EscortList: React.FC<Props> = ({className}) => {
  const {data, isFetching, isError, isSuccess} = useGetAllEscortsQuery(null)
  return (
    <>
      {isFetching ? (
        <Loader />
      ) : !isFetching && !isError && isSuccess ? (
        <>
          {data?.data?.length > 0 ? (
            <>
              <div className={`card ${className}`}>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Escorts</span>
                    <span className='text-muted mt-1 fw-semibold fs-7'>120 Total Escorts</span>
                  </h3>
                  <div
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
                  </div>
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
                          <th className='w-25px'>
                            <div className='form-check form-check-sm form-check-custom form-check-solid'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                value='1'
                                data-kt-check='true'
                                data-kt-check-target='.widget-9-check'
                              />
                            </div>
                          </th>
                          <th className='min-w-150px'>Name</th>
                          <th className='min-w-140px'>Category</th>
                          <th className='min-w-120px'>Join Date</th>
                          <th className='min-w-120px'>Status</th>
                          <th className='min-w-100px text-end'>Actions</th>
                        </tr>
                      </thead>
                      {/* end::Table head */}
                      {/* begin::Table body */}
                      <tbody>
                        {data?.data?.map(
                          (
                            escort: {
                              name: string
                              email: string
                              category: string
                              createdAt: string
                              profileImage: string
                            },
                            index: Key
                          ) => {
                            return (
                              <>
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
                                          src={`${process.env.REACT_APP_CUSTOM_BASE_URL}/esc/${escort?.profileImage}`}
                                          alt=''
                                        />
                                      </div>
                                      <div className='d-flex justify-content-start flex-column'>
                                        <a
                                          href='/'
                                          className='text-dark fw-bold text-hover-primary fs-6'
                                        >
                                          {escort?.name}
                                        </a>
                                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                                          {escort?.email}
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a
                                      href='/'
                                      className='text-dark fw-bold text-hover-primary d-block fs-6'
                                    >
                                      {escort?.category?.toUpperCase()}
                                    </a>
                                    {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                                      VIP
                                    </span> */}
                                  </td>
                                  <td className='text-end'>
                                    <div className='d-flex flex-column w-100 me-2'>
                                      <div className='d-flex flex-stack mb-2'>
                                        <span className='text-muted me-2 fs-7 fw-semibold'>
                                          {moment(escort?.createdAt).format('MMM Do YYYY, h:mm a')}
                                        </span>
                                      </div>
                                    </div>
                                  </td>
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
                                      <a
                                        href='/'
                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                                      >
                                        <KTSVG
                                          path='/media/icons/duotune/general/gen027.svg'
                                          className='svg-icon-3'
                                        />
                                      </a>
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

export default EscortList
