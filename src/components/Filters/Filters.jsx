import styles from './filters.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const Filters = ({ filters, selectedFilters, selectFilter, resetAllFilters, applyAllFilters }) => {
  const disabledFilters = selectedFilters.reduce((acc, item) => [...acc, ...item.incompatible_options], []);

  return (
    <div className={cx('filters')}>
      <div className={cx('header')}>
        <h2 className={cx('title')}>Фильтры</h2>
      </div>
      <div className={cx('content')}>
        {filters.map((item) => (
          <div
            className={cx('section')}
            key={item.id}
          >
            <h4 className={cx('section-name')}>{item.label}</h4>
            <div className={cx('filters-box')}>
              {item.options.map((filter) => (
                <span
                  className={cx('filter-name', {
                    selected: selectedFilters.includes(filter),
                    disabled: disabledFilters?.includes(filter.id),
                  })}
                  key={filter.id}
                  onClick={() => selectFilter(filter)}
                >
                  {filter.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={cx('buttons')}>
        <Button
          content="Сбросить"
          color="primary"
          size="fullWidth"
          onClick={resetAllFilters}
        />
        <Button
          content="Применить"
          color="primary"
          size="fullWidth"
          onClick={applyAllFilters}
        />
      </div>
    </div>
  );
};

export default Filters;
