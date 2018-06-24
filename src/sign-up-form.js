// Higher Order Component
import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup'

// from http://blog.jstassen.com/2016/03/code-regex-for-instagram-username-and-hashtags

const instagramRegex = /^([A-Za-z0-9_@](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$/;
const nameRegex = /^([A-Za-z0-9'\- ](?:(?:[A-Za-z0-9'\- ]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9'\- ]))?)$/;

const signUpValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  firstName: Yup.string()
    .required('First name is required')
    .matches(nameRegex, 'Invalid symbol in first name'),
  lastName: Yup.string()
    .required('Last name is required')
    .matches(nameRegex, 'Invalid symbol in last name'),
  instagram: Yup.string()
    .required('Instagram handle is required')
    .matches(instagramRegex, 'Invalid Instagram handle'),
});

const InnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit} data-testid="sign-up-hoc-form">
		<div>
			<label>
				first name
				<input
					type="text"
					name="firstName"
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.firstName}
				/>
			</label>
		</div>
		<div>
			<label>
				last name
				<input
					type="text"
					name="lastName"
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.lastName}
				/>
			</label>
		</div>

		<div>
			<label>
				email
				<input
					type="text"
					name="email"
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.email}
				/>
			</label>
		</div>

		<div>
			<label>
			instagram
				<input
					type="text"
					name="instagram"
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.instagram}
				/>
			</label>
		</div>
		
    <button type="submit">
      Submit
    </button>
  </form>
);

export default withFormik({
	mapPropsToValues: props => ({
		firstName: '',
		lastName: '',
		email: '',
		instagram: '',
	}),
	validationSchema: signUpValidationSchema,
  handleSubmit: (
    values,
    { props }
  ) => props.invite(values),
})(InnerForm);