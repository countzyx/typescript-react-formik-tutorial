/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { FieldHookConfig, useField } from 'formik';

type OwnProps = {
  errorClassName?: string;
  label: string;
};

type Props = OwnProps & FieldHookConfig<string>;

const SignupFormTextInput: React.FC<Props> = (props: Props) => {
  const [field, meta] = useField(props);
  const { errorClassName, id, label, name, placeholder } = props;
  return (
    <>
      <label htmlFor={id || name}>{label}</label>
      <input className='text-input' {...field} placeholder={placeholder} />
      {meta.touched && meta.error ? <div className={errorClassName}>{meta.error}</div> : null}
    </>
  );
};

SignupFormTextInput.defaultProps = { errorClassName: undefined };

export default SignupFormTextInput;
