import { Button, Result } from 'antd'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const test = (
  <div>
    <span>
      1
    </span>
  </div>
)
console.log(test)

const NoFoundPage = () => {
  const { t } = useTranslation()

  const navigate = useNavigate()

  useEffect(() => {
    console.log(t)
  }, [t])

  return (
    <div
      className='pt-14'
    >
      <Result
        status="404"
        subTitle={
          t('notFound.subTitle')
        }
        title={test}

        extra={
          <Button
            type="primary"
            onClick={() => navigate('/')}
          >
            {t('notFound.buttonText')}
          </Button>
        }
      />
    </div>
  )
}

export default NoFoundPage
