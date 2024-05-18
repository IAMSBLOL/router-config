import { GithubFilled } from '@ant-design/icons'
import { Avatar, Dropdown } from 'antd'
import type { MenuProps } from 'antd'

const items: MenuProps['items'] = [
  {
    key: '4',
    danger: true,
    label: 'a danger item'
  }
]

const UserMenu = () => {
  return (
    <div>
      <Dropdown menu={{ items }}>
        <Avatar
          icon={
            <GithubFilled />
          }
          style={{ backgroundColor: '#666' }}
        />
      </Dropdown>

    </div>
  )
}
export default UserMenu
