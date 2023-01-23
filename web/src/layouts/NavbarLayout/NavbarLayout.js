import { FaHome, FaUser, FaSignOutAlt, FaTicketAlt } from 'react-icons/fa'

import { useAuth } from '@redwoodjs/auth'
import { NavLink, routes } from '@redwoodjs/router'

const NavbarLayout = ({ children }) => {
  const { currentUser } = useAuth()
  return (
    <>
      <nav className="absolute left-0 top-0 flex max-h-full min-h-screen w-16 flex-col items-center bg-gray-700 text-white lg:w-64">
        <Brand />
        <ul className="flex w-full flex-col items-center p-2 lg:gap-1">
          <NavButton to={routes.dashboard()} icon={<FaHome />}>
            Dashboard
          </NavButton>
          <NavButton to={routes.createTicket()} icon={<FaTicketAlt />}>
            Ticket erstellen
          </NavButton>
        </ul>
        <UserInfo />
      </nav>
      <main className="absolute top-0 left-16 flex max-h-full min-h-screen w-[calc(100vw-4rem)] flex-col items-start overflow-auto p-2 lg:left-64 lg:w-[calc(100vw-16rem)]">
        {children}
      </main>
    </>
  )
}

const NavButton = ({ to, children, icon }) => {
  return (
    <li className="flex w-full items-center">
      <NavLink
        className="flex w-full flex-row items-center justify-center rounded py-1 hover:bg-gray-600 lg:justify-start lg:gap-2 lg:p-2"
        to={to}
      >
        {icon}
        <p className="hidden lg:flex"> {children}</p>
      </NavLink>
    </li>
  )
}

const Brand = () => {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <h1 className="text-lg font-semibold">Ticket-System</h1>
    </div>
  )
}

const UserInfo = () => {
  const { currentUser, logOut } = useAuth()
  return (
    <div className="mt-auto flex w-full flex-col items-center gap-1 bg-gray-600">
      <p className="hidden text-lg lg:flex">{currentUser.email}</p>
      <p className="hidden text-sm lg:flex">{currentUser.roles}</p>
      <button
        className="flex w-full flex-row items-center justify-center gap-2 bg-gray-700 p-2 hover:bg-gray-600"
        onClick={logOut}
      >
        <FaSignOutAlt />
        <p className="hidden lg:flex">Logout</p>
      </button>
    </div>
  )
}

export default NavbarLayout
