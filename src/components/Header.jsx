import { useState } from 'react'
import styles from '../styles/modules/layout/header.module.scss'
import classNames from 'classnames/bind'
import Logo from './Logo'
import Button from './Button'
import accountIcon from '../assets/images/account-icon.svg'
import cartIcon from '../assets/images/cart-icon.svg'

function Header() {
  const [sum, setSum] = useState(0)
  const [time, setTime] = useState('00:24:19')
  const cx = classNames.bind(styles)

  return (
    <>
      <header className={cx('header')}>
        <div className={cx('container')}>
          <div className={cx('time-estimation')}>
            Среднее время доставки*:
            <span> {time}</span>
          </div>
          <div className={cx('working-hours')}>Время работы: с 11:00 до 23:00</div>
          <a className={cx('tel')} href='tel:+74950071113'>
            8 (495) 007 11 13
          </a>

          <Logo header={true} />
          <Button text={`${sum} ₽`} type={'primary'} icon={cartIcon} />
          <Button text={`Войти`} type={'primary'} icon={accountIcon} />
        </div>
      </header>
    </>
  )
}

export default Header
