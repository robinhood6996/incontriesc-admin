import React, {useEffect, useRef, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

const PaginationSetQuery = ({
  limit,
  page,
  setPage,
  params,
  setParams,
  totalPage,
  dataLength,
}: {
  limit: number
  page: number
  totalPage: number
  dataLength: number
  setPage: Function
  params: object
  setParams: Function
}) => {
  const offsetRef: any = React.useRef<HTMLInputElement>(null)

  const changePagination = (type: string) => {
    // window.scrollTo(0, 0, {behavior: 'smooth'})
    if (type === 'plus') {
      let newPage = page + 1
      if (newPage === 2) {
        setPage(newPage)
        let qr = {...params, offset: limit}
        setParams(qr)
      } else {
        setPage(newPage)
        let qr = {...params, offset: (newPage - 1) * limit}
        setParams(qr)
      }
    } else if (type === 'minus') {
      if (page > 1) {
        if (page === 2) {
          setPage(1)
          let qr = {...params, offset: 0}
          setParams(qr)
        } else {
          let newPage = page - 1
          if (newPage === 1) {
            setPage(1)
            let qr = {...params, offset: 0}
            setParams(qr)
          } else if (newPage === 2) {
            setPage(2)
            let qr = {...params, offset: limit}
            setParams(qr)
          } else {
            setPage(newPage)
            let qr = {...params, offset: (newPage - 1) * limit}
            setParams(qr)
          }
        }
      }
    } else {
      let newPage = parseInt(offsetRef.current.value)
      if (newPage === 1) {
        setPage(1)
        let qr = {...params, offset: 0}
        setParams(qr)
      } else if (newPage === 2) {
        setPage(2)
        let qr = {...params, offset: limit}
        setParams(qr)
      } else {
        setPage(newPage)
        let qr = {...params, offset: (newPage - 1) * limit}
        setParams(qr)
      }
    }
  }
  return (
    <>
      <div className='d-flex justify-content-center'>
        <button
          className='btn btn-primary fw-bolder fs-5'
          disabled={page === 1}
          onClick={() => {
            changePagination('minus')
          }}
        >
          {'<'}
        </button>
        <div className='w-25'>
          <form
            action=''
            className='form fv-plugins-bootstrap5 fv-plugins-framework'
            onSubmit={() => {
              changePagination('input')
            }}
          >
            <input
              className='form-control w-25'
              type='number'
              min={1}
              ref={offsetRef}
              key={page}
              max={totalPage}
              style={{width: 70}}
              defaultValue={page}
            />
          </form>
        </div>
        <button
          className='btn btn-primary fw-bolder fs-5'
          disabled={dataLength < limit}
          onClick={() => {
            changePagination('plus')
          }}
        >
          {'>'}
        </button>
      </div>
    </>
  )
}

export default PaginationSetQuery
