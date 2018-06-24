// Higher Order Component
import React from 'react';
import { withFormik } from 'formik';

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit}>
		<label>
			todo:
			<input
				type="text"
				name="todo"
				onChange={handleChange}
				onBlur={handleBlur}
				value={values.todo}
			/>
		</label>
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  </form>
);

export default withFormik({
  mapPropsToValues: props => ({ todo: '' }),
  handleSubmit: (
    values,
    { props }
  ) => props.submit(values),
})(InnerForm);