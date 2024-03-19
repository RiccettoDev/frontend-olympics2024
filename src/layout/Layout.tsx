import { Outlet } from 'react-router-dom'

import Header from './Header'
import Header2 from './Header2'

export default function Layout() {
  return (
    <>
      <Header/>
      <div>
        <Outlet />
      </div>
    </>
  )
}
