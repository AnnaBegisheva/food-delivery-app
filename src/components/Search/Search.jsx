import styles from './search.module.scss'
import classNames from 'classnames/bind'
import Button from '../Button/Button.jsx'
import Icon from '../../assets/images/location-pin.svg?react'

const cx = classNames.bind(styles)

function Search() {
  return (
    <div className={cx('container')}>
      <div className={cx('text')}>
        <p>Проверить адрес доставки</p>
      </div>
      <div className={cx('search')}>
        <Icon className={cx('icon')} />
        <input type='search' name='checkAddress' className={cx('input')} placeholder='Адрес' />
      </div>
      <Button text='Проверить' type='primary' size='long' />
    </div>
  )
}

export default Search
