import { useState, useEffect, useRef } from 'react'
import styles from './categoriesList.module.scss'
import classNames from 'classnames/bind'
import Categories from './Categories'
import IconHandler from '../../handlers/icon_handler'
import List from '../List/List'
import { usePopper } from 'react-popper'
import { OTHER_COMPANY } from '../../constants/index'
import { OTHER_HELP } from '../../constants/index'

const cx = classNames.bind(styles)

function CategoriesList({ categories }) {
  const referenceRef = useRef(null)
  const popperRef = useRef(null)
  const [arrowElement, setArrowElement] = useState(null)
  const [visible, setVisibility] = useState(false)
  const otherItems = [...OTHER_COMPANY, ...OTHER_HELP]

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick)
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick)
    }
  }, [])

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

  function handleDocumentClick(event) {
    if (referenceRef.current.contains(event.target)) {
      return
    }
    setVisibility(false)
  }

  return (
    <div className={cx('categories')}>
      <Categories categories={categories} linkClass={cx('link')} />
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
    </div>
  )
}

export default CategoriesList
