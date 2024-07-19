import { useEffect, useRef, useState } from 'react'
import styles from './styles/app.module.scss'
import classNames from 'classnames/bind'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Categories from './components/Categories/Categories'
import HeaderInfo from './components/HeaderInfo/HeaderInfo'
import Search from './components/Search/Search'
import Products from './components/Products/Products'

const cx = classNames.bind(styles)

function App() {
  const categoriesRef = useRef(null)
  const [isSticky, setIsSticky] = useState(false)

  // to perform {!isSticky && <Categories isVisible={!isSticky}
  // window.addEventListener(
  //   'scroll',
  //   function () {
  //     const categoriesOffset = document.getElementById('categories').offsetTop
  //     setIsSticky(window.scrollY > categoriesOffset)
  //   },
  //   { passive: true }, // is needed for better performance
  // )

  const callback = (entries) => {
    const [entry] = entries
    setIsSticky(!entry.isIntersecting)
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    if (categoriesRef.current) observer.observe(categoriesRef.current)

    return () => {
      if (categoriesRef.current) observer.unobserve(categoriesRef.current)
    }
  })

  return (
    <>
      <div className={cx('container')}>
        <HeaderInfo />
        <Header isSticky={isSticky} />
        <div className={cx('main')}>
          <Categories isIcons={!isSticky} ref={categoriesRef} />
          <Search />
          <Products />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
