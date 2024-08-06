import { useRef } from "react"
import styles from "./categoriesList.module.scss"
import classNames from "classnames/bind"
import Categories from "./Categories"
import IconHandler from "../../handlers/icon_handler"
import List from "../List/List"
import { OTHER_COMPANY } from "../../constants/index"
import { OTHER_HELP } from "../../constants/index"
import { usePopupComponent } from "../../hooks/usePopupComponent"

const cx = classNames.bind(styles)

function CategoriesList({ categories }) {
  const referenceRef = useRef(null)
  const popperRef = useRef(null)
  const otherItems = [...OTHER_COMPANY, ...OTHER_HELP]

  const { styles, attributes, visible, setVisibility, setArrowElement } = usePopupComponent(referenceRef, popperRef)

  return (
    <div className={cx("categories")}>
      <Categories categories={categories} linkClass={cx("link")} />
      <button className={cx("other")} type="button" ref={referenceRef} onClick={() => setVisibility(!visible)}>
        <p className={cx("text")}>
          Другое{" "}
          <span className={cx("arrow")}>
            <IconHandler code={"arrow"} />
          </span>
        </p>
      </button>
      {visible && (
        <div ref={popperRef} style={styles.popper} {...attributes.popper} className={cx("dropdown")}>
          <div ref={setArrowElement} style={styles.arrow} className={cx("tooltip")}></div>
          <List items={otherItems} listClass={cx("list")} itemClass={cx("item")} />
        </div>
      )}
    </div>
  )
}

export default CategoriesList
