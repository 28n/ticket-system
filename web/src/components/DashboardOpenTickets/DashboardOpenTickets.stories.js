// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <DashboardOpenTickets {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import DashboardOpenTickets from './DashboardOpenTickets'

export const generated = () => {
  return <DashboardOpenTickets />
}

export default {
  title: 'Components/DashboardOpenTickets',
  component: DashboardOpenTickets,
}
