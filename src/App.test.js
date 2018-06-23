import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { fireEvent, render } from 'react-testing-library';
import { renderWithRouter, fireEventUtil } from '../test/utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('routes', async () => {
  const { container, getByText, debug } = render(<App />);

  expect(window.location.href).not.toContain('about');

  fireEventUtil(getByText('About'))

  expect(window.location.href).toContain('about');

  fireEventUtil(getByText('Home'));

  expect(window.location.href).not.toContain('about');
})
