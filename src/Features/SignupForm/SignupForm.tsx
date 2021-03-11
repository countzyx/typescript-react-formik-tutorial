import * as React from 'react';
import { useFormik } from 'formik';

type FormValues = {
  email: string;
};

const SignupForm: React.FC = () => {
  const initialValues: FormValues = {
    email: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
