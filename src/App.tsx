import './App.css'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

function App () {
  const { t, i18n } = useTranslation()
  return (
    <Button className='bg-slate-500' onClick={() => i18n.changeLanguage('en')}>
      {t('welcome')}
    </Button>
  )
}

export default App
