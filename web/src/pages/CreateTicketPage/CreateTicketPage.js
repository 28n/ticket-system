import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CreateTicketPage = () => {
  return (
    <>
      <MetaTags title="CreateTicket" description="CreateTicket page" />

      <h1>CreateTicketPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/CreateTicketPage/CreateTicketPage.js</code>
      </p>
      <p>
        My default route is named <code>createTicket</code>, link to me with `
        <Link to={routes.createTicket()}>CreateTicket</Link>`
      </p>
    </>
  )
}

export default CreateTicketPage
