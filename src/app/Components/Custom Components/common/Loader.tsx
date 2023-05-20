import React from 'react'

const Loader = () => {
  return (
    <div className='d-flex align-items-center flex-column'>
      <span className='spinner-border text-primary' role='status'></span>
      <span className='text-gray-800 fs-6 fw-semibold mt-3'>Loading...</span>
    </div>
  )
}

export default Loader
