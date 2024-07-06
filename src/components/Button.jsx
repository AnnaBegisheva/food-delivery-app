import { useState } from 'react'
import styles from '../styles/modules/components/button.module.scss'
import classNames from 'classnames/bind'

function Button({ text, isLarge, type, icon }) {
  const cx = classNames.bind(styles)

  return (
    <>
      <button
        className={cx('btn', {
          [`btn--${type}`]: true,
          'btn--large': isLarge,
        })}>
        {icon && <img src={icon} alt='Icon' className={cx('btn__icon')} />}
        <span className={cx('btn__text')}>{text}</span>
      </button>
    </>
  )
}

export default Button
