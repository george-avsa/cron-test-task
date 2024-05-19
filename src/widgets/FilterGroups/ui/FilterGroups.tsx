import { $fetchedData } from "App/store/store";
import Filter, { FilterGroup } from "Entities/Filter/types";
import Animation from "Features/Animation/Animation";
import FilterList from "Widgets/FilterList/ui/FilterList";
import { useUnit } from "effector-react";

function Filter({ isFilterActive }: { isFilterActive: boolean }) {
  const filters: FilterGroup[] = useUnit($fetchedData).filters;

  return (
    <Animation
      baseClass="filter"
      conditionOnShow={isFilterActive}
      duration={500}
    >
      {filters
        .sort((a, b) => b.Filters.length - a.Filters.length)
        .map((filterGroup) => (
          <div className="filter__group" key={filterGroup.Id}>
            <h6 className="filter__group-name">{filterGroup.Name}</h6>
            <div className="filter__options">
              <FilterList filterGroup={filterGroup}></FilterList>
            </div>
          </div>
        ))}
    </Animation>
  );
}

export default Filter;
