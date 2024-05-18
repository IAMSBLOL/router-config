import { Menu } from 'antd'
import { useMenuList } from '../hooks'
import { useEffect, useRef, useState } from 'react'

const Memu = () => {
  const [collapsed, setCollapsed] = useState(false)
  const divIns = useRef<HTMLDivElement>(null)
  const items = useMenuList()

  useEffect(() => {
    const resizeFn = () => {
      if (window.document.body.clientWidth <= 1024) {
        setCollapsed(true)
      } else {
        setCollapsed(false)
      }
    }
    if (divIns.current) {
      resizeFn()
      window.addEventListener('resize', resizeFn)
    }

    return () => {
      window.removeEventListener('resize', resizeFn)
    }
  }, [])

  const onClick = (e:unknown) => {
    console.log('click', e)
  }

  return (
    <div className="xs:hidden md:block md:w-16 lg:w-60 flex-shrink-0 h-full">
      <div className="max-xs:hidden xs:hidden md:block md:w-16 lg:w-60 flex-shrink-0 fixed top-14 py-1 h-[calc(100vh-56px)] overflow-y-auto"
        ref={divIns}>
        <Menu
          onClick={onClick}
          style={{ width: '100%', height: '100%' }}
          mode="inline"
          items={items}
          inlineCollapsed={collapsed}
        />
      </div>
    </div>
  )
}

export default Memu
