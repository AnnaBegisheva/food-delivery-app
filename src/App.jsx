import { useState } from 'react'
import styles from './styles/app.module.scss'
import classNames from 'classnames/bind'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const cx = classNames.bind(styles)

function App() {
  return (
    <>
      <div className={cx('container')}>
        <Header />
        <div className={cx('main')}></div>
        <Footer />
      </div>
    </>
  )
}

export default App
