import styles from './card.module.scss'
import classNames from 'classnames/bind'
import Button from '../Button/Button.jsx'
import { RUB_SYMBOL } from '../../constants/index.js'
import Label from '../Label/Label.jsx'

const cx = classNames.bind(styles)

function Card({ product }) {
  return (
    <>
      <div className={cx('container')}>
        {product.is_new && <Label text={'New'} type={'green'} size={'small'} />}
        {product.is_popular && <Label text={'Хит'} type={'red'} size={'small'} />}
        <div className={cx('image-box')}>
          <img src={product.image.url} alt={product.name} className={cx('image')} />
        </div>
        <div className={cx('description')}>
          <h3 className={cx('title')}>{product.name}</h3>
          <p className={cx('text')}>{product.description}</p>
        </div>
        <div className={cx('order-box')}>
          <p className={cx('price')}>
            {product.categories_id === 1 ? 'от' : ''} {product.price} {RUB_SYMBOL}
          </p>
          <Button text={`Выбрать`} type={'primary'} size={'long'} />
        </div>
      </div>
    </>
  )
}

export default Card