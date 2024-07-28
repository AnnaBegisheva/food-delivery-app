import { useRef, useState } from 'react'
import { postData } from '../../api/requests'
import styles from './search.module.scss'
import classNames from 'classnames/bind'
import Button from '../Button/Button.jsx'
import Icon from '../../assets/images/location-pin.svg?react'
import { usePopupComponent } from '../../hooks/usePopupComponent.js'

const cx = classNames.bind(styles)

const Search = () => {
  const addressRef = useRef(null)
  const referenceRef = useRef(null)
  const popperRef = useRef(null)
  const [isValid, setIsValid] = useState()

  const { styles, attributes, visible, setVisibility, setArrowElement } = usePopupComponent(referenceRef, popperRef)

  const checkAddress = (e) => {
    e.preventDefault()
    if (!addressRef.current.value) {
      return
    } else {
      const requestBody = JSON.stringify({
        address: addressRef.current.value,
      })
      postData('delivery/check-location', requestBody).then((res) => {
        setIsValid(res.result)
        setVisibility(!visible)
        document.getElementById('addressForm').reset()
      })
    }
  }

  return (
    <>
      <form className={cx('container')} onSubmit={checkAddress} id='addressForm'>
        <div className={cx('text')}>
          <p>Проверить адрес доставки</p>
        </div>
        <div className={cx('search')}>
          <Icon className={cx('icon')} />
          <input ref={addressRef} type='search' name='checkAddress' className={cx('input')} placeholder='Адрес' />
        </div>
        <Button text='Проверить' color='primary' size='long' type='submit' ref={referenceRef} />
      </form>

      {visible && (
        <div ref={popperRef} style={styles.popper} {...attributes.popper} className={cx('popup')}>
          <div ref={setArrowElement} style={styles.arrow} className={cx('tooltip')}></div>
          <div className={cx('message', { green: isValid })}>
            {isValid ? 'В зоне доставки' : 'К сожалению, мы не доставляем по указанному адресу'}
          </div>
        </div>
      )}
    </>
  )
}

export default Search
