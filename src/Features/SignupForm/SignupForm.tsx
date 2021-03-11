import * as React from 'react';
import { useFormik } from 'formik';

type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
};

const SignupForm: React.FC = () => {
  const initialValues: FormValues = {
    email: '',
    firstName: '',
    lastName: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='firstName'>
        First Name
        <input
          id='firstName'
          name='firstName'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </label>
      <label htmlFor='lastName'>
        Last Name
        <input
          id='lastName'
          name='lastName'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </label>
      <label htmlFor='email'>
        Email Address
        <input
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </label>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default SignupForm;
