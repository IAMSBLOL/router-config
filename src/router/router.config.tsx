import { createBrowserRouter, useNavigate } from 'react-router-dom'
import { Suspense, useEffect } from 'react'

import type React from 'react'
import ErrorPage from '@/views/errorPage'

import AppLayout from '@/layout/appLayout'

import { HomePage, NotFound } from './routes'

function Redirect ({ to }:{to:string}) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  }, [navigate, to])
  // eslint-disable-next-line unicorn/no-null
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
    element: <Redirect to='/app/home'/>,
    errorElement: <ErrorPage />
  },
  {
    path: '/app',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: lazyComponent(HomePage)
      }
    ]
  },
  {
    path: '*',
    element: lazyComponent(NotFound)
  }
])

export default router
