import { useState, forwardRef, useEffect, useRef } from 'react'
import styles from './categories.module.scss'
import classNames from 'classnames/bind'
import IconHandler from '../../handlers/icon_handler'
import List from '../List/List'
import { usePopper } from 'react-popper'
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

const Categories = forwardRef(({ isIcons }, ref) => {
  const referenceRef = useRef(null)
  const popperRef = useRef(null)
  const [arrowElement, setArrowElement] = useState(null)
  const [visible, setVisibility] = useState(false)
  const otherItems = [...OTHER_COMPANY, ...OTHER_HELP]

  const { styles, attributes } = usePopper(referenceRef.current, popperRef.current, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'offset',
        enabled: true,
        options: {
          offset: [0, 40],
        },
      },
      { name: 'arrow', options: { element: arrowElement, padding: 8 } },
    ],
  })

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick)
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick)
    }
  }, [])

  function handleDocumentClick(event) {
    if (!isIcons && referenceRef.current.contains(event.target)) {
      return
    }
    setVisibility(false)
  }

  return (
    <>
      <div className={cx('container')} id='categories' ref={ref}>
        {categories &&
          categories
            .sort((a, b) => (a.order > b.order ? 1 : -1)) // later sort in fetch function
            .map((category) => (
              <a href='#' className={cx('btn', { 'icon-box': isIcons })} key={category.id}>
                {category.code && isIcons && <IconHandler code={category.code} />}
                <span>{category.name}</span>
              </a>
            ))}

        {!isIcons && (
          <>
            <button className={cx('other')} type='button' ref={referenceRef} onClick={() => setVisibility(!visible)}>
              <p className={cx('text')}>
                Другое{' '}
                <span className={cx('arrow')}>
                  <IconHandler code={'arrow'} />
                </span>
              </p>
            </button>

            {visible && (
              <div ref={popperRef} style={styles.popper} {...attributes.popper} className={cx('dropdown')}>
                <div ref={setArrowElement} style={styles.arrow} className={cx('tooltip')}></div>
                <List items={otherItems} listClass={cx('list')} itemClass={cx('item')} />
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
})

export default Categories
