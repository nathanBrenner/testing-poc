import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import MyFormikForm from './MyFormikForm';

describe('FormikRenderProp', () => {
	it('handleSubmit', () => {
		const handleSubmitMock = jest.fn();
		const value = 'do somehting later';
		const { getByLabelText, getByText } = render(<MyFormikForm submit={handleSubmitMock} />);

		const todoInputNode = getByLabelText('todo:');
		todoInputNode.value = value;

		expect(todoInputNode.value).toBe(value);

		fireEvent.change(todoInputNode);
		
		const rightClick = {button: 2}

		fireEvent.click(getByText('Submit'), rightClick)

		expect(handleSubmitMock).toHaveBeenCalledTimes(1);
		expect(handleSubmitMock).toHaveBeenCalledWith({todo: value});
		
	})
})