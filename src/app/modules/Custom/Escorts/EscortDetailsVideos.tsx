import React from 'react'
// import {useDropzone} from 'react-dropzone'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'

export default function EscortDetailsVideos() {
  // const {acceptedFiles, getRootProps, getInputProps} = useDropzone()

  // const files = acceptedFiles.map((file) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ))
  let images = [
    {
      url: toAbsoluteUrl('/media/avatars/300-1.jpg'),
      title: 'image title 1',
    },
    {
      url: toAbsoluteUrl('/media/avatars/300-1.jpg'),
      title: 'image title 2',
    },
    {
      url: toAbsoluteUrl('/media/avatars/300-1.jpg'),
      title: 'image title 2',
    },
    {
      url: toAbsoluteUrl('/media/avatars/300-1.jpg'),
      title: 'image title 2',
    },
    {
      url: toAbsoluteUrl('/media/avatars/300-1.jpg'),
      title: 'image title 2',
    },
    {
      url: toAbsoluteUrl('/media/avatars/300-1.jpg'),
      title: 'image title 2',
    },
  ]
  return (
    <div>
      {/* begin::Personal Details */}
      <div className='my-5'>
        <h4 className='text-base mb-1'>Videos</h4>
      </div>
      {/* end::Personal Details */}

      <div className='row border rounded p-4'>
        {/* About Me / on me start */}
        <div className='col-lg-12 col-12 my-3 w-100'>
          <form>
            <label htmlFor='message' className='form-label'>
              Upload Video
            </label>
            {/* <div {...getRootProps({className: 'dropzone  mb-5'})}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some videos here, or click to select files</p>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside> */}

            <div className='mt-4 d-flex justify-end'>
              <button
                type='submit'
                id='kt_sign_up_submit'
                className='btn btn-md btn-primary w-25 mb-5'
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {images.map((image, index) => {
          console.log('images', image)
          return (
            <div key={index} className='col-lg-4 col-md-6 col-12 my-3'>
              <video controls className='w-100 rounded'>
                <source
                  src='https://d14qrmtob88iyx.cloudfront.net/vids/encoded/alabama.mp4'
                  type='video/mp4'
                ></source>
              </video>
              <div className='d-flex justify-content-center mt-2'>
                <button type='button' className='btn btn-sm btn-danger w-25 mb-5'>
                  Delete
                </button>
              </div>
            </div>
          )
        })}
        {/* About Me / on me end */}
      </div>
    </div>
  )
}
