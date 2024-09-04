import { forwardRef } from 'react';
import styles from './button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = forwardRef(({ content, color, size, type, onClick }, ref) => {
  return (
    <button
      className={cx('btn', color, size)}
      type={type}
      ref={ref}
      onClick={onClick}
    >
      {content}
    </button>
  );
});

export default Button;
