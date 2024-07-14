import { useState } from 'react'
import styles from './styles/app.module.scss'
import classNames from 'classnames/bind'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Categories from './components/Categories/Categories'
import HeaderInfo from './components/HeaderInfo/HeaderInfo'

const cx = classNames.bind(styles)

function App() {
  const [isSticky, setIsSticky] = useState(false)

  window.addEventListener('scroll', function () {
    const categoriesOffset = document.getElementById('categories').offsetTop
    setIsSticky(window.scrollY > categoriesOffset)
  })

  return (
    <>
      <div className={cx('container')}>
        <HeaderInfo />
        <Header isSticky={isSticky} />
        <div className={cx('main')}>{!isSticky && <Categories isVisible={!isSticky} />}</div>
        <Footer />
      </div>
    </>
  )
}

export default App
