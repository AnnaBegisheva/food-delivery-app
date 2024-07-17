import { useState, forwardRef, useEffect } from 'react'
import styles from './categories.module.scss'
import classNames from 'classnames/bind'
import IconHandler from '../../handlers/icon_handler'
import { OTHER_COMPANY } from '../../constants/index'
import { OTHER_HELP } from '../../constants/index'

const categories = [
  {
    id: 1,
    name: 'Пицца',
    order: 2,
    code: 'pizza',
  },
  {
    id: 2,
    name: 'Суши',
    order: 3,
    code: 'sushi',
  },
  {
    id: 3,
    name: 'Закуски',
    order: 5,
    code: 'snacks',
  },
  {
    id: 4,
    name: 'Десерты',
    order: 7,
    code: 'desserts',
  },
  {
    id: 5,
    name: 'Напитки',
    order: 4,
    code: 'drinks',
  },
  {
    id: 6,
    name: 'Соусы',
    order: 8,
    code: 'sauces',
  },
  {
    id: 7,
    name: 'Акции',
    order: 1,
    code: 'promos',
  },
  {
    id: 8,
    name: 'Комбо',
    order: 6,
    code: 'combo',
  },
]

const cx = classNames.bind(styles)

const Categories = forwardRef(({ isVisible }, ref) => {
  const [selected, setSelected] = useState('')

  const handleChange = (selectedOption) => {
    setSelected(selectedOption)
  }

  return (
    <>
      <div className={cx('container')} id='categories' ref={ref}>
        {categories &&
          categories
            .sort((a, b) => (a.order > b.order ? 1 : -1)) // later sort in fetch function
            .map((category) => (
              <a href='#' className={cx('btn', { 'icon-box': isVisible })} key={category.id}>
                {category.code && isVisible && <IconHandler code={category.code} />}
                <span>{category.name}</span>
              </a>
            ))}
      </div>
    </>
  )
})

export default Categories
