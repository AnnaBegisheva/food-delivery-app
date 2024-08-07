import styles from './modal.module.scss';
import classNames from 'classnames/bind';
import CloseIcon from '../../assets/images/x.svg?react';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

const cx = classNames.bind(styles);

function Modal({ children, isVisible, setIsVisible, type }) {
  useBodyScrollLock(isVisible);

  return (
    <div className={cx('background')}>
      <div className={cx(type)}>
        <CloseIcon
          className={cx('icon')}
          onClick={() => setIsVisible(false)}
        />
        {children}
      </div>
    </div>
  );
}

export default Modal;
