import { FetchedCaseType } from "Entities/Case/types";
import { FilterGroup } from "Entities/Filter/types";
import { FetchedDataStoreType, fetchCases } from "Entities/store";
import { createStore, forward } from "effector";
import {
  filterCases,
  removeLoader,
  resetFilters,
  setFetched,
  toggleFilterEvent,
} from "./events";
import { changeCasesType, getfilteredCases, toggleFilters } from "./helpers";
import { Store } from "./types";

export const $fetchedData = createStore<FetchedDataStoreType>({
  filters: [],
  cases: [],
  fetchError: null,
})
  .on(fetchCases.doneData, (state, payload) => {
    return {
      ...state,
      filters: payload.filterData.Data as FilterGroup[],
      cases: payload.casesData.Data as FetchedCaseType[],
    };
  })
  .on(fetchCases.failData, (state, error) => {
    return {
      ...state,
      fetchError: error,
    };
  });

export const $store = createStore<Store>({
  filters: [],
  filteredCases: [],
  isLoadingCases: true,
})
  .on(setFetched, (state: Store, cases: FetchedCaseType[]) => {
    return {
      ...state,
      isLoadingCases: false,
      filteredCases: changeCasesType(cases),
    };
  })
  .on(toggleFilterEvent, (state: Store, filterId: string) => {
    return {
      ...state,
      filters: toggleFilters(state.filters, filterId),
    };
  })
  .on(filterCases, (state, filterId) => {
    const { cases: fetchedCases } = $fetchedData.getState();
    const isRemoved = state.filters.includes(filterId);
    return getfilteredCases(state, filterId, fetchedCases, isRemoved);
  })
  .on(removeLoader, (state) => {
    return {
      ...state,
      isLoadingCases: false,
    };
  })
  .on(resetFilters, (state) => {
    return {
      ...state,
      filters: [],
    };
  });

forward({
  from: toggleFilterEvent,
  to: filterCases,
});

forward({
  from: resetFilters,
  to: filterCases,
});

forward({
  from: fetchCases.failData,
  to: removeLoader,
});

forward({
  from: fetchCases.doneData.map((payload) => payload.casesData.Data),
  to: setFetched,
});
