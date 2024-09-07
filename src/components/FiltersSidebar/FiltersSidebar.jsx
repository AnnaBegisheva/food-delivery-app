import { useState } from 'react';
import Button from '../Button/Button';
import Sidebar from '../Modal/Modal';
import FilterIcon from '../../assets/images/filter.svg?react';
import LabelQuantity from '../LabelQuantity/LabelQuantity';
import Filters from '../Filters/Filters';
import { toggleItem } from '../../helpers/helperFunctions';

const FiltersSidebar = ({ filters, filterProducts, setAllProducts }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);

  const selectFilter = (filter) => {
    setSelectedFilters((prev) => toggleItem(prev, filter));
  };

  const resetAllFilters = () => {
    setSelectedFilters([]);
    setAppliedFilters([]);
    setAllProducts();
    setIsSidebarVisible(false);
  };

  const applyAllFilters = () => {
    if (!selectedFilters.length) return;
    setAppliedFilters(selectedFilters);
    setIsSidebarVisible(false);
    filterProducts(selectedFilters);
  };

  const closeSidebar = () => {
    if (appliedFilters.length === 0) {
      resetAllFilters();
      return;
    }
    setIsSidebarVisible(false);
  };

  return (
    <>
      <Button
        content={
          <>
            <FilterIcon
              height="16px"
              width="16px"
              color="#FF7010"
              style={{ marginRight: '8px' }}
            />
            <p>Фильтры</p>
            <LabelQuantity count={appliedFilters.length} />
          </>
        }
        color="secondary"
        size="small"
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
