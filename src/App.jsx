import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from './hooks/useIntersectionObserver'
import { getData } from './api/requests'
import styles from './styles/app.module.scss'
import classNames from 'classnames/bind'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HeaderInfo from './components/HeaderInfo/HeaderInfo'
import Search from './components/Search/Search'
import Products from './components/Products/Products'
import CategoriesIcons from './components/Categories/CategoriesIcons'

const cx = classNames.bind(styles)

function App() {
  const categoriesRef = useRef(null)
  const isSticky = useIntersectionObserver(categoriesRef)
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    let requests = [getData('categories'), getData('products')]
    Promise.all(requests)
      .then(([categories, products]) => {
        setCategories(categories)
        setProducts(products)
      })
      .catch((error) => {
        setError(true)
        console.error('Ошибка при выполнении запросов:', error)
      })
  }, [])

  return (
    <div className={cx('container')}>
      <HeaderInfo />
      <Header isSticky={isSticky} categories={categories} />
      {error ? (
        <div className={cx('main', 'error')}> Что-то пошло не так... Попробуйте позже</div>
      ) : (
        <div className={cx('main')}>
          <CategoriesIcons categories={categories} ref={categoriesRef} />
          <Search />
          <Products categories={categories} products={products} />
        </div>
      )}
      <Footer />
    </div>
  )
}

export default App
