import { render } from '@redwoodjs/testing/web'

import DashboardOpenTickets from './DashboardOpenTickets'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DashboardOpenTickets', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardOpenTickets />)
    }).not.toThrow()
  })
})
