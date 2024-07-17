import Promos from '../assets/images/promos.svg?react'
import Pizza from '../assets/images/pizza.svg?react'
import Sushi from '../assets/images/sushi.svg?react'
import Drinks from '../assets/images/drinks.svg?react'
import Snacks from '../assets/images/snacks.svg?react'
import Combo from '../assets/images/combo.svg?react'
import Desserts from '../assets/images/desserts.svg?react'
import Sauces from '../assets/images/sauces.svg?react'
import Location from '../assets/images/location.svg?react'
import Facebook from '../assets/images/facebook.svg?react'
import Instagram from '../assets/images/instagram.svg?react'
import Phone from '../assets/images/phone.svg?react'

const iconsMap = new Map([
  ['promos', Promos],
  ['pizza', Pizza],
  ['sushi', Sushi],
  ['drinks', Drinks],
  ['snacks', Snacks],
  ['combo', Combo],
  ['desserts', Desserts],
  ['sauces', Sauces],
  ['location', Location],
  ['facebook', Facebook],
  ['instagram', Instagram],
  ['phone', Phone],
])

function IconHandler({ code }) {
  const SelectedComponent = iconsMap.get(code)
  return <SelectedComponent />
}

export default IconHandler
