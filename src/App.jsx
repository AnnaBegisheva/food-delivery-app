import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getData } from './api/requests';
import styles from './styles/app.module.scss';
import classNames from 'classnames/bind';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeaderInfo from './components/HeaderInfo/HeaderInfo';
import Search from './components/Search/Search';
import Products from './components/Products/Products';
import CategoriesIcons from './components/Categories/CategoriesIcons';

const cx = classNames.bind(styles);

function App() {
  const categoriesRef = useRef(null);
  const isSticky = useIntersectionObserver(categoriesRef);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const toastId = useRef(null);

  useEffect(() => {
    toastId.current = toast.loading('Loading...');
    let requests = [getData('categories'), getData('products')];

    Promise.all(requests)
      .then(([categories, products]) => {
        setCategories(categories);
        setProducts(products);
        toast.update(toastId.current, {
          toastId: toastId,
          isLoading: false,
          autoClose: 500,
          hideProgressBar: true,
        });
      })
      .catch(() => {
        setError(true);
        toast.update(toastId.current, {
          toastId: toastId,
          render: 'Что-то пошло не так... Попробуйте позже',
          type: 'error',
          isLoading: false,
          hideProgressBar: false,
          closeButton: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  }, []);

  return (
    <div className={cx('container')}>
      <HeaderInfo />
      <Header
        isSticky={isSticky}
        categories={categories}
      />
      {error ? (
        <div className={cx('main')}></div>
      ) : (
        <div className={cx('main')}>
          <CategoriesIcons
            categories={categories}
            ref={categoriesRef}
          />
          <Search />
          <Products
            categories={categories}
            products={products}
          />
        </div>
      )}
      <ToastContainer
        position="bottom-right"
        transition={Slide}
        className={cx('toast')}
      />
      <Footer />
    </div>
  );
}

export default App;
