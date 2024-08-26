import styles from './modal.module.scss';
import classNames from 'classnames/bind';
import CloseIcon from '../../assets/images/x.svg?react';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

const cx = classNames.bind(styles);

function Modal({ children, isVisible, onClose, type }) {
  useBodyScrollLock(isVisible);

  return (
    <div className={cx('background')}>
      <div className={cx(type)}>
        <CloseIcon
          className={cx('icon')}
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
}

export default Modal;
