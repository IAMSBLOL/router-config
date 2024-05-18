import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <div className='container m-auto'>
      <h1 onClick={() => navigate('/1231231231')}
        className='h-[2000px]'>{t('welcome')}</h1>
    </div>
  )
}
export default HomePage
