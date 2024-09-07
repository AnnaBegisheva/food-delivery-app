import styles from './orderInfo.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button/Button.jsx';
import OrderCard from '../OrderCard/OrderCard.jsx';
import { createCart } from '../../api/requests.js';

const cx = classNames.bind(styles);

const OrderInfo = ({ total, cartItems, closeSidebar }) => {
  return (
    <div className={cx('cart-container')}>
      <div className={cx('header')}>
        <h2 className={cx('title')}>{cartItems?.length > 0 ? 'Ваш заказ' : 'Ваша корзина пуста'}</h2>
      </div>
      <div className={cx('content')}>
        {cartItems?.map((item) => (
          <div
            key={item.id}
            className={cx('card')}
          >
            <OrderCard product={item} />
          </div>
        ))}
      </div>
      <div className={cx('footer')}>
        <strong className={cx('total')}>
          Итого: <span className={cx('sum')}>{total}</span>
        </strong>
        {cartItems?.length > 0 ? (
          <Button
            content="Оформить заказ"
            color="primary"
            size="small"
            onClick={createCart}
          />
        ) : (
          <Button
            content="Вернуться к покупкам"
            color="primary"
            size="small"
            onClick={closeSidebar}
          />
        )}
      </div>
    </div>
  );
};

export default OrderInfo;
