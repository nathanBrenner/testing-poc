import React from 'react'
import {Router} from 'react-router-dom'
import {render, wait, fireEvent} from 'react-testing-library'
import {createMemoryHistory} from 'history'

function renderWithRouter(ui, {route = '/', ...renderOptions} = {}) {
  const history = createMemoryHistory({initialEntries: [route]})
  const utils = render(<Router history={history}>{ui}</Router>, renderOptions)
  const finishLoading = () =>
    wait(() => expect(utils.queryByText('Loading')).toBeNull())
  return {
    ...utils,
    finishLoading,
    history,
  }
}

function fireEventUtil(node) {
	fireEvent(
		node,
		new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
		}),
	)
}

export {
  Simulate,
  wait,
  render,
  cleanup,
  renderIntoDocument,
  fireEvent,
} from 'react-testing-library'
export {renderWithRouter, fireEventUtil}
