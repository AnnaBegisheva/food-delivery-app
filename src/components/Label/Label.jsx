import styles from './label.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Label({ text, type, size }) {
  return (
    <>
      <div className={cx('container', `${type}`, `${size}`)}>{text}</div>
    </>
  )
}

export default Label
