import styles from './categories.module.scss'
import classNames from 'classnames/bind'
import Select from 'react-select'
import IconHandler from '../../handlers/icon_handler'
import { OTHER_COMPANY } from '../../constants/index'
import { OTHER_HELP } from '../../constants/index'
import { useState } from 'react'

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
const defaultValue = {
  value: 'Другое',
  label: 'Другое',
}
const options = [defaultValue, ...OTHER_COMPANY, ...OTHER_HELP]

function Categories() {
  const [visible, setVisible] = useState(true)
  const [selected, setSelected] = useState(defaultValue)

  window.addEventListener('scroll', function () {
    const categoriesOffset = document.getElementById('categories').offsetTop
    window.scrollY > categoriesOffset ? setVisible(false) : setVisible(true)
  })

  const handleChange = (selectedOption) => {
    setSelected(selectedOption)
  }

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isFocused ? '#fff' : '#000',
      backgroundColor: state.isSelected ? '#ff7010' : '#fff',
      backgroundColor: state.isFocused ? '#ff7010' : '#fff',
      cursor: 'pointer',
    }),

    control: (styles) => ({
      ...styles,
      border: 'none',
      boxShadow: 'none',
      cursor: 'pointer',
      fontSize: '1.6rem',
      lineHeight: '2.2rem',
      color: '191919',
      fontFamily: 'Roboto',
      fontSize: '1.6rem',
      maxWidth: '20rem',
    }),

    menu: (provided) => ({
      ...provided,
      width: '20rem',
      overflow: 'hidden',
    }),
  }

  const customTheme = (theme) => ({
    ...theme,
    border: '1px solid #a5a5a5',
    borderRadius: 12,
    padding: '5px 20px',
    width: '20rem',
  })

  return (
    <>
      <div className={cx('container', { 'container-icons': visible })} id='categories'>
        {categories &&
          categories
            .sort((a, b) => (a.order > b.order ? 1 : -1)) // later sort in fetch function
            .map((category) => (
              <a href='#' className={cx('btn', { 'icon-box': visible })} key={category.id}>
                {visible && <IconHandler code={category.code} />}
                <span>{category.name}</span>
              </a>
            ))}

        {!visible && (
          <Select
            className={cx('select')}
            options={options}
            onChange={handleChange}
            defaultValue={selected}
            autosize={true}
            styles={customStyles}
            theme={customTheme}
          />
        )}
      </div>
    </>
  )
}

export default Categories
