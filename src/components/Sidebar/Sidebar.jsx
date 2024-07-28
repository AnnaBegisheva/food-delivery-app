import { useEffect } from 'react'
import styles from './sidebar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Sidebar({ children }) {
  useEffect(() => {
    document.body.classList.add(cx('overflow-y-hidden'))

    return () => {
      document.body.classList.remove(cx('overflow-y-hidden'))
    }
  }, [])

  return (
    <div className={cx('background')}>
      <div className={cx('sidebar')}>{children}</div>
    </div>
  )
}

export default Sidebar
