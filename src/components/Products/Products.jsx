import styles from "./products.module.scss"
import classNames from "classnames/bind"
import Card from "../Card/Card"
import FiltersSidebar from "../FiltersSidebar/FiltersSidebar"

const cx = classNames.bind(styles)

function Products({ categories, products }) {
  return (
    <div className={cx("products")}>
      <div className={cx("content")}>
        {categories?.map((category) => (
          <div key={category.name} className={cx("cat-box")}>
            <h2 className={cx("title")}>{category.name}</h2>
            {category.order < 3 && ( // TODO: нужен флаг для категорий, которые фильтруются
              <div className={cx("btn-box")}>
                <FiltersSidebar />
              </div>
            )}
            <div className={cx("products-box")}>
              {products
                ?.filter((item) => item.categories_id === category.id)
                ?.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
