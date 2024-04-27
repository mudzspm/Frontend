import * as yup from 'yup';

const schema = yup.object().shape({
  fullname: yup.string().required('Full name is required'),
  ic_number: yup.string().min(1, 'IC number must have at least one character'),
  phone_no: yup.string().required('Phone number is required'),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
  email: yup.string().email('Invalid email address').required('Email is required'),
});

export default schema