import { useState } from 'react'
import styles from './header.module.scss'
import classNames from 'classnames/bind'
import Logo from '../Logo/Logo.jsx'
import Categories from '../Categories/Categories.jsx'
import Button from '../Button/Button.jsx'
import CartIcon from '../../assets/images/cart-icon.svg?react'
import AccountIcon from '../../assets/images/account-icon.svg?react'
import { RUB_SYMBOL } from '../../constants/index.js'

const cx = classNames.bind(styles)

function Header() {
  const [sum, setSum] = useState(0)
  const [isFixed, setIsFixed] = useState(false)

  window.addEventListener('scroll', function () {
    const categoriesOffset = document.getElementById('categories').offsetTop
    window.scrollY > categoriesOffset ? setIsFixed(true) : setIsFixed(false)
  })

  return (
    <>
      <header className={cx('header')}>
        <div className={cx('container')}>
          <div className={cx('start')}>
            <Logo />
            {isFixed && <Categories />}
          </div>
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
