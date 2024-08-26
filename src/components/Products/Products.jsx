import { useEffect, useState } from 'react';
import styles from './products.module.scss';
import classNames from 'classnames/bind';
import Card from '../Card/Card';
import FiltersSidebar from '../FiltersSidebar/FiltersSidebar';

const cx = classNames.bind(styles);

function Products({ categories, products }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const filterProducts = (ids) => {
    if (!ids.length) {
      setFilteredProducts([]);
    } else {
      setFilteredProducts(products.filter((product) => ids.includes(product.id)));
    }
  };

  return (
    <div className={cx('products')}>
      <div className={cx('content')}>
        {categories?.map((category) => (
          <div
            key={category.name}
            className={cx('cat-box')}
          >
            <h2 className={cx('title')}>{category.name}</h2>
            {category.filter_groups.length ? (
              <div className={cx('btn-box')}>
                <FiltersSidebar
                  filters={category.filter_groups}
                  filterProducts={filterProducts}
                  setAllProducts={() => setFilteredProducts(products)}
                />
              </div>
            ) : (
              ''
            )}
            <div className={cx('products-box')}>
              {filteredProducts
                ?.filter((item) => item.category_id === category.id)
                ?.map((product) => (
                  <Card
                    product={product}
                    key={product.id}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
