import styles from './orderCard.module.scss';
import classNames from 'classnames/bind';
import Counter from '../Counter/Counter.jsx';
import { RUB_SYMBOL } from '../../constants/index.js';

const cx = classNames.bind(styles);

const OrderCard = ({ product }) => {
  return (
    <div className={cx('card-container')}>
      <div className={cx('image-box')}>
        <img
          src={product.image.url}
          alt={product.name}
          className={cx('image')}
        />
      </div>
      <div className={cx('content-box')}>
        <div className={cx('description')}>
          <h3 className={cx('title')}>{product.name}</h3>
          <div className={cx('options')}>Традиционное тесто, 23 см</div>
        </div>
        <div className={cx('total')}>
          <Counter />
          <div className={cx('price')}>
            {product.price} {RUB_SYMBOL}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
