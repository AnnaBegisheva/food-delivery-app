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

function Header({ isSticky }) {
  const [sum, setSum] = useState(0)

  return (
    <>
      <header className={cx('header', { sticky: isSticky })}>
        <div className={cx('container')}>
          <div className={cx('start')}>
            <Logo />
            {isSticky && <Categories />}
          </div>
          <Button text={`${sum} ${RUB_SYMBOL}`} type={'primary'} isSmall={true} icon={<CartIcon />} />
          <Button
            text={`Войти`}
            type={'primary'}
            isSmall={true}
            icon={<AccountIcon height={'20px'} width={'16px'} />}
          />
        </div>
      </header>
    </>
  )
}

export default Header
