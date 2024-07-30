import { useState } from "react"
import Button from "../Button/Button"
import Sidebar from "../Sidebar/Sidebar"
import FilterIcon from "../../assets/images/filter.svg?react"
import Filters from "../Filters/Filters"

const FiltersSidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)

  return (
    <>
      <Button
        text="Фильтры"
        color="secondary"
        size="small"
        icon={<FilterIcon height="16px" width="16px" color="#FF7010" />}
        onClick={() => {
          setIsSidebarVisible(true)
        }}
      />
      {isSidebarVisible && (
        <Sidebar isVisible={isSidebarVisible} setIsVisible={setIsSidebarVisible}>
          <Filters />
        </Sidebar>
      )}
    </>
  )
}

export default FiltersSidebar
