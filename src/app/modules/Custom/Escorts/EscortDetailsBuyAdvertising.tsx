import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_green.css'
import clsx from 'clsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAd} from '@fortawesome/free-solid-svg-icons'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import BuyAdvertisementCard from '../Custom Components/BuyAdvertisementCard'
import GirlCard from '../Custom Components/GirlCard'

export default function EscortDetailsBuyAdvertising() {
  const [numberChecked, setNumberChecked] = useState(false)

  const advertisementsData = [
    {
      imageUrl: toAbsoluteUrl('/media/avatars/300-1.jpg'),
      title: 'DIAMOND',
      description:
        'Premium listing in the Index, Premium listing in the chosen city, Premium listing in the Tour section, Featured in the Girl of the Month contest, Detected by internal search engine',
      pricing: 'Premium €518 / 30 days | Lite 311€ / 15 days',
      badgeType: 'DIAMOND',
    },
    {
      imageUrl: toAbsoluteUrl('/media/avatars/300-1.jpg'),
      title: 'GOLD',
      description:
        'Premium Index Inclusion, Premium Inclusion in Chosen City, Inclusion in Girl of the Month Contest, Detected by Internal Search Engine',
      pricing: 'Premium €370 / 30 days | Lite 210€ / 15 days',
      badgeType: 'GOLD',
    },
    {
      imageUrl: toAbsoluteUrl('/media/avatars/300-1.jpg'),
      title: 'SILVER',
      description:
        'Regular listing in the Index, Premium listing in the chosen city, Regular listing in the Tour section (if chosen), Participation in the Girl of the Month contest, Detected by internal search engine',
      pricing: 'City €270 / 30 days | Lite 165€ / 15 days',
      badgeType: 'SILVER',
    },
    {
      imageUrl: toAbsoluteUrl('/media/avatars/300-1.jpg'),
      title: 'BRONZE',
      description:
        'Regular listing in the Index, Regular listing in the chosen city, Regular listing in the Tour section (if chosen), Participation in the Girl of the Month contest, Detected by internal search engine',
      badgeType: 'BRONZE',
    },
  ]

  return (
    <div>
      {/* <div className='my-5'>
        <h2 className='text-base mb-1'>
          {' '}
          <FontAwesomeIcon
            className='me-3 fs-1'
            // style={{fontSize: '38px'}}
            icon={faAd}
            onClick={() => {
              setNumberChecked(!numberChecked)
            }}
          />
          ADVERTISING PACKAGES
        </h2>
        <h3 className='mt-5'>Buy an advertising package</h3>
        <p className=''>
          Advertise now at escortforumit.xxx. Select the desired package and click on " BUY ".
        </p>
      </div> */}

      <div className='row border rounded'>
        <div className=''>
          {advertisementsData.map((ad) => {
            return <BuyAdvertisementCard data={ad} />
          })}
        </div>
      </div>

      <div className='my-5'>
        <h4 className='text-base mb-1 required'>
          The ad is placed according to the package purchased.
        </h4>
      </div>
      <div className='my-5'>
        <h2 className='text-base mb-1'>Diamond Escorts</h2>
      </div>

      <div className='row gy-2 border rounded'>
        <GirlCard vip={true} />
        <GirlCard brandNew={true} />
        <GirlCard vip={true} />
        <GirlCard vip={true} />
      </div>
      <div className='my-5'>
        <h2 className='text-base mb-1'>Gold Escorts</h2>
      </div>

      <div className='row gy-2 border rounded'>
        <GirlCard vip={true} />
        <GirlCard brandNew={true} />
        <GirlCard vip={true} />
        <GirlCard vip={true} />
      </div>
      <div className='my-5'>
        <h2 className='text-base mb-1'>Silver Escorts</h2>
      </div>

      <div className='row gy-2 border rounded'>
        <GirlCard vip={true} />
        <GirlCard brandNew={true} />
        <GirlCard vip={true} />
        <GirlCard vip={true} />
      </div>
      <div className='my-5'>
        <h2 className='text-base mb-1'>Bronze Escorts</h2>
      </div>

      <div className='row gy-2 border rounded'>
        <GirlCard vip={true} />
        <GirlCard brandNew={true} />
        <GirlCard vip={true} />
        <GirlCard vip={true} />
      </div>
    </div>
  )
}
