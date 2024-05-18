import { Button, Result } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const NoFoundPage: React.FC = () => {
  const { t } = useTranslation()

  const navigate = useNavigate()

  return (
    <div className='pt-14'>
      <Result
        status="404"
        title="404"
        subTitle={t('notFound.subTitle')}
        extra={
          <Button
            type="primary"
            onClick={() => navigate('/')}>
            {t('notFound.buttonText')}
          </Button>
        }

      />
    </div>
  )
}

export default NoFoundPage
