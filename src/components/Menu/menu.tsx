import classNames from 'classnames';
import { createContext, CSSProperties, FC, ReactNode, useState } from 'react';

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: number) => void

export interface MenuProps {
  defaultIndex?: number
  className?: string
  mode?: MenuMode
  style?: CSSProperties
  onSelect?: SelectCallback
  children?: ReactNode
}

interface IMenuContext {
  index: number
  onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props
  const [currentActive, setCurrentActive] = useState(defaultIndex)
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical'
  })

  const handleClick = (index: number) => {
    setCurrentActive(index)
    if(onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  }

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'vertical'
}

export default Menu