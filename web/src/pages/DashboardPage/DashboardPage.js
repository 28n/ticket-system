import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import H1 from 'src/components/common/Heading1'
import DashboardOpenTickets from 'src/components/DashboardOpenTickets/DashboardOpenTickets'

const DashboardPage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <H1>Dashboard</H1>
      <DashboardOpenTickets
        ticketsOpen={13}
        ticketsAssigned={5}
        ticketsEscalated={3}
      />
    </>
  )
}

export default DashboardPage
