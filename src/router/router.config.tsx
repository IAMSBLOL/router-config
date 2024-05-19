import { createBrowserRouter, useNavigate } from 'react-router-dom'
import { Suspense, useEffect } from 'react'

import type React from 'react'
import ErrorPage from '@/views/errorPage'

import AppLayout from '@/layout/appLayout'

import { HomePage, NotFound, Login } from './routes'

import { PATHS } from './paths'

function Redirect ({ to }:{to:string}) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  }, [navigate, to])
  return null
}

const lazyComponent = (
  Node:React.LazyExoticComponent<React.FC<object>>
) => {
  return (
    <Suspense>
      <Node />
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Redirect to={PATHS.home}/>,
    errorElement: <ErrorPage />
  },
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: PATHS.home,
        element: lazyComponent(HomePage)
      }
    ]
  },
  {
    path: PATHS.login,
    element: lazyComponent(Login),
    errorElement: <ErrorPage />
  },
  {
    path: '*',
    element: lazyComponent(NotFound)
  }
])

export default router
