/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
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
    <Form>
      <div>
        <label htmlFor='firstName'>First Name</label>
        <Field name='firstName' type='text' />
        <ErrorMessage name='firstName'>
          {(message) => <div className={styles.error}>{message}</div>}
        </ErrorMessage>
      </div>

      <div>
        <label htmlFor='lastName'>Last Name</label>
        <Field name='lastName' type='text' />
        <ErrorMessage name='lastName'>
          {(message) => <div className={styles.error}>{message}</div>}
        </ErrorMessage>
      </div>

      <div>
        <label htmlFor='email'>Email Address</label>
        <Field name='email' type='email' />
        <ErrorMessage name='email'>
          {(message) => <div className={styles.error}>{message}</div>}
        </ErrorMessage>
      </div>

      <button type='submit'>Submit</button>
    </Form>
  </Formik>
);

export default SignupForm;
