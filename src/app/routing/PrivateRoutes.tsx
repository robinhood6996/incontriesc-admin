import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import Categories from '../modules/Categories/Categories'
import UserList from '../modules/Custom/Users/UserList'
import EscortList from '../modules/Custom/Escorts/EscortsList'
import CountryList from '../modules/Custom/Country/CountryList'
import CityList from '../modules/Custom/City/CityList'
import AdList from '../modules/Custom/ClassifiedAds/Adlist'
import EscortDetails from '../modules/Custom/Escorts/EscortDetails'
import TourList from '../modules/Custom/Tours/TourList'
import VerifieyRequestList from '../modules/Custom/verification/VerifieyRequestList'
import VerifiedIDList from '../modules/Custom/verification/VerifiedIDList'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />

        {/* Own Routes Here  */}
        <Route
          path='/categories'
          element={
            <SuspensedView>
              <Categories />
            </SuspensedView>
          }
        />
        <Route
          path='/users'
          element={
            <SuspensedView>
              <UserList className='card-xxl-stretch mb-5 mb-xl-8' />
            </SuspensedView>
          }
        />
        <Route
          path='/escorts'
          element={
            <SuspensedView>
              <EscortList className='card-xxl-stretch mb-5 mb-xl-8' />
            </SuspensedView>
          }
        />
        <Route
          path='/escorts/:escortId/details'
          element={
            <SuspensedView>
              <EscortDetails className='' />
            </SuspensedView>
          }
        />
        <Route
          path='/countries'
          element={
            <SuspensedView>
              <CountryList className='mb-5 mb-xl-8' />
            </SuspensedView>
          }
        />
        <Route
          path='/cities'
          element={
            <SuspensedView>
              <CityList className='mb-5 mb-xl-8' />
            </SuspensedView>
          }
        />
        <Route
          path='/ads'
          element={
            <SuspensedView>
              <AdList className='mb-5 mb-xl-8' />
            </SuspensedView>
          }
        />
        <Route
          path='/tours'
          element={
            <SuspensedView>
              <TourList className='mb-5 mb-xl-8' />
            </SuspensedView>
          }
        />
        <Route
          path='/verify-requested-ids'
          element={
            <SuspensedView>
              <VerifieyRequestList className='mb-5 mb-xl-8' />
            </SuspensedView>
          }
        />
        <Route
          path='/verified-ids'
          element={
            <SuspensedView>
              <VerifiedIDList className='mb-5 mb-xl-8' />
            </SuspensedView>
          }
        />
        {/* Own Routes Here  */}
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
