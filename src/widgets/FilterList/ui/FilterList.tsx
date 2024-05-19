import { toggleFilterEvent } from "App/store/events";
import { $store } from "App/store/store";
import Filter, { FilterGroup } from "Entities/Filter/types";
import { useUnit } from "effector-react";

function FilterList({ filterGroup }: { filterGroup: FilterGroup }) {
  const { filters: selectedFilters } = useUnit($store);

  const handleFilterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget as HTMLButtonElement;
    if (button.dataset.id) {
      toggleFilterEvent(button.dataset.id);
    }
  };

  return (
    <>
      {filterGroup.Filters.map((filter: Filter) => {
        const isActive = selectedFilters.includes(filter.Id);
        return (
          <button
            className={`filter__item ${isActive ? "filter__item--active" : ""}`}
            key={filter.Id}
            data-id={filter.Id}
            onClick={handleFilterClick}
          >
            {filter.Name}
          </button>
        );
      })}
    </>
  );
}

export default FilterList;
