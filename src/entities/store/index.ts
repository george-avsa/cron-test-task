import { fetchAll } from "App/api";
import { FetchedCaseType } from "Entities/Case/types";
import { FilterGroup } from "Entities/Filter/types";
import { createEffect, createStore } from "effector";

export type FetchedDataStoreType = {
  filters: FilterGroup[];
  cases: FetchedCaseType[];
  fetchError: Error | null;
};

export const fetchCases = createEffect(async () => {
  return await fetchAll();
});

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
