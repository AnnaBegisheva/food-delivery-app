import { useState } from 'react'
import styles from '../styles/modules/components/button.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Button({ text, isLarge, type, icon }) {
  return (
    <>
      <button
        className={cx('btn', {
          [`btn--${type}`]: true,
          'btn--large': isLarge,
        })}>
        {icon && <img src={icon} alt='Icon' className={cx('icon')} />}
        <span className={cx('text')}>{text}</span>
      </button>
    </>
  )
}

export default Button
