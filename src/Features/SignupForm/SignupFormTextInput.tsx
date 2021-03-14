/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { FieldHookConfig, useField } from 'formik';

type OwnProps = {
  errorClassName?: string;
  label: string;
};

type Props = OwnProps & React.InputHTMLAttributes<HTMLInputElement> & FieldHookConfig<string>;

const SignupFormTextInput: React.FC<Props> = (props: Props) => {
  const [field, meta] = useField(props);
  const { errorClassName, id, label, name } = props;
  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = props;
  return (
    <>
      <label htmlFor={id || name}>{label}</label>
      <input className='text-input' {...inputProps} {...field} />
      {meta.touched && meta.error ? <div className={errorClassName}>{meta.error}</div> : null}
    </>
  );
};

SignupFormTextInput.defaultProps = { errorClassName: undefined };

export default SignupFormTextInput;
