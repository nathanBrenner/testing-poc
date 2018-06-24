import React from 'react';
import { Formik } from 'formik';

const InnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit} data-testid="formik-render-prop-form">
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

const FormikRenderForm = ({ submit }) => (
	<Formik
		initialValues={{
      todo: '',
    }}
		component={InnerForm}
		onSubmit={(values) => submit(values)}
	/>
)

export default FormikRenderForm;