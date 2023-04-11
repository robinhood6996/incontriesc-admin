import React from 'react'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'

const GirlCard = ({vip = false, brandNew = false, widthFull = false}) => {
  return (
    <div className={widthFull ? 'w-100' : 'col-lg-3 col-md-4 mb-5'}>
      <Link to={'/escort/profile/overview'}>
        <div className='w-100 ribbon ribbon-end ribbon-clip'>
          {brandNew && (
            <div className='ribbon-label' style={{top: '30px'}}>
              New
              <span className='ribbon-inner bg-info'></span>
            </div>
          )}
          {vip && (
            <div className='ribbon-label' style={{top: '30px'}}>
              Diamond
              <span className='ribbon-inner bg-success'></span>
            </div>
          )}
          <div className='w-100 girl-card card overflow-hidden position-relative'>
            <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} />
            <div className='card-info py-1 position-absolute bg-opacity-75 bg-white'>
              <div className='d-flex justify-content-center'>
                <h5 className='fs-16 mb-0 name text-gray-700'>Katrin</h5>{' '}
                <h5 className='age mb-0 text-gray-700'>, 23</h5>
              </div>
              <p className='address fs-14 text-center mb-0 text-gray-700'>Milano, Italy</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default GirlCard
