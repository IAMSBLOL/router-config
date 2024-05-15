import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/config/i18n/i18n.cofnig.ts'
import './index.css'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <App />
)
