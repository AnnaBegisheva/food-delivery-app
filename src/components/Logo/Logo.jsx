import styles from "./logo.module.scss"
import classNames from "classnames/bind"
import logoIcon from "../../assets/images/logo-icon.svg"

const cx = classNames.bind(styles)

function Logo() {
  return (
    <div className={cx("logo-box")}>
      <img src={logoIcon} alt="Logo" className={cx("icon")} />
      <span className={cx("name")}>Super Pizza</span>
    </div>
  )
}

export default Logo
