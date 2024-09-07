import { useState } from 'react';
import styles from './counter.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className={cx('counter')}>
      <div
        className={cx('counter-box')}
        onClick={decrement}
      >
        -
      </div>
      <div className={cx('counter-box')}>{count}</div>
      <div
        className={cx('counter-box')}
        onClick={increment}
      >
        +
      </div>
    </div>
  );
};

export default Counter;
