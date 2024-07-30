import { forwardRef } from "react"
import styles from "./button.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

const Button = forwardRef(({ text, color, size, icon, type, onClick }, ref) => {
  return (
    <button className={cx("btn", color, size)} type={type} ref={ref} onClick={onClick}>
      {icon && <span className={cx("icon")}>{icon}</span>}
      <p className={cx("text")}>{text}</p>
    </button>
  )
})

export default Button
