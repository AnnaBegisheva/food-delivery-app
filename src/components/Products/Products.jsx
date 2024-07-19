import { useState, useEffect } from 'react'
import { getData } from '../../api/requests'
import styles from './products.module.scss'
import classNames from 'classnames/bind'
import Card from '../Card/Card'
import Button from '../Button/Button'
import FilterIcon from '../../assets/images/filter.svg?react'

const cx = classNames.bind(styles)

function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    getData('categories', setCategories)
    getData('products', setProducts)
  }, [])

  return (
    <>
      <div className={cx('container')}>
        <div className={cx('btn-box')}>
          <Button
            text={`Фильтры`}
            type={'secondary'}
            size={'small'}
            icon={<FilterIcon height={'16px'} width={'16px'} color={'#FF7010'} />}
          />
        </div>
        <div className={cx('content')}>
          {categories &&
            categories.map((category) => (
              <div key={category.name}>
                <h2 className={cx('title')}>{category.name}</h2>
                <div className={cx('products-box')}>
                  {products &&
                    products
                      .filter((item) => item.categories_id === category.id)
                      .map((product) => <Card product={product} key={product.id} />)}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Products
