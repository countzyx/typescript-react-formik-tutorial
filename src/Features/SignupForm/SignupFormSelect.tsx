/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { FieldHookConfig, useField } from 'formik';

type OwnProps = {
  errorClassName?: string;
  label: string;
};

type Props = OwnProps & React.SelectHTMLAttributes<HTMLSelectElement> & FieldHookConfig<string>;

const SignupFormSelect: React.FC<Props> = (props: Props) => {
  const [field, meta] = useField(props);
  const { children, errorClassName, id, label, name } = props;
  const selectProps: React.SelectHTMLAttributes<HTMLSelectElement> = props;

  return (
    <>
      <label htmlFor={id || name}>{label}</label>
      <select {...selectProps} {...field}>
        {children}
      </select>
      {meta.touched && meta.error ? <div className={errorClassName}>{meta.error}</div> : null}
    </>
  );
};

SignupFormSelect.defaultProps = { errorClassName: undefined };

export default SignupFormSelect;
