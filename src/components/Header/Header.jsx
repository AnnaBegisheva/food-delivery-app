import { useState } from 'react'
import styles from './header.module.scss'
import classNames from 'classnames/bind'
import Logo from '../Logo/Logo.jsx'
import Button from '../Button/Button.jsx'
import CartIcon from '../../assets/images/cart-icon.svg?react'
import AccountIcon from '../../assets/images/account-icon.svg?react'
import { RUB_SYMBOL } from '../../constants/index.js'

const cx = classNames.bind(styles)

function Header() {
  const [sum, setSum] = useState(0)
  const [time, setTime] = useState('00:24:19')

  return (
    <>
      <header className={cx('header')}>
        <div className={cx('container')}>
          <div className={cx('time-estimation')}>
            Среднее время доставки*:
            <span className={cx('delivery-time')}> {time}</span>
          </div>
          <div className={cx('working-hours')}>Время работы: с 11:00 до 23:00</div>
          <a className={cx('tel')} href='tel:+74950071113'>
            8 (495) 007 11 13
          </a>
        </div>
        <div className={cx('container')}>
          <Logo start={true} />
          <Button text={`${sum} ${RUB_SYMBOL}`} type={'primary'}>
            <CartIcon />
          </Button>
          <Button text={`Войти`} type={'primary'}>
            <AccountIcon />
          </Button>
        </div>
      </header>
    </>
  )
}

export default Header
