import styles from "./sidebar.module.scss"
import classNames from "classnames/bind"
import CloseIcon from "../../assets/images/x.svg?react"
import useBodyScrollLock from "../../hooks/useBodyScrollLock"

const cx = classNames.bind(styles)

function Sidebar({ children, isVisible, setIsVisible }) {
  useBodyScrollLock(isVisible)

  return (
    <div className={cx("background")}>
      <div className={cx("sidebar")}>
        <CloseIcon
          width="24px"
          height="24px"
          color="#A5A5A5"
          className={cx("icon")}
          onClick={() => setIsVisible(false)}
        />
        {children}
      </div>
    </div>
  )
}

export default Sidebar
