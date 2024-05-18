import { Button, Dropdown } from 'antd'

import Language from './icons/language.svg?react'
import type { MenuProps } from 'antd'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const I18nButton = () => {
  const { t, i18n } = useTranslation()
  const [text, setI18nText] = useState('zh')

  const items: MenuProps['items'] = [
    {
      key: 'ch',
      label: t('ch')
    },
    {
      key: 'en',
      label: t('en')
    }
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onClick = (data:any) => {
    console.log(data)
    i18n.changeLanguage(data.key)
    setI18nText(t(data.key))
  }
  return (

    <Dropdown menu={{ items, onClick }}>
      <Button
        icon={<Language width={24} />}
        type="text"
        className='flex items-center'
      >
        {text}
      </Button>
    </Dropdown>
  )
}
export default I18nButton
