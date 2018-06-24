import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Form from './Form';

describe('Form', () => {
	it('handleSubmit', () => {
		const handleSubmitMock = jest.fn();
		const value = 'do somehting later';
		const { getByLabelText, getByText } = render(<Form submit={handleSubmitMock} />);

		const todoInputNode = getByLabelText('todo:');
		todoInputNode.value = value;

		expect(todoInputNode.value).toBe(value);

		fireEvent.change(todoInputNode);
		
		const rightClick = {button: 2}

		fireEvent.click(getByText('Submit'), rightClick)

		expect(todoInputNode.value).toBe('');
		expect(handleSubmitMock).toHaveBeenCalledTimes(1);
		expect(handleSubmitMock).toHaveBeenCalledWith(value);
		
	})
})