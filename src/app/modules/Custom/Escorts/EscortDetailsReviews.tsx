import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_green.css'
import {faFileInvoice} from '@fortawesome/free-solid-svg-icons'
import PrivateReviewCard from '../Custom Components/PrivateReviewCard'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function EscortDetailsReviews() {
  const advertisementsData = [
    {
      title: 'abbattitore',
      date_location: 'Jan 17, 2022 Bergamo',
      rating: '81.5',
      review_id: 1,
    },
    {
      title: 'abbattitore',
      date_location: 'Jan 17, 2022 Bergamo',
      rating: '81.5',
      review_id: 2,
    },
  ]

  return (
    <div>
      <div className='my-5'>
        <h2 className='text-base mb-1'>
          {' '}
          <FontAwesomeIcon
            className='me-3 fs-2'
            // style={{fontSize: '38px'}}
            icon={faFileInvoice}
          />
          Reviews
        </h2>
        <p className='text-warning mt-3'>
          <span className='text-warning fw-bold fs-4'>Attention: </span> In the case of a review
          that has already been posted, when its removal is requested by the profile owner or member
          who posted it, an informational message will appear in the Reviews section of the public
          profile: "Review removed upon request".
        </p>
      </div>

      <div className='row border rounded p-4 flex-column my-5'>
        {/* Visit City start */}
        <div className='col-lg-6 col-12 mb-2'>
          <label className='form-label fw-bolder text-dark fs-6 required'>All reviews</label>
        </div>
        {advertisementsData?.map((ad) => {
          return <PrivateReviewCard data={ad} />
        })}
      </div>

      {/* <div className='mt-4 d-flex justify-end'>
        <button type='submit' id='kt_sign_up_submit' className='btn btn-lg btn-primary w-25 mb-5'>
          Submit
        </button>
      </div> */}
    </div>
  )
}
