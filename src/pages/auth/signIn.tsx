import { AuthAPI } from '@/api/auth';
import { loginDto } from '@/api/dtos/auth';
import Loader from '@/components/Loader';
import { Button } from '@/components/ui/button';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import LoginValidationSchema from './validationSchemas/login'

const SignIn = () => {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validateOnMount: true,
    validateOnBlur: true,
    validationSchema: LoginValidationSchema,
    onSubmit: async () => {
    }
  });

  const submitHandler = async (values: loginDto) => {
    setLoading(true)
    try {
      const response = await AuthAPI.login(values)
      if (response.data?.token?.token) {
        localStorage.setItem('authToken', response.data?.token?.token)
        localStorage.setItem('user', JSON.stringify(response.data?.user))
        navigation('/')
        toast.success('Logged in successfully!')
      }
    }
    catch (e) {
      console.log(e.response.data?.error)
      toast.error(e.response.data?.error || e.response.data?.message)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <section className='grid grid-cols-2 gap-2 overflow-hidden h-[100dvh]'>
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

      <div className='m-auto '>
        <img src='artboard.svg' alt='Art' />
        <p className='mt-[3.688rem] text-[1.75rem] text-[#1A1A1A] font-bold'>
          Nice to see you again!
        </p>
        <div></div>
        <p className='mt-[1.938rem] text-xs font-normal'>Login</p>
        <input
          name='email'
          placeholder='Email'
          type='text'
          onChange={(e) => formik.handleChange(e)}
          autoComplete='off'
          value={formik.values.email}
          className='mt-2 bg-[#F2F2F2] 
py-2.5 pr-2 pl-2.5 w-[22.625rem] h-[2.932rem] rounded-[0.438rem] border-none text-sm'
        />
        <p className='mt-4 text-xs text-[#000]'>Password</p>
        <div className='relative mt-2'>
          <input
            type='password'
            className=' text-sm disabled:opacity-50 disabled:pointer-events-none bg-[#F2F2F2] 
    py-2.5 pr-2 pl-2.5 w-[22.625rem] h-[2.932rem] rounded-[0.438rem] border-none'
            placeholder='Enter password'
            onChange={(e) => formik.handleChange(e)}
            value={formik.values.password}
            name='password'
            autoComplete='off'
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
        <div className='text-end mt-[0.563rem]'>
          <p className='text-xs '>Forgot password?</p>
        </div>
        <div className='mt-8'>
          <Button
            onClick={() => submitHandler(formik.values)}
            size='xl'
            variant='login'
            style={{
              backgroundImage:
                'linear-gradient(180deg, #00ADB9 -305.94%, #084059 730.63%)',
            }}
          >
            Sign in
          </Button>
        </div>
        <div className='mt-7'>
          <hr className='w-[22.5rem] border-1 bg-[#E5E5E5]' />
        </div>

        <div className='mt-7 text-center'>
          <p className='text-xs text-[#1A1A1A]'>
            Dont have an account?{' '}
            <Link to='/signup' className='text-[#000] font-semibold text-xs'>
              {' '}
              Sign up now
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
  );
};

export default SignIn;
