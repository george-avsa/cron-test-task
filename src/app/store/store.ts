import { CaseType, FetchedCaseType } from "Entities/Case/types";
import Filter, { FilterGroup } from "Entities/Filter/types";
import { FetchedDataStoreType, fetchCases } from "Entities/store";
import { createEvent, createStore, forward } from "effector";

export type Store = {
    filters: string[],
    isLoadingCases: boolean,
    filteredCases: CaseType[],
}

const toggleFilters = (filters: string[], filterId: string): string[] => {
    if (filters.includes(filterId)) {
        return filters.filter(filter => filter !== filterId)
    } else {
        return [...filters, filterId];
    }
};

const changeCasesType = (cases: FetchedCaseType[]): CaseType[] => {
    return cases.map(caseObject => (
        {
            ...caseObject, 
            Filters: caseObject.Filters.map((filter: Filter) => filter.Id)
        }
    ))
}

export type FiltersReponseOK = {
    Error: null,
    Data: FilterGroup[],
}

export type CasesReponseOK = {
    Error: null,
    Data: FetchedCaseType[]
}

const setFetched = createEvent<FetchedCaseType[]>();

const removeLoader = createEvent();

forward({
    from: fetchCases.failData,
    to: removeLoader,
});

export const $fetchedData = createStore<FetchedDataStoreType>({
    filters: [],
    cases:[],
    fetchError: null,
}).on(fetchCases.doneData, (state, payload) => {
    return {
        ...state,
        filters: payload.filterData.Data as FilterGroup[], 
        cases: payload.casesData.Data as FetchedCaseType[], 
    }
}).on(fetchCases.failData, (state, error) => {
    return {
        ...state,
        fetchError: error,
    }
});

forward({
    from: fetchCases.doneData.map(payload => payload.casesData.Data),
    to: setFetched
});

export const toggleFilterEvent = createEvent<string>();

const filterCases = createEvent<string>(); 

export const resetFilters = createEvent<string>();

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
        }
    })
    .on(toggleFilterEvent, (state: Store, filterId: string) => {
        return {
            ...state,
            filters: toggleFilters(state.filters, filterId),
        }
    })
    .on(filterCases, (state, filterId) => {
        const {cases: fetchedCases} = $fetchedData.getState();
        const isRemoved = (state.filters.includes(filterId));
        if (state.filters.length === 0) {
            return {
                ...state,
                filteredCases: changeCasesType($fetchedData.getState().cases),
            } 
        }
        if (isRemoved && state.filters.length) {
            return {
                ...state,
                filteredCases: state.filteredCases.filter(caseObject => {
                    return caseObject.Filters.includes(filterId);
                })
            }
        }
        return {
            ...state,
            filteredCases: changeCasesType(fetchedCases).filter((caseObject) => {
                for (let i = 0; i < state.filters.length; i++) {
                    if (caseObject.Filters.includes(state.filters[i])) {
                        return true;
                    }
                }
                return false;
            })
        }
    })
    .on(removeLoader, (state) => {
        return {
            ...state,
            isLoadingCases: false,
        }
    })
    .on(resetFilters, (state) => {
        return {
            ...state,
            filters: [],
        }
    });

    $store.watch(state => {console.log(state)})

    forward({
        from: toggleFilterEvent,
        to: filterCases,
    });

    forward({
        from: resetFilters,
        to: filterCases,
    })