import styles from './header.module.scss';
import classNames from 'classnames/bind';
import Logo from '../Logo/Logo.jsx';
import CategoriesList from '../Categories/CategoriesList.jsx';
import Button from '../Button/Button.jsx';
import AccountIcon from '../../assets/images/account-icon.svg?react';
import CartSidebar from '../CartSidebar/CartSidebar.jsx';

const cx = classNames.bind(styles);

const Header = ({ isSticky, categories }) => {
  return (
    <header className={cx('header', { sticky: isSticky })}>
      <div className={cx('container')}>
        <div className={cx('start')}>
          <Logo />
          {isSticky && <CategoriesList categories={categories} />}
        </div>
        <CartSidebar />
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
