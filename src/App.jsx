import { useState } from 'react'
import styles from './styles/modules/layout/app.module.scss'
import classNames from 'classnames/bind'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const cx = classNames.bind(styles)

  return (
    <>
      <div className={cx('container')}>
        <Header />
        <div className='main'></div>
        <Footer />
      </div>
    </>
  )
}

export default App
