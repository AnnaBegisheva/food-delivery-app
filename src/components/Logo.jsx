import styles from '../styles/modules/components/logo.module.scss'
import classNames from 'classnames/bind'
import logoIcon from '../assets/images/pizza-icon.svg'

function Logo({ header }) {
  const cx = classNames.bind(styles)

  return (
    <>
      <div className={cx('logo-box', { 'logo-box--header': header })}>
        <img src={logoIcon} alt='Logo' className={cx('logo-box__icon')} />
        <span className={cx('logo-box__name')}>Super Pizza</span>
      </div>
    </>
  )
}

export default Logo
