import { useImmerAtom } from 'jotai-immer'
import { atom } from 'jotai'

const menuStateAtom = atom({
  drawerMenuOpen: false
})

export const useI18nStore = () => {
  const [i18nState, setI18nState] = useImmerAtom(menuStateAtom)

  return {
    i18nState,
    setI18nState
  }
}
