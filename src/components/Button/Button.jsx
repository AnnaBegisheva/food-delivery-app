import { forwardRef } from 'react'
import styles from './button.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Button = forwardRef(({ text, type, size, icon, buttonType }, ref) => {
  return (
    <button className={cx('btn', type, size)} type={buttonType} ref={ref}>
      {icon && <span className={cx('icon')}>{icon}</span>}
      <p className={cx('text')}>{text}</p>
    </button>
  )
})

export default Button
