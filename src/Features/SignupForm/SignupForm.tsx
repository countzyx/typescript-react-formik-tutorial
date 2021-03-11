import * as React from 'react';
import { FormikErrors, useFormik } from 'formik';

const kRequired = 'Required';

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

  const validate = (values: FormValues): FormikErrors<FormValues> => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.email?.trim()) {
      errors.email = kRequired;
    } else if (
      // eslint-disable-next-line no-control-regex
      !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9](?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        values.email,
      )
    ) {
      errors.email = 'Invalid email address';
    }

    const firstName = values.firstName?.trim();
    if (!firstName) {
      errors.firstName = kRequired;
    } else if (firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    const lastName = values.lastName?.trim();
    if (!lastName) {
      errors.lastName = kRequired;
    } else if (lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
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
