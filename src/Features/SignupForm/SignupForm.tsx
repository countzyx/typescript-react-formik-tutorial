/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './SignupForm.module.css';
import SignupFormCheckbox from './SignupFormCheckbox';
import SignupFormTextInput from './SignupFormTextInput';
import SignupFormSelect from './SignupFormSelect';

const kRequired = 'Required';

type FormValues = {
  acceptedTerms: boolean;
  email: string;
  firstName: string;
  jobType: string;
  lastName: string;
};

const initialValues: FormValues = {
  acceptedTerms: false,
  email: '',
  firstName: '',
  jobType: '',
  lastName: '',
};

const validationSchema: Yup.SchemaOf<FormValues> = Yup.object({
  acceptedTerms: Yup.boolean()
    .required(kRequired)
    .oneOf([true], 'You must accept the terms and conditions'),
  email: Yup.string().email('Invalid email address').required(kRequired),
  firstName: Yup.string().max(15, 'Must be 15 characters or less').required(kRequired),
  jobType: Yup.string()
    .oneOf(['designer', 'development', 'product', 'other'], 'Invalid Job Type')
    .required(kRequired),
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
        <SignupFormTextInput
          errorClassName={styles.error}
          id='firstName'
          label='First Name'
          name='firstName'
          placeholder='Jane'
          type='text'
        />
      </div>

      <div>
        <SignupFormTextInput
          errorClassName={styles.error}
          id='lastName'
          label='Last Name'
          name='lastName'
          placeholder='Doe'
          type='text'
        />
      </div>

      <div>
        <SignupFormTextInput
          errorClassName={styles.error}
          id='email'
          label='Email'
          name='email'
          placeholder=''
          type='text'
        />
      </div>

      <SignupFormSelect errorClassName={styles.error} label='Job Type' name='jobType'>
        <option value=''>Select a job type</option>
        <option value='designer'>Designer</option>
        <option value='development'>Developer</option>
        <option value='product'>Product Manager</option>
        <option value='other'>Other</option>
      </SignupFormSelect>

      <SignupFormCheckbox errorClassName={styles.error} name='acceptedTerms'>
        I accept the terms and conditions
      </SignupFormCheckbox>

      <button type='submit'>Submit</button>
    </Form>
  </Formik>
);

export default SignupForm;
