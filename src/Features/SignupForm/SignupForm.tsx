/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './SignupForm.module.css';

const kRequired = 'Required';

type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
};

const initialValues: FormValues = {
  email: '',
  firstName: '',
  lastName: '',
};

const validationSchema: Yup.SchemaOf<FormValues> = Yup.object({
  email: Yup.string().email('Invalid email address').required(kRequired),
  firstName: Yup.string().max(15, 'Must be 15 characters or less').required(kRequired),
  lastName: Yup.string().max(20, 'Must be 20 characters or less').required(kRequired),
});

const SignupForm: React.FC = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {(formik) => (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='firstName'>
          First Name
          <input id='firstName' type='text' {...formik.getFieldProps('firstName')} />
        </label>
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className={styles.error}>{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor='lastName'>
          Last Name
          <input id='lastName' type='text' {...formik.getFieldProps('lastName')} />
        </label>
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className={styles.error}>{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor='email'>
          Email Address
          <input id='email' type='email' {...formik.getFieldProps('email')} />
        </label>
        {formik.touched.email && formik.errors.email ? (
          <div className={styles.error}>{formik.errors.email}</div>
        ) : null}

        <button type='submit'>Submit</button>
      </form>
    )}
  </Formik>
);

export default SignupForm;
