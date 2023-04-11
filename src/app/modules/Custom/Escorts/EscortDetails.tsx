import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import clsx from 'clsx'
import EscortDetailsPhysicalFeature from './EscortDetailsPhysicalFeature'
import EscortDetailsAdditionalInfo from './EscortDetailsAdditionalInfo'
import EscortDetailsLanguageInfo from './EscortDetailsLanguageInfo'
import EscortDetailsAboutMe from './EscortDetailsAboutMe'
import EscortDetailsBasicBiography from './EscortDetailsBasicBiography'
import EscortDetailsWorkingCities from './EscortDetailsWorkingCities'
import EscortDetailsServices from './EscortDetailsServices'
import EscortDetailsWorkingHours from './EscortDetailsWorkingHours'
import EscortDetailsRates from './EscortDetailsRates'
import EscortDetailsContact from './EscortDetailsContact'
import EscortDetailsPgotos from './EscortDetailsPgotos'
import EscortDetailsReviews from './EscortDetailsReviews'
import EscortDetailsVideos from './EscortDetailsVideos'
import EscortDetailsPrivateCityTour from './EscortDetailsPrivateCityTour'
import EscortDetailsBuyAdvertising from './EscortDetailsBuyAdvertising'
import EscortDetailsBannerAdvertising from './EscortDetailsBannerAdvertising'

type Props = {
  className: string
}

const EscortDetails: React.FC<Props> = ({className}) => {
  return (
    <>
      <div className='accordion' id='basic_biography_accordion'>
        {/* Basic Biography start */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='basic_biography_accordion_header'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#basic_biography_accordion_body'
              aria-expanded='false'
              aria-controls='basic_biography_accordion_body'
            >
              Basic Biography
            </button>
          </h2>
          <div
            id='basic_biography_accordion_body'
            className='accordion-collapse collapse container my-5'
            aria-labelledby='basic_biography_accordion_header'
            data-bs-parent='#basic_biography_accordion'
          >
            <>
              <div className='row '>
                <EscortDetailsBasicBiography />
                <EscortDetailsPhysicalFeature />
                <EscortDetailsAdditionalInfo />
                <EscortDetailsLanguageInfo />
                <div className='mt-4 d-flex justify-end'>
                  <button
                    type='submit'
                    id='kt_sign_up_submit'
                    className='btn btn-lg btn-primary w-25 mb-5'
                  >
                    Submit
                  </button>
                </div>
              </div>
            </>
          </div>
        </div>
        {/* Basic Biography end */}
        {/* About Me start */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='about_me_accordion'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#about_me_accordion_body'
              aria-expanded='false'
              aria-controls='about_me_accordion_body'
            >
              About Me
            </button>
          </h2>
          <div
            id='about_me_accordion_body'
            className='accordion-collapse collapse'
            aria-labelledby='about_me_accordion'
            data-bs-parent='#basic_biography_accordion'
          >
            <div className='accordion-body'>
              <EscortDetailsAboutMe />
            </div>
          </div>
        </div>
        {/* About Me end */}
        {/* Languages start */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='languages_accordion'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#languages_accordion_body'
              aria-expanded='false'
              aria-controls='languages_accordion_body'
            >
              Languages
            </button>
          </h2>
          <div
            id='languages_accordion_body'
            className='accordion-collapse collapse'
            aria-labelledby='languages_accordion'
            data-bs-parent='#basic_biography_accordion'
          >
            <div className='accordion-body'>
              <EscortDetailsLanguageInfo />
            </div>
          </div>
        </div>
        {/* Languages end */}
        {/* Working Cities start */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='working_cities_accordion'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#working_cities_body'
              aria-expanded='false'
              aria-controls='working_cities_body'
            >
              Working Cities
            </button>
          </h2>
          <div
            id='working_cities_body'
            className='accordion-collapse collapse'
            aria-labelledby='working_cities_accordion'
            data-bs-parent='#basic_biography_accordion'
          >
            <div className='accordion-body'>
              <EscortDetailsWorkingCities />
            </div>
          </div>
        </div>
        {/* Working Cities end */}
        {/* services start */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='services_accordion'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#services_body'
              aria-expanded='false'
              aria-controls='services_body'
            >
              Services
            </button>
          </h2>
          <div
            id='services_body'
            className='accordion-collapse collapse'
            aria-labelledby='services_accordion'
            data-bs-parent='#basic_biography_accordion'
          >
            <div className='accordion-body'>
              <EscortDetailsServices />
            </div>
          </div>
        </div>
        {/* services end */}
        {/* Working Hours start */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='working_hours_accordion'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#working_hours_body'
              aria-expanded='false'
              aria-controls='working_hours_body'
            >
              Working Hours
            </button>
          </h2>
          <div
            id='working_hours_body'
            className='accordion-collapse collapse'
            aria-labelledby='working_hours_accordion'
            data-bs-parent='#basic_biography_accordion'
          >
            <div className='accordion-body'>
              <EscortDetailsWorkingHours />
            </div>
          </div>
        </div>
        {/* Working Hours end */}
        {/* Rates start */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='rates_accordion'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#rates_body'
              aria-expanded='false'
              aria-controls='rates_body'
            >
              Rates
            </button>
          </h2>
          <div
            id='rates_body'
            className='accordion-collapse collapse'
            aria-labelledby='rates_accordion'
            data-bs-parent='#basic_biography_accordion'
          >
            <div className='accordion-body'>
              <EscortDetailsRates />
            </div>
          </div>
        </div>
        {/* Rates end */}
        {/* Contact Details start */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='contact_details_accordion'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#contact_details_body'
              aria-expanded='false'
              aria-controls='contact_details_body'
            >
              Contact Details
            </button>
          </h2>
          <div
            id='contact_details_body'
            className='accordion-collapse collapse'
            aria-labelledby='contact_details_accordion'
            data-bs-parent='#basic_biography_accordion'
          >
            <div className='accordion-body'>
              <EscortDetailsContact />
            </div>
          </div>
        </div>
        {/* Contact Details end */}
        {/* Photo Gallary start */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='photo_gallary_accordion'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#photo_gallary_body'
              aria-expanded='false'
              aria-controls='photo_gallary_body'
            >
              Photo Gallary
            </button>
          </h2>
          <div
            id='photo_gallary_body'
            className='accordion-collapse collapse'
            aria-labelledby='photo_gallary_accordion'
            data-bs-parent='#basic_biography_accordion'
          >
            <div className='accordion-body'>
              <EscortDetailsPgotos />
            </div>
          </div>
        </div>
        {/* Photo Gallary end */}
        {/* Reviews start */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='Reviews_accordion'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#Reviews_body'
              aria-expanded='false'
              aria-controls='Reviews_body'
            >
              Reviews
            </button>
          </h2>
          <div
            id='Reviews_body'
            className='accordion-collapse collapse'
            aria-labelledby='Reviews_accordion'
            data-bs-parent='#basic_biography_accordion'
          >
            <div className='accordion-body'>
              <EscortDetailsReviews />
            </div>
          </div>
        </div>
        {/* Reviews end */}
        {/* Videos start */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='Videos_accordion'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#Videos_body'
              aria-expanded='false'
              aria-controls='Videos_body'
            >
              Videos
            </button>
          </h2>
          <div
            id='Videos_body'
            className='accordion-collapse collapse'
            aria-labelledby='Videos_accordion'
            data-bs-parent='#basic_biography_accordion'
          >
            <div className='accordion-body'>
              <EscortDetailsVideos />
            </div>
          </div>
        </div>
        {/* Videos end */}
        {/* City Tour start */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='city_tour_accordion'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#city_tour_body'
              aria-expanded='false'
              aria-controls='city_tour_body'
            >
              City Tour
            </button>
          </h2>
          <div
            id='city_tour_body'
            className='accordion-collapse collapse'
            aria-labelledby='city_tour_accordion'
            data-bs-parent='#basic_biography_accordion'
          >
            <div className='accordion-body'>
              <EscortDetailsPrivateCityTour />
            </div>
          </div>
        </div>
        {/* City Tour end */}
        {/* Buy Advertising start */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='buy_advertising_accordion'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#buy_advertising_body'
              aria-expanded='false'
              aria-controls='buy_advertising_body'
            >
              Buy Advertising
            </button>
          </h2>
          <div
            id='buy_advertising_body'
            className='accordion-collapse collapse'
            aria-labelledby='buy_advertising_accordion'
            data-bs-parent='#basic_biography_accordion'
          >
            <div className='accordion-body'>
              <EscortDetailsBuyAdvertising />
            </div>
          </div>
        </div>
        {/* Buy Advertising end */}
        {/* Banner Advertising start */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='banner_advertising_accordion'>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#banner_advertising_body'
              aria-expanded='false'
              aria-controls='banner_advertising_body'
            >
              Banner Advertising
            </button>
          </h2>
          <div
            id='banner_advertising_body'
            className='accordion-collapse collapse'
            aria-labelledby='banner_advertising_accordion'
            data-bs-parent='#basic_biography_accordion'
          >
            <div className='accordion-body'>
              <EscortDetailsBannerAdvertising />
            </div>
          </div>
        </div>
        {/* Banner Advertising end */}
      </div>
    </>
  )
}

export default EscortDetails
