/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { FieldHookConfig, useField } from 'formik';

type OwnProps = {
  errorClassName?: string;
};

type Props = OwnProps & FieldHookConfig<string>;

const kCheckboxType = 'checkbox';

const SignupFormCheckbox: React.FC<Props> = (props: Props) => {
  const [field, meta] = useField({ ...props, type: kCheckboxType });
  const { children, errorClassName } = props;
  return (
    <div>
      <label className='checkbox-input'>
        <input type={kCheckboxType} {...field} />
        {children}
      </label>
      {meta.touched && meta.error ? <div className={errorClassName}>{meta.error}</div> : null}
    </div>
  );
};

SignupFormCheckbox.defaultProps = { errorClassName: undefined };

export default SignupFormCheckbox;
