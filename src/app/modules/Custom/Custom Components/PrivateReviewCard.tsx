import {faCommentDots} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {FC} from 'react'
import {Link} from 'react-router-dom'

type Props = {
  data?: any
}

const PrivateReviewCard: FC<Props> = ({data}) => {
  return (
    <div className='card my-3'>
      {/* <div className='row g-0'>
        <div className='col-12'>
         
        </div>
      </div> */}
      <div className='card-body'>
        <div className='d-md-flex d-flex flex-md-row flex-column justify-content-between'>
          <h5 className='card-title'>{data?.title}</h5>
          <h5 className='card-title'>{data?.date_location}</h5>
        </div>
        <div className='d-md-flex d-flex flex-md-row flex-column justify-content-between'>
          <h5 className='card-title'>Rating: {data?.rating}</h5>
          <Link to={`/private-area/reviews/${data?.review_id}`} className='card-title'>
            <FontAwesomeIcon
              className='me-3 fs-2'
              // style={{fontSize: '38px'}}
              icon={faCommentDots}
            />
            SEE REVIEW AND REPLY
          </Link>
        </div>
      </div>
    </div>
  )
}

{
  /* <div className=''>
  <Link to={`/private-area/premium-pay-online/packages/${data?.title}`}>
    <button className='btn btn-primary w-md-25'>BUY ADVERTISE</button>
  </Link>
</div> */
}

export default PrivateReviewCard
