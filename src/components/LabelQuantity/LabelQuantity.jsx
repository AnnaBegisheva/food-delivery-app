import styles from './labelQuantity.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LabelQuantity = ({ count }) => {
  if (!count) {
    return '';
  }
  return <div className={cx('countLabel')}>{count}</div>;
};

export default LabelQuantity;
