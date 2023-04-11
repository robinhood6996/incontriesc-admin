import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'

type Props = {
  className: string
}

const EscortDetails: React.FC<Props> = ({className}) => {
  return (
    <>
      <div className='accordion' id='kt_accordion_1'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='kt_accordion_1_header_1'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#kt_accordion_1_body_1'
              aria-expanded='false'
              aria-controls='kt_accordion_1_body_1'
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id='kt_accordion_1_body_1'
            className='accordion-collapse collapse'
            aria-labelledby='kt_accordion_1_header_1'
            data-bs-parent='#kt_accordion_1'
          >
            <div className='accordion-body'>
              <strong>This is the first item's accordion body.</strong>It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='kt_accordion_1_header_2'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#kt_accordion_1_body_2'
              aria-expanded='false'
              aria-controls='kt_accordion_1_body_2'
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id='kt_accordion_1_body_2'
            className='accordion-collapse collapse'
            aria-labelledby='kt_accordion_1_header_2'
            data-bs-parent='#kt_accordion_1'
          >
            <div className='accordion-body'>
              <strong>This is the second item's accordion body.</strong>It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='kt_accordion_1_header_3'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#kt_accordion_1_body_3'
              aria-expanded='false'
              aria-controls='kt_accordion_1_body_3'
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id='kt_accordion_1_body_3'
            className='accordion-collapse collapse'
            aria-labelledby='kt_accordion_1_header_3'
            data-bs-parent='#kt_accordion_1'
          >
            <div className='accordion-body'>
              <strong>This is the third item's accordion body.</strong>It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EscortDetails
