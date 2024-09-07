import { useState } from 'react';
import styles from './cartSidebar.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../Modal/Modal';
import Button from '../Button/Button.jsx';
import OrderInfo from '../OrderInfo/OrderInfo.jsx';
import CartIcon from '../../assets/images/cart-icon.svg?react';
import { RUB_SYMBOL } from '../../constants/index.js';

const cx = classNames.bind(styles);

const CartSidebar = () => {
  const [sum, setSum] = useState(0);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <>
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
        onClick={() => {
          setIsSidebarVisible(true);
        }}
      />
      {isSidebarVisible && (
        <Sidebar
          isVisible={isSidebarVisible}
          onClose={() => setIsSidebarVisible(false)}
          type="sidebar"
          width="narrow"
        >
          <OrderInfo
            total={`${sum} ${RUB_SYMBOL}`}
            closeSidebar={() => setIsSidebarVisible(false)}
          />
        </Sidebar>
      )}
    </>
  );
};

export default CartSidebar;
