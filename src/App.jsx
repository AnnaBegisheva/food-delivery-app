import { useState } from 'react'
import styles from './styles/app.module.scss'
import classNames from 'classnames/bind'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Categories from './components/Categories/Categories'
import HeaderInfo from './components/HeaderInfo/HeaderInfo'

const cx = classNames.bind(styles)

function App() {
  return (
    <>
      <div className={cx('container')}>
        <HeaderInfo />
        <Header />
        <div className={cx('main')}>
          <Categories />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
