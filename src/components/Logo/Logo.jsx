import styles from './logo.module.scss'
import classNames from 'classnames/bind'
import logoIcon from '../../assets/images/logo-icon.svg'

const cx = classNames.bind(styles)

function Logo({ start }) {
  return (
    <>
      <div className={cx('logo-box', { 'logo-box--start': start })}>
        <img src={logoIcon} alt='Logo' className={cx('icon')} />
        <span className={cx('name')}>Super Pizza</span>
      </div>
    </>
  )
}

export default Logo
