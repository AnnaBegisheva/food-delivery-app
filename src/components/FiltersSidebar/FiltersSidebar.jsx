import { useState } from 'react';
import Button from '../Button/Button';
import Sidebar from '../Modal/Modal';
import FilterIcon from '../../assets/images/filter.svg?react';
import Filters from '../Filters/Filters';

const FiltersSidebar = ({ filters, filterProducts, setAllProducts }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);

  const selectFilter = (filter) => {
    setSelectedFilters((prevSelectedFilters) => {
      if (prevSelectedFilters.includes(filter)) {
        return [...prevSelectedFilters.filter((item) => item !== filter)];
      }
      return [...prevSelectedFilters, filter];
    });
  };

  const resetAllFilters = () => {
    setSelectedFilters([]);
    setAppliedFilters([]);
    setAllProducts();
    setIsSidebarVisible(false);
  };

  const applyAllFilters = () => {
    if (selectedFilters.length === 0) return;
    setAppliedFilters(selectedFilters);

    if (selectedFilters.length === 1) {
      filterProducts(selectedFilters[0].products.map((item) => item.product_id));
    } else {
      const counter = {};
      selectedFilters.forEach((element) => {
        element.products.forEach((item) => {
          counter[item.product_id] = (counter[item.product_id] || 0) + 1;
        });
      });

      const filteredProductsIds = Object.keys(counter)
        .filter((id) => counter[id] === selectedFilters.length)
        .map((key) => +key);

      filterProducts(filteredProductsIds);
    }
    setIsSidebarVisible(false);
  };

  const closeSidebar = () => {
    if (appliedFilters.length === 0) {
      resetAllFilters();
    } else {
      setIsSidebarVisible(false);
    }
  };

  return (
    <>
      <Button
        text="Фильтры"
        counter={appliedFilters.length ? appliedFilters.length : ''}
        color="secondary"
        size="small"
        icon={
          <FilterIcon
            height="16px"
            width="16px"
            color="#FF7010"
          />
        }
        onClick={() => {
          setIsSidebarVisible(true);
        }}
      />
      {isSidebarVisible && (
        <Sidebar
          isVisible={isSidebarVisible}
          onClose={closeSidebar}
          type="sidebar"
        >
          <Filters
            filters={filters}
            selectedFilters={selectedFilters}
            selectFilter={selectFilter}
            resetAllFilters={resetAllFilters}
            applyAllFilters={applyAllFilters}
          />
        </Sidebar>
      )}
    </>
  );
};

export default FiltersSidebar;
