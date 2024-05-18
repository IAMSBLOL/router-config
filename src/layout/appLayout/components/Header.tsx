import { Button, Image } from 'antd'
import { UnorderedListOutlined } from '@ant-design/icons'
import { useMenuState } from '../hooks'
import I18nButton from './I18nButton'
import UserMenu from './UserMenu'

const Header = () => {
  const { setMenuState } = useMenuState()

  const handleClick = () => {
    setMenuState((s) => {
      s.drawerMenuOpen = true
    })
  }
  return (
    <div className="h-14 bg-opacity-80 bg-white backdrop-blur fixed w-full shadow">
      <div className="relative w-full h-full flex items-center px-4 justify-between">
        <div className='flex items-center gap-x-3'>
          <Button className='h-[unset] leading-[0] max-xs:block xs:block md:hidden'
            onClick={handleClick}>
            <UnorderedListOutlined />
          </Button>
          <Image
            width={30}
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
          <div className='text-sm font-semibold text-blue-500'>
            Router Config
          </div>
        </div>
        <div className='flex gap-x-3 items-center'>
          <I18nButton />
          <UserMenu />
        </div>
      </div>
    </div>
  )
}

export default Header
