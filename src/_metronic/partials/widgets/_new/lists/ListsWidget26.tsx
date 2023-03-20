/* eslint-disable jsx-a11y/anchor-is-valid */
import {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../../helpers'

type Props = {
  className: string
}

const rows: Array<{description: string; path: string}> = [
  {description: 'Users', path: '/users'},
  {description: 'Escorts', path: '/escorts'},
  {description: 'Payments', path: '/Payments'},
]

const ListsWidget26 = ({className}: Props) => (
  <div className={`card card-flush ${className}`}>
    <div className='card-header pt-5'>
      <h3 className='card-title text-gray-800 fw-bold'>Quick Links</h3>
      <div className='card-toolbar'></div>
    </div>
    <div className='card-body pt-5'>
      {rows.map((row, index) => (
        <Fragment key={`lw26-rows-${index}`}>
          <div className='d-flex flex-stack'>
            <Link to={row.path} className='text-primary fw-semibold fs-6 me-2'>
              {row.description}
            </Link>
            <button
              type='button'
              className='btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end'
            >
              <KTSVG path='media/icons/duotune/arrows/arr095.svg' className='svg-icon-2' />
            </button>
          </div>
          {rows.length - 1 > index && <div className='separator separator-dashed my-3' />}
        </Fragment>
      ))}
    </div>
  </div>
)
export {ListsWidget26}
