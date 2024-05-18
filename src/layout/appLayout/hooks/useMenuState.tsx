import { useImmerAtom } from 'jotai-immer'
import { atom } from 'jotai'

const menuStateAtom = atom({
  drawerMenuOpen: false
})

export const useMenuState = () => {
  const [menuState, setMenuState] = useImmerAtom(menuStateAtom)

  return {
    menuState,
    setMenuState
  }
}
