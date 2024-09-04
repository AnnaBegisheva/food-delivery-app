import styles from './counter.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Counter = ({ count }) => {
  if (!count) {
    return '';
  }
  return <div className={cx('counter')}>{count}</div>;
};

export default Counter;
