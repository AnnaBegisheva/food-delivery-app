import { useState } from 'react';
import styles from './header.module.scss';
import classNames from 'classnames/bind';
import Logo from '../Logo/Logo.jsx';
import CategoriesList from '../Categories/CategoriesList.jsx';
import Button from '../Button/Button.jsx';
import CartIcon from '../../assets/images/cart-icon.svg?react';
import AccountIcon from '../../assets/images/account-icon.svg?react';
import { RUB_SYMBOL } from '../../constants/index.js';

const cx = classNames.bind(styles);

const Header = ({ isSticky, categories }) => {
  const [sum, setSum] = useState(0);

  return (
    <header className={cx('header', { sticky: isSticky })}>
      <div className={cx('container')}>
        <div className={cx('start')}>
          <Logo />
          {isSticky && <CategoriesList categories={categories} />}
        </div>
        <Button
          content={
            <>
              <span className={cx('icon')}>
                <CartIcon />
              </span>
              {sum} {RUB_SYMBOL}
            </>
          }
          color="primary"
          size="small"
        />
        <Button
          content={
            <>
              <span className={cx('icon')}>
                <AccountIcon
                  height="20px"
                  width="16px"
                />
              </span>
              Войти
            </>
          }
          color="primary"
          size="small"
        />
      </div>
    </header>
  );
};

export default Header;
