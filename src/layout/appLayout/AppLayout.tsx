import { Outlet, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Memu from './components/Memu'
import Content from './components/Content'
import DrawerMenu from './components/DrawerMenu'
import { useEffect } from 'react'
import { PATHS } from '@/router'

const AppLayout = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) {
      navigate(PATHS.login)
    }
  }, [navigate])
  return (
    <div className='flex h-full font-sans'>
      <Header />
      <Memu />
      <Content>
        <Outlet/>
      </Content>
      <DrawerMenu/>
    </div>
  )
}

export default AppLayout
