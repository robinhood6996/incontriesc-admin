/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {useFormik} from 'formik'
import React, {useEffect, useState} from 'react'
import * as Yup from 'yup'
import {useUserRegistrationMutation} from '../../../../redux/features/api/auth/authApi'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
export function CreateUser() {
  //const [hasError, setHasError] = useState(false);
  // register api
  const navigate = useNavigate()
  const [registerUser, {data, isLoading, isSuccess, isError, error: apiError}] =
    useUserRegistrationMutation()
  const initialValues = {
    // firstname: '',
    // lastname: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    age: '',
    phone: '',
    acceptTerms: false,
    type: '',
  }
  const registrationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Name is required'),
    gender: Yup.string().required('Gender is required'),
    age: Yup.string().required('Age is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string()
      .email('Wrong email format')
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Email is required'),
    password: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Password is required'),
  })
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      if (!values.gender || values.gender === 'default') {
        toast.error('Please select gender', {hideProgressBar: true})
        return
      }
      if (!values.type || values.type === 'default') {
        toast.error('Please select type', {hideProgressBar: true})
        return
      }
      setLoading(true)

      const registerData = {
        name: values.name,
        email: values.email,
        password: values.password,
        gender: values.gender,
        age: values.age,
        phone: values.phone,
        type: values.type,
      }
      if (values.age !== 'default' && values.phone !== '') {
        registerUser(registerData)
      }
      if (!isLoading && isSuccess) {
        formik.resetForm({
          values: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            gender: '',
            age: '',
            phone: '',
          },
        })
        setLoading(false)
      } else {
        formik.resetForm({
          values: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            gender: '',
            age: '',
            phone: '',
          },
        })
        setLoading(false)
      }
      setLoading(false)
    },
  })
  useEffect(() => {
    if (!isLoading && !isError && isSuccess) {
      toast.success('Successfully created user', {
        hideProgressBar: true,
        toastId: 'registerSuccess',
      })
      navigate('/users')
    }
    if (!isLoading && isError && !isSuccess) {
      toast.error('Failed to create user', {
        hideProgressBar: true,
        toastId: 'registerError',
      })
    }
  }, [isError, isLoading, isSuccess])
  return (
    <div className='card'>
      {/* begin::Form */}
      <form className='form d-flex flex-center' onSubmit={formik.handleSubmit}>
        <div className='card-body mw-800px py-20'>
          {/* begin::Form row */}
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Name</label>
            <div className='col-lg-9'>
              <div className='spinner spinner-sm spinner-primary spinner-right'>
                <input
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  placeholder='Enter name'
                  required
                  {...formik.getFieldProps('name')}
                />
              </div>
              {formik.touched.name && formik.errors.name && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.name}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* end::Form row */}

          {/* begin::Form row */}
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Email Address</label>
            <div className='col-lg-9'>
              <div className='input-group input-group-lg input-group-solid'>
                <input
                  type='email'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Email'
                  required
                  {...formik.getFieldProps('email')}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.email}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Phone</label>
            <div className='col-lg-9'>
              <div className='input-group input-group-lg input-group-solid'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Phone Number'
                  required
                  {...formik.getFieldProps('phone')}
                />
              </div>
              {formik.touched.phone && formik.errors.phone && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.phone}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Age</label>
            <div className='col-lg-9'>
              <div className='input-group input-group-lg input-group-solid'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Age'
                  required
                  {...formik.getFieldProps('age')}
                />
              </div>
              {formik.touched.age && formik.errors.age && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.age}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* end::Form row */}

          {/* begin::Form row */}
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Gender</label>
            <div className='col-lg-9'>
              <select
                className='form-select form-select-lg form-select-solid'
                data-control='select2'
                data-placeholder='Select Language...'
                required
                {...formik.getFieldProps('gender')}
              >
                <option value='default' selected>
                  Select Gender
                </option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='trans'>Transsexual</option>
              </select>
            </div>
            {formik.touched.gender && formik.errors.gender && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.gender}</span>
                </div>
              </div>
            )}
          </div>
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>Password</label>
            <div className='col-lg-9'>
              <div className='input-group input-group-lg input-group-solid'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Enter Password'
                  required
                  {...formik.getFieldProps('password')}
                />
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.password}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='row mb-8'>
            <label className='col-lg-3 col-form-label'>User Type</label>
            <div className='col-lg-9'>
              <select
                className='form-select form-select-lg form-select-solid'
                data-control='select2'
                data-placeholder='Select Language...'
                required
                {...formik.getFieldProps('type')}
              >
                <option value='default' selected>
                  Select Type
                </option>
                <option value='escort'>Escort</option>
                <option value='default'>Default User</option>
                <option value='admin'>Admin</option>
              </select>
            </div>
            {formik.touched.type && formik.errors.type && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.type}</span>
                </div>
              </div>
            )}
          </div>
          {/* end::Form row */}

          <div className='separator separator-dashed my-10'></div>
          {/* end::Form row */}

          {/* begin::Form row */}

          {/* end::Form row */}

          {/* begin::Form row */}
          <div className='row'>
            <label className='col-lg-3 col-form-label'></label>
            <div className='col-lg-9'>
              <button
                type='submit'
                id='kt_sign_up_submit'
                className='btn btn-lg btn-primary w-50 mb-5'
                disabled={formik.isSubmitting || !formik.isValid}
              >
                {!loading && <span className='indicator-label'>Submit</span>}
                {loading && (
                  <span className='indicator-progress' style={{display: 'block'}}>
                    Please wait...{' '}
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                )}
              </button>
              <button
                type='button'
                className='btn btn-color-gray-600 btn-active-light-primary fw-bolder px-6 py-3'
              >
                Go back
              </button>
            </div>
          </div>
          {/* end::Form row */}
        </div>
      </form>
      {/* end::Form */}
    </div>
  )
}
