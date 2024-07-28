import { useState } from 'react'
import styles from './products.module.scss'
import classNames from 'classnames/bind'
import Card from '../Card/Card'
import Button from '../Button/Button'
import Sidebar from '../Sidebar/Sidebar'
import FilterIcon from '../../assets/images/filter.svg?react'
import Filters from '../Filters/Filters'

const cx = classNames.bind(styles)

function Products({ categories, products }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)

  const showSidebar = () => {
    setIsSidebarVisible(true)
  }

  return (
    <div className={cx('products')}>
      <div className={cx('content')}>
        {categories?.map((category) => (
          <div key={category.name} className={cx('cat-box')}>
            <h2 className={cx('title')}>{category.name}</h2>
            {category.order < 3 && ( // TODO: нужен флаг для категорий, которые фильтруются
              <div className={cx('btn-box')}>
                <Button
                  text='Фильтры'
                  color='secondary'
                  size='small'
                  icon={<FilterIcon height='16px' width='16px' color='#FF7010' />}
                  onClick={() => {
                    setIsSidebarVisible(true)
                  }}
                />
              </div>
            )}
            <div className={cx('products-box')}>
              {products
                ?.filter((item) => item.categories_id === category.id)
                ?.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
            </div>
            {isSidebarVisible && (
              <Sidebar>
                <Filters setIsSidebarVisible={setIsSidebarVisible} />
              </Sidebar>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
