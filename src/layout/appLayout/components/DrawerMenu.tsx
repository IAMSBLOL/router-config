import React from 'react'
import { Drawer, Menu } from 'antd'
import type { DrawerStyles } from 'antd/es/drawer/DrawerPanel'
import { useMenuList, useMenuState } from '../hooks'

const DrawerMenu: React.FC = () => {
  const { menuState, setMenuState } = useMenuState()
  const items = useMenuList()

  const onClose = () => {
    setMenuState((s) => {
      s.drawerMenuOpen = false
    })
  }

  const onClick = (e:unknown) => {
    console.log('click', e)
  }

  const drawerStyles: DrawerStyles = {

    header: {
      display: 'none'
    },
    body: {
      padding: 0
    },
    footer: {
      display: 'none'
    }
  }

  return (
    <Drawer
      width={240}
      placement="left"
      onClose={onClose}
      open={menuState.drawerMenuOpen}
      styles={drawerStyles}
    >
      <Menu
        onClick={onClick}
        style={{ width: '240px', height: '100%' }}
        mode="inline"
        items={items}
      />
    </Drawer>
  )
}

export default DrawerMenu
