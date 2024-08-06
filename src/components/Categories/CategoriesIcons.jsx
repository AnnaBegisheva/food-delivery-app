import { forwardRef } from "react"
import styles from "./categoriesIcons.module.scss"
import classNames from "classnames/bind"
import IconHandler from "../../handlers/icon_handler"
import Categories from "./Categories"

const cx = classNames.bind(styles)

const CategoriesIcons = forwardRef(({ categories }, ref) => {
  return (
    <div className={cx("categories")} ref={ref}>
      <Categories categories={categories} linkClass={cx("icon-box")}>
        {(code) => <IconHandler code={code} />}
      </Categories>
    </div>
  )
})

export default CategoriesIcons
