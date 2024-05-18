import {
  RouterProvider
} from 'react-router-dom'
import router from './router'
import { ConfigProvider } from 'antd'

function App () {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#60a5fa'
        }
      }}
    >
      <RouterProvider
        router={router}
        fallbackElement={<div>loading...</div>}
      />
    </ConfigProvider>

  )
}

export default App
