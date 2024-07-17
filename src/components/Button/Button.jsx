import styles from './button.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Button({ text, type, isLong, isSmall, icon }) {
  return (
    <>
      <button
        className={cx('btn', `${type}`, {
          long: isLong,
          small: isSmall,
        })}>
        {icon && <span className={cx('icon')}>{icon}</span>}
        <p className={cx('text')}>{text}</p>
      </button>
    </>
  )
}

export default Button
