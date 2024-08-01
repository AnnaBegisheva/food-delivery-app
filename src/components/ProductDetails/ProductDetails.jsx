import { useEffect, useState } from "react"
import styles from "./productDetails.module.scss"
import classNames from "classnames/bind"
import Button from "../Button/Button.jsx"
import Label from "../Label/Label.jsx"
import { RUB_SYMBOL } from "../../constants/index.js"
import IconCheckbox from "../IconCheckbox/IconCheckbox.jsx"

const cx = classNames.bind(styles)

const crusts = [
  { id: 9, name: "Традиционное", code: "traditional" },
  { id: 10, name: "Тонкое", code: "thin" },
]

const sizes = [
  { id: 11, name: "20см", code: "20", rate: 1 },
  { id: 12, name: "28см", code: "28", rate: 1.2 },
  { id: 13, name: "33см", code: "33", rate: 1.5 },
]

const ProductDetails = ({ product }) => {
  const [crust, setCrust] = useState("traditional")
  const [size, setSize] = useState("20")
  const [ingredients, setIngredients] = useState([])
  const [toppings, setToppings] = useState([])
  const [total, setTotal] = useState(0)

  product.ingredients = [
    { id: 1, name: "Моцарелла", code: "cheese" },
    { id: 2, name: "Огурцы маринованные", code: "pickle" },
    { id: 3, name: "Пепперони", code: "pepperoni" },
    { id: 4, name: "Томатный соус", code: "sauce" },
  ]
  product.toppings = [
    { id: 5, name: "Моцарелла", code: "cheese", price: 59 },
    { id: 6, name: "Шампиньоны", code: "mushrooms", price: 59 },
    { id: 7, name: "Красный лук", code: "onion", price: 59 },
    { id: 8, name: "Сладкий перец", code: "bell_pepper", price: 59 },
  ]
  product.weight = 400

  useEffect(() => {
    setTotal(product.price)
  }, [])

  useEffect(() => {
    calcPrice()
  }, [size, toppings])

  const handleChange = (name, setState) => {
    setState((prev) => {
      if (prev.includes(name)) {
        return [...prev.filter((item) => item !== name)]
      }
      return [...prev, name]
    })
  }

  const calcPrice = () => {
    const initialPrice = product.price
    const allToppingsPrice = toppings.reduce(
      (acc, topping) => acc + product.toppings.find((item) => item.name === topping).price,
      0,
    )
    const rate = sizes.find((item) => item.code === size).rate
    setTotal(initialPrice * rate + allToppingsPrice)
  }

  return (
    <div className={cx("products")}>
      {product.is_new && <Label text="New" type="green" />}
      {product.is_popular && <Label text="Хит" type="red" />}
      <div className={cx("image-box")}>
        <img src={product.image.url} alt={product.name} className={cx("image")} />
      </div>
      <div className={cx("content")}>
        <h2 className={cx("title")}>{product.name}</h2>
        <div className={cx("icons-container")}>
          {product.ingredients.map((ingredient) => (
            <IconCheckbox
              key={ingredient.id}
              item={ingredient}
              isChecked={ingredients.includes(ingredient.name)}
              handleChange={() => handleChange(ingredient.name, setIngredients)}
              type="exclude"
            />
          ))}
        </div>

        <div className={cx("tabs")}>
          <div className={cx("crust")}>
            {crusts.map((item) => (
              <div className={cx("tab")} key={item.code}>
                <input
                  className={cx("input")}
                  type="radio"
                  name="crust"
                  value={item.code}
                  id={item.code}
                  checked={crust === item.code}
                  onChange={(e) => setCrust(e.target.value)}
                />
                <label className={cx("label")} htmlFor={item.code}>
                  {item.name}
                </label>
              </div>
            ))}
          </div>

          <div className={cx("size")}>
            {sizes.map((item) => (
              <div className={cx("tab")} key={item.code}>
                <input
                  className={cx("input")}
                  type="radio"
                  name="size"
                  value={item.code}
                  id={item.code}
                  checked={size === item.code}
                  onChange={(e) => setSize(e.target.value)}
                />
                <label className={cx("label")} htmlFor={item.code}>
                  {item.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className={cx("subtitle")}>Добавьте в пиццу</h3>
          <div className={cx("icons-container")}>
            {product.toppings.map((topping) => (
              <IconCheckbox
                key={topping.id}
                item={topping}
                isChecked={toppings.includes(topping.name)}
                handleChange={() => handleChange(topping.name, setToppings)}
                type="include"
              />
            ))}
          </div>
        </div>

        <div className={cx("order")}>
          <div className={cx("total")}>
            Итого: {`${total}  ${RUB_SYMBOL}`}
            <span className={cx("weight")}>{product.weight} г</span>
          </div>
          <Button text="Добавить" color="primary" size="long" />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
