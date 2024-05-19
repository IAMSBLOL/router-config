import { UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '@/router'

const UserMenu = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const items: MenuProps['items'] = [
    {
      key: 'LoginOut',
      danger: true,
      label: t('退出')
    }
  ]

  const onClick: MenuProps['onClick'] = (data) => {
    console.log(data)
    if (data.key === 'LoginOut') {
      localStorage.removeItem('user')
      navigate(PATHS.login)
    }
  }
  return (
    <div>
      <Dropdown menu={{ items, onClick }}>
        <Avatar
          size={24}
          icon={
            <UserOutlined />
          }
          style={{ backgroundColor: '#666' }}
        />
      </Dropdown>

    </div>
  )
}
export default UserMenu
