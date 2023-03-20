/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {useState} from 'react'
import {KTSVG} from '../../../../helpers'
import {CreateAppModal, Dropdown1} from '../../../../partials'
import {useLayout} from '../../../core'

const ToolbarClassic = () => {
  const {config} = useLayout()
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)
  const daterangepickerButtonClass = config.app?.toolbar?.fixed?.desktop
    ? 'btn-light'
    : 'bg-body btn-color-gray-700 btn-active-color-primary'

  return (
    <div className='d-flex align-items-center gap-2 gap-lg-3'>
      {config.app?.toolbar?.daterangepickerButton && (
        <div
          data-kt-daterangepicker='true'
          data-kt-daterangepicker-opens='left'
          className={clsx(
            'btn btn-sm fw-bold  d-flex align-items-center px-4',
            daterangepickerButtonClass
          )}
        >
          <div className='text-gray-600 fw-bold'>Loading date range...</div>
          <KTSVG path='/media/icons/duotune/general/gen014.svg' className='svg-icon-1 ms-2 me-0' />
        </div>
      )}

      <CreateAppModal show={showCreateAppModal} handleClose={() => setShowCreateAppModal(false)} />
    </div>
  )
}

export {ToolbarClassic}
