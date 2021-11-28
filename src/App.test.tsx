import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'
import userEvent from '@testing-library/user-event'

describe('app.txs', () => {
  test('renders app', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(getByText(/title/i)).toBeInTheDocument()
  })

  test('should show spinner and error after call fails', () => {
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Async error'))

    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    const button = getByText('get launches')
    userEvent.click(button)
    const spinner = getByText('spinner')
    expect(spinner).toBeInTheDocument()

    // await waitForElementToBeRemoved(spinner) TODO: find this method's import location :D
  })
})
