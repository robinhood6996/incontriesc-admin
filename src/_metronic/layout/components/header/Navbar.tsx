import clsx from 'clsx'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {HeaderNotificationsMenu, HeaderUserMenu, Search, ThemeModeSwitcher} from '../../../partials'
import {useLayout} from '../../core'
import ReactFlagsSelect from 'react-flags-select'
import {useState} from 'react'
const itemClass = 'ms-1 ms-lg-3'
const btnClass =
  'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px'
const userAvatarClass = 'symbol-35px symbol-md-40px'
const btnIconClass = 'svg-icon-1'

const Navbar = () => {
  const {config} = useLayout()
  const [select, setSelect] = useState('US')
  const onSelect = (code: any) => {
    setSelect(code)
    if (code == 'US') {
      // @ts-ignore
      document.querySelector('.goog-te-combo').value = 'en'
    } else if (code == 'FR') {
      // @ts-ignore
      document.querySelector('.goog-te-combo').value = 'fr'
    } else if (code == 'IT') {
      // @ts-ignore
      document.querySelector('.goog-te-combo').value = 'it'
    } else if (code == 'ES') {
      // @ts-ignore
      document.querySelector('.goog-te-combo').value = 'es'
    } else if (code == 'DE') {
      // @ts-ignore
      document.querySelector('.goog-te-combo').value = 'de'
    }
    // @ts-ignore
    document.querySelector('.goog-te-combo').dispatchEvent(new Event('change'))
  }
  return (
    <div className='app-navbar flex-shrink-0'>
      <div className={'d-flex align-items-center ms-lg-5'}>
        <ReactFlagsSelect
          className='flag-lang'
          selected={select}
          onSelect={onSelect}
          countries={['US', 'FR', 'DE', 'IT', 'ES']}
          customLabels={{US: 'EN', FR: 'FR', ES: 'ES', DE: 'DE', IT: 'IT'}}
          selectedSize={14}
          /*showSelectedLabel={showSelectedLabel}
                selectedSize={selectedSize}
                showOptionLabel={showOptionLabel}
                optionsSize={optionsSize}
                placeholder={placeholder}
                searchable={searchable}
                searchPlaceholder={searchPlaceholder}
                alignOptionsToRight={alignOptionsToRight}
                fullWidth={fullWidth}
                disabled={disabled} */
        />
      </div>
      <div className={clsx('app-navbar-item', itemClass)}>
        <ThemeModeSwitcher toggleBtnClass={clsx('btn-active-light-primary btn-custom')} />
      </div>

      <div className={clsx('app-navbar-item', itemClass)}>
        <div
          className={clsx('cursor-pointer symbol', userAvatarClass)}
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='' />
        </div>
        <HeaderUserMenu />
      </div>

      {config.app?.header?.default?.menu?.display && (
        <div className='app-navbar-item d-lg-none ms-2 me-n3' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-color-primary w-35px h-35px'
            id='kt_app_header_menu_toggle'
          >
            <KTSVG path='/media/icons/duotune/text/txt001.svg' className={btnIconClass} />
          </div>
        </div>
      )}
    </div>
  )
}

export {Navbar}
