import { useState, useCallback } from 'react'
import styles from './filters.module.scss'
import classNames from 'classnames/bind'
import Button from '../Button/Button'
import CloseIcon from '../../assets/images/x.svg?react'

const cx = classNames.bind(styles)

const filters = [
  {
    name: 'Общее',
    filterBy: [
      'Хит',
      'Новинка',
      'С мясом',
      'Вегетарианская',
      'С курицей',
      'Без лука',
      'С грибами',
      'С морепродуктами',
      'Барбекью',
    ],
  },
  {
    name: 'Сыр',
    filterBy: [
      'Реджанито',
      'Моцарелла',
      'Чеддер',
      'С голубой плесенью',
      'Смесь итальянских сыров',
      'Мягкий молодой сыр',
    ],
  },
  {
    name: 'Мясо',
    filterBy: ['Пепперони', 'Свинина', 'Ветчина', 'Бекон', 'Говядина', 'Чоризо', 'Колбаски', 'Куриная грудка'],
  },
  {
    name: 'Компонент',
    filterBy: [
      'Креветка',
      'Ананасы',
      'Шампиньоны',
      'Лук',
      'Перец халапеньо',
      'Орегано',
      'Зеленый перец',
      'Томаты',
      'Чеснок',
      'Красный перец',
      'Оливки',
      'Маслины',
      'Клубника',
      'Смесь итальянских трав',
    ],
  },
]

const Filters = ({ setIsSidebarVisible }) => {
  const [selectedFilters, setSelectedFilters] = useState([])

  const addFilter = (filter) => {
    setSelectedFilters((prevSelectedFilters) => {
      if (prevSelectedFilters.includes(filter)) {
        return [...prevSelectedFilters.filter((item) => item !== filter)]
      } else {
        return [...prevSelectedFilters, filter]
      }
    })
  }

  const resetAllFilters = () => {
    setSelectedFilters([])
  }

  return (
    <div className={cx('filters')}>
      <div className={cx('header')}>
        <h2 className={cx('title')}>Фильтры</h2>
        <CloseIcon
          width='24px'
          height='24px'
          color='#A5A5A5'
          className={cx('icon')}
          onClick={() => setIsSidebarVisible(false)}
        />
      </div>
      <div className={cx('content')}>
        {filters.map((item) => (
          <div className={cx('section')} key={item.name}>
            <h4 className={cx('section-name')}>{item.name}</h4>
            <div className={cx('filters-box')}>
              {item.filterBy.map((filter) => (
                <span
                  className={cx('filter-name', {
                    selected: selectedFilters.includes(filter),
                  })}
                  key={filter}
                  onClick={() => addFilter(filter)}>
                  {filter}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={cx('buttons')}>
        <Button text='Сбросить' color='primary' size='fullWidth' onClick={resetAllFilters} />
        <Button text='Применить' color='primary' size='fullWidth' />
      </div>
    </div>
  )
}

export default Filters
