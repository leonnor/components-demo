import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { FC } from 'react';

export type ThemeProps = 'primary' | 'secondary' | 'sucess' | 'info' | 'warning' | 'dark' | 'light' | 'danger'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

const Icon: FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props
  const classes = classNames('viking-icon', className, {
    [`icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}

export default Icon