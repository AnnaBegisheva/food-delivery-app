import { useState } from "react"
import styles from "./headerInfo.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

function HeaderInfo() {
  const [time, setTime] = useState("00:24:19")

  return (
    <aside className={cx("info")}>
      <div className={cx("container")}>
        <div className={cx("time-estimation")}>
          Среднее время доставки*:
          <time className={cx("delivery-time")}> {time}</time>
        </div>
        <div className={cx("working-hours")}>
          Время работы: с <time>11:00</time> до <time>23:00</time>
        </div>
        <a className={cx("tel")} href="tel:+74950071113">
          8 (495) 007 11 13
        </a>
      </div>
    </aside>
  )
}

export default HeaderInfo
