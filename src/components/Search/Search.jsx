import { useRef, useState } from "react"
import { postData } from "../../api/requests"
import styles from "./search.module.scss"
import classNames from "classnames/bind"
import Button from "../Button/Button.jsx"
import Icon from "../../assets/images/location-pin.svg?react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const cx = classNames.bind(styles)

const Search = () => {
  const addressRef = useRef(null)

  const toastAdress = useRef(null)

  const checkAddress = (e) => {
    e.preventDefault()
    if (!addressRef.current.value) {
      return
    } else {
      toastAdress.current = toast.loading("Проверяем...", {
        toastId: toastAdress,
        position: "top-right",
        hideProgressBar: false,
        closeButton: true,
        pauseOnHover: true,
        draggable: true,
      })

      const requestBody = JSON.stringify({
        address: addressRef.current.value,
      })
      postData("delivery/check-location", requestBody).then((res) => {
        if (!res.result) {
          toast.update(toastAdress.current, {
            toastId: toastAdress,
            render: "К сожалению, мы не доставляем по указанному адресу",
            type: "error",
            isLoading: false,
          })
        } else {
          toast.update(toastAdress.current, {
            toastId: toastAdress,
            render: "В зоне доставки 🚀",
            type: "success",
            isLoading: false,
          })
        }

        document.getElementById("addressForm").reset()
      })
    }
  }

  return (
    <>
      <form className={cx("container")} onSubmit={checkAddress} id="addressForm">
        <div className={cx("text")}>
          <p>Проверить адрес доставки</p>
        </div>
        <div className={cx("search")}>
          <Icon className={cx("icon")} />
          <input ref={addressRef} type="search" name="checkAddress" className={cx("input")} placeholder="Адрес" />
        </div>
        <Button text="Проверить" color="primary" size="long" type="submit" />
      </form>
    </>
  )
}

export default Search
