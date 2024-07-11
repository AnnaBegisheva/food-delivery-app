import styles from './button.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Button({ text, isLarge, type, children }) {
  return (
    <>
      <button
        className={cx('btn', {
          [`btn--${type}`]: true,
          'btn--large': isLarge,
        })}>
        <span className={cx('icon')}>{children}</span>
        <p className={cx('text')}>{text}</p>
      </button>
    </>
  )
}

export default Button
