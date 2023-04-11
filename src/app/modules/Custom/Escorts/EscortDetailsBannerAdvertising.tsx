import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_green.css'
import clsx from 'clsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAd} from '@fortawesome/free-solid-svg-icons'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import BannerAdvertisingCard from '../Custom Components/BannerAdvertisingCard'

export default function EscortDetailsBannerAdvertising() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [numberChecked, setNumberChecked] = useState(false)

  const handleDateChange = (date: Date[]) => {
    setSelectedDate(date[0] || null)
  }

  const appsAvailavbleTypes = [
    {label: 'Whatsapp', value: 'whatsapp'},
    {label: 'Telegram', value: 'telegram'},
    {label: 'Viber', value: 'viber'},
  ]
  const instructionsTypes = [
    {label: 'SMS and Calls', value: 's&c'},
    {label: 'SMS/Whatsapp/Viber only', value: 'SMS/Whatsapp/Viber only'},
    {label: 'No SMS', value: 'no'},
  ]

  const advertisementsData = [
    {
      imageUrl: toAbsoluteUrl('/media/avatars/300-1.jpg'),
      title: 'ESCORT PROFILE PAGE',
      description: 'TOP BANNER POSITION',
      position: 'profile-top',
    },
    {
      imageUrl: toAbsoluteUrl('/media/avatars/300-1.jpg'),
      title: 'RIGHT SIDEBAR ALL PAGES',
      description: 'RIGHT POSITION',
      position: 'sidebar-right',
    },
    {
      imageUrl: toAbsoluteUrl('/media/avatars/300-1.jpg'),
      title: 'LEFT SIDEBAR ALL PAGES',
      description: 'LEFT POSITION',
      position: 'sidebar-left',
    },
  ]

  return (
    <div>
      {/* <div className='my-5'>
        <h2 className='text-base mb-1'>
          {' '}
          <FontAwesomeIcon
            className='me-3 fs-1'
            icon={faAd}
            onClick={() => {
              setNumberChecked(!numberChecked)
            }}
          />
          ADVERTISING BANNERS
        </h2>
        <p className=''>
          Simply click on desired banner position, viw if it is available & then click the button on
          the available banners page.
        </p>
      </div> */}

      <div className='row border rounded'>
        {advertisementsData.map((ad) => {
          return <BannerAdvertisingCard data={ad} />
        })}
      </div>

      <div className='my-5'>
        <h4 className='text-base mb-1 required'>
          Banner will only appear on pages relatd to the selected locations
        </h4>
      </div>
    </div>
  )
}
