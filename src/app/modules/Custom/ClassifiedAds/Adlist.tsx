import React, {Key, useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {
  useDeleteSingleFreeAdsMutation,
  useGetAllFreeAdsQuery,
} from '../../../../redux/features/api/freeAds/freeAdsApi'
import Loader from '../../../Components/Custom Components/common/Loader'
import ErrorComponent from '../../../Components/Custom Components/common/ErrorComponent'
import NotFoundComponent from '../../../Components/Custom Components/common/NotFoundComponent'
import AdTableRow from './AdTableRow'

type Props = {
  className: string
}

const AdList: React.FC<Props> = ({className}) => {
  const [deleteAdId, setDeleteAdId] = useState<string>('')
  //api call
  const {data, isFetching, isError, isSuccess} = useGetAllFreeAdsQuery(null)

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
                          {data?.data?.map((ad: any, index: Key) => {
                            return <AdTableRow key={index} ad={ad} />
                          })}
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
    </>
  )
}

export default AdList
