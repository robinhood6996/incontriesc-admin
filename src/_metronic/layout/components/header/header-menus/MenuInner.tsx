import {useIntl} from 'react-intl'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' />
      <MenuItem title='Escorts' to='/active-escorts' />
      <MenuItem title='Tours' to='/tours' />
      <MenuItem title='Verification' to='/active-verification' />
    </>
  )
}
