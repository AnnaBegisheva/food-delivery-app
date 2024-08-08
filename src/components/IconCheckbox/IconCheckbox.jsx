import styles from './iconCheckbox.module.scss';
import classNames from 'classnames/bind';
import IconHandler from '../../handlers/icon_handler';
import { RUB_SYMBOL } from '../../constants/index.js';
import CrossIcon from '../../assets/images/cross.svg?react';
import TickIcon from '../../assets/images/tick.svg?react';

const cx = classNames.bind(styles);

const IconCheckbox = ({ item, isChecked, handleChange, type }) => {
  return (
    <div className={cx('item')}>
      <input
        className={cx('checkbox', type)}
        type="checkbox"
        name={item.code}
        value={item.name}
        id={item.id}
        checked={isChecked}
        onChange={handleChange}
      />
      <label
        htmlFor={item.id}
        className={cx('icon-box', item.code)}
      >
        <div className={cx('check')}>
          {type === 'include' && <TickIcon />}
          {type === 'exclude' && <CrossIcon />}
        </div>
        <IconHandler
          code={item.code}
          className={cx('icon')}
        />
      </label>
      <div className={cx('item-name')}>{item.name}</div>
      {item.price && <div className={cx('item-price')}>{`${item.price} ${RUB_SYMBOL}`}</div>}
    </div>
  );
};

export default IconCheckbox;
