import React from 'react';
import { render, fireEvent, cleanup, wait } from 'react-testing-library';
import SignUpForm from './sign-up-form';

describe('SignUpForm', () => {
	afterEach(cleanup);

	it('handleSubmit', async () => {
		const handleSubmitMock = jest.fn();
		const fakeValues = {
			firstName: 'nate',
			lastName: 'brenner',
			email: 'nathanbrenner@gmail.com',
      instagram: 'barneyrubble',
		};
		const { getByLabelText, getByText } = render(<SignUpForm invite={handleSubmitMock} />);

		const firstName = getByLabelText('first name');
		firstName.value = fakeValues.firstName;
		fireEvent.change(firstName);

		const lastName = getByLabelText('last name');
		lastName.value = fakeValues.lastName;
		fireEvent.change(lastName);

		const email = getByLabelText('email');
		email.value = fakeValues.email;
		fireEvent.change(email);

		const instagram = getByLabelText('instagram');
		instagram.value = fakeValues.instagram;
		fireEvent.change(instagram);
		
		const rightClick = {button: 2}

		fireEvent.click(getByText('Submit'), rightClick)

		// expect(handleSubmitMock).toHaveBeenCalledTimes(1);
		// expect(handleSubmitMock).toHaveBeenCalledWith(fakeValues);
		// expect(handleSubmitMock).toHaveBeenCalledTimes(1);
		// expect(true).toBe(false);
		await wait(() => {
			expect(handleSubmitMock).toHaveBeenCalledTimes(1);
			expect(handleSubmitMock).toHaveBeenCalledWith(fakeValues);
		}, 0)
	})
})