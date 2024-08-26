import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
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
  const toastId = useRef(null);

  const categoriesQuery = useQuery({
    queryKey: ['categories'],
    queryFn: () => getData('categories'),
  });

  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: () => getData('products'),
  });

  useEffect(() => {
    toastId.current = toast.loading('Loading...');

    if (categoriesQuery.isError || productsQuery.isError) {
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
    } else {
      toast.update(toastId.current, {
        toastId: toastId,
        isLoading: false,
        autoClose: 500,
        hideProgressBar: true,
      });
    }
  }, [categoriesQuery.isError, productsQuery.isError]);

  return (
    <div className={cx('container')}>
      <HeaderInfo />
      <Header
        isSticky={isSticky}
        categories={categoriesQuery.data}
      />
      {categoriesQuery.error || productsQuery.error ? (
        <div className={cx('main')}></div>
      ) : (
        <div className={cx('main')}>
          <CategoriesIcons
            categories={categoriesQuery.data}
            ref={categoriesRef}
          />
          <Search />
          <Products
            categories={categoriesQuery.data}
            products={productsQuery.data}
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
