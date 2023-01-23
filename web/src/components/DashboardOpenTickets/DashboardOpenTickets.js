const DashboardOpenTickets = ({
  ticketsOpen,
  ticketsAssigned,
  ticketsEscalated,
}) => {
  return (
    <div className="flex w-full flex-row items-center border">
      <div className="grow border-r px-2 text-center">
        {ticketsOpen} {ticketsOpen === 1 ? 'Ticket' : 'Tickets'} offen
      </div>
      <div className="grow border-r px-2 text-center">
        {ticketsAssigned} {ticketsAssigned === 1 ? 'Ticket' : 'Tickets'} dir
        zugewiesen
      </div>
      <div className="grow px-2 text-center">
        {ticketsEscalated} {ticketsEscalated === 1 ? 'Ticket' : 'Tickets'}{' '}
        eskaliert
      </div>
    </div>
  )
}

export default DashboardOpenTickets
