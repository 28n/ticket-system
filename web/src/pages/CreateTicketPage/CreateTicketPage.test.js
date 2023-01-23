import { render } from '@redwoodjs/testing/web'

import CreateTicketPage from './CreateTicketPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CreateTicketPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateTicketPage />)
    }).not.toThrow()
  })
})
