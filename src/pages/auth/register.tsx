import { AuthAPI } from '@/api/auth';
import { signupDto } from '@/api/dtos/auth';
import { Button } from '@/components/ui/button';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import RegisterValidationSchema from './validationSchemas/register'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '@/components/Loader';

const Register = () => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      phone_no: '',
      ic_number: '',
      password: ''
    },
    validationSchema: RegisterValidationSchema,
    validateOnMount: true,
    validateOnBlur: true,
    onSubmit: async () => {
    }
  });

  const submitHandler = async (values: signupDto) => {
    setLoading(true)
    try {
      const response = await AuthAPI.signup(values)
      if (response.data) {
        const data = response.data;
        console.log(response.token, 'token')
        localStorage.setItem('user', JSON.stringify(data))
        localStorage.setItem('authToken', response.token)
        toast.success('User signed up successfully!')
        navigation('/profile')
      }
    }
    catch (e) {
      toast.error(e?.response?.data?.error)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className='grid grid-cols-2 gap-2 h-[100dvh] overflow-hidden'>
        {/* image section ------------------------------ */}

        <div
          className='relative'
          style={{
            backgroundImage:
              'linear-gradient(180.05deg, rgba(0, 173, 185, 0.64) 42.88%, rgba(8, 64, 89, 0.64) 99.96%)',
          }}
        >
          <img
            src='qurban--.png'
            alt='Qurban'
            className='mix-blend-overlay max-w-full'
          />
          <div className='absolute top-[40%] left-[30%] '>
            <h3 className='font-bold text-5xl text-[#FFFFFF] leading-[3.6rem]'>
              QURBAN & AQIQAH
            </h3>
            <h1 className='font-bold text-[5.625rem] text-[#084059] leading-[6.733rem]'>
              Now Easier
            </h1>
          </div>
        </div>

        {/* Form section ------------------------- */}

        <div className='m-auto w-[34.75rem]'>
          <img src='artboard.svg' alt='Art' />
          <Link
            to='/signup'
            className='mt-[3.688rem] text-[1.75rem] text-[#1A1A1A] font-bold'
          >
            Create Account
          </Link>

          <p className='mt-[1.938rem] text-xs font-normal'>Full Name</p>
          <div className='relative mt-2'>
            <input
              type='text'
              className=' text-sm disabled:opacity-50 disabled:pointer-events-none bg-[#F2F2F2] 
    py-2.5 pr-2 pl-2.5 w-full h-[2.932rem] rounded-[0.438rem] border-none'
              placeholder='Katijah Binti Mohd Amin'
              value={formik.values.fullname}
              onChange={(e) => formik.handleChange(e)}
              name='fullname'
              onBlur={() => formik.setTouched({ fullname: true, ...formik.touched })}
            />
            <button
              type='button'
              data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }'
              className='absolute top-0 end-0 p-3.5 rounded-e-md'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='12'
                viewBox='0 0 16 12'
                fill='none'
                className='mt-1'
              >
                <path
                  d='M1 7L5 11L15 1'
                  stroke='#09CB3F'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </button>
          </div>

          {formik.errors['fullname'] && formik.touched.fullname && <div className='mt-2 mb-2 text-[#ED4337] text-xs'>{formik.errors.fullname}</div>}

          <div className='flex gap-5'>
            <div className='w-3/5'>
              <label className='block text-xs font-normal mt-6'>Email</label>
              <div className='relative mt-2'>
                <input
                  type='email'
                  className=' text-sm bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 w-full h-[2.932rem] rounded-[0.438rem] border-none'
                  placeholder='Katijah Binti Mohd Amin'
                  value={formik.values.email}
                  onChange={(e) => formik.handleChange(e)}
                  onBlur={() => formik.setTouched({ email: true, ...formik.touched })}
                  name='email'
                />
                <button
                  type='button'
                  data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }'
                  className='absolute top-0 end-0 p-3.5 rounded-e-md'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='12'
                    viewBox='0 0 16 12'
                    fill='none'
                    className='mt-1'
                  >
                    <path
                      d='M1 7L5 11L15 1'
                      stroke='#09CB3F'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </button>
              </div>
              {formik.errors['email'] && formik.touched.email && <div className='mt-2 mb-2 text-[#ED4337] text-xs'>{formik.errors.email}</div>}
            </div>
            <div className='w-2/5'>
              <label className='block text-xs font-normal mt-6'>
                IC Number
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  className=' text-sm  bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 w-full h-[2.932rem] rounded-[0.438rem] border-none'
                  placeholder='12345678901'
                  value={formik.values.ic_number}
                  onChange={(e) => formik.handleChange(e)}
                  onBlur={() => formik.setTouched({ ic_number: true, ...formik.touched })}
                  name='ic_number'
                />
                {formik.errors['ic_number'] && formik.touched.ic_number && <div className='mt-2 mb-2 text-[#ED4337] text-xs'>{formik.errors.ic_number}</div>}
              </div>
            </div>
          </div>

          <div className='flex gap-5'>
            <div className='w-2/5'>
              <label className='block text-xs font-normal mt-6'>
                Phone Number
              </label>
              <div className='relative mt-2'>
                <input
                  type='text'
                  className=' text-sm bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 w-full h-[2.932rem] rounded-[0.438rem] border-none'
                  placeholder='0193456789'
                  value={formik.values.phone_no}
                  onChange={(e) => formik.handleChange(e)}
                  name='phone_no'
                />
                <button
                  type='button'
                  data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }'
                  className='absolute top-0 end-0 p-3.5 rounded-e-md'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='12'
                    viewBox='0 0 16 12'
                    fill='none'
                    className='mt-1'
                  >
                    <path
                      d='M1 7L5 11L15 1'
                      stroke='#09CB3F'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className='w-3/5'>
              <label className='block text-xs font-normal mt-6'>Password</label>
              <div className='relative mt-2'>
                <input
                  id='hs-toggle-password'
                  type='password'
                  className=' text-sm disabled:opacity-50 disabled:pointer-events-none bg-[#F2F2F2] 
    py-2.5 pr-2 pl-2.5 w-full h-[2.932rem] rounded-[0.438rem] border-none'
                  placeholder='Enter password'
                  value={formik.values.password}
                  onChange={(e) => formik.handleChange(e)}
                  name='password'
                />
                <button
                  type='button'
                  data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }'
                  className='absolute top-0 end-0 p-3.5 rounded-e-md'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='12'
                    viewBox='0 0 16 12'
                    fill='none'
                    className='mt-1'
                  >
                    <path
                      d='M8 0.90918C4.36364 0.90918 1.25818 3.171 0 6.36372C1.25818 9.55645 4.36364 11.8183 8 11.8183C11.6364 11.8183 14.7418 9.55645 16 6.36372C14.7418 3.171 11.6364 0.90918 8 0.90918ZM8 10.0001C5.99273 10.0001 4.36364 8.371 4.36364 6.36372C4.36364 4.35645 5.99273 2.72736 8 2.72736C10.0073 2.72736 11.6364 4.35645 11.6364 6.36372C11.6364 8.371 10.0073 10.0001 8 10.0001ZM8 4.18191C6.79273 4.18191 5.81818 5.15645 5.81818 6.36372C5.81818 7.571 6.79273 8.54554 8 8.54554C9.20727 8.54554 10.1818 7.571 10.1818 6.36372C10.1818 5.15645 9.20727 4.18191 8 4.18191Z'
                      fill='#4D4D4D'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className='mt-[3.619rem]'>
            <Button
              size='xxl'
              variant='register'
              style={{
                backgroundImage:
                  'linear-gradient(180deg, #00ADB9 -305.94%, #084059 730.63%)',
              }}
              onClick={() => submitHandler(formik.values)}
              disabled={Object.keys(formik.errors).length > 0}
            >
              Create Account
            </Button>
          </div>
          <div className='mt-7 text-center items-center justify-center flex'>
            <hr className='w-[22.5REM] border-1  bg-[#E5E5E5]' />
          </div>

          <div className='mt-7 text-center'>
            <p className='text-xs text-[#1A1A1A]'>
              Already have an account?{' '}
              <Link to='/signin' className='text-[#000] font-semibold text-xs'>
                {' '}
                Sign in now
              </Link>
            </p>
            <p className='mt-[11.605rem] text-xs text-[#666]'>
              © DigitalQurban2024
            </p>
          </div>
        </div>
        {loading && <Loader loading={loading} />}
        <ToastContainer />
      </section>
    </>
  );
};

export default Register;
