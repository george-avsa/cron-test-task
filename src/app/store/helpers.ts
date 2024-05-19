import { CaseType, FetchedCaseType } from "Entities/Case/types";
import Filter from "Entities/Filter/types";
import { Store } from "./types";

export const toggleFilters = (filters: string[], filterId: string): string[] => {
    if (filters.includes(filterId)) {
        return filters.filter(filter => filter !== filterId)
    } else {
        return [...filters, filterId];
    }
};

export const changeCasesType = (cases: FetchedCaseType[]): CaseType[] => {
    return cases.map(caseObject => (
        {
            ...caseObject, 
            Filters: caseObject.Filters.map((filter: Filter) => filter.Id)
        }
    ))
}

export const getfilteredCases = (state: Store, filterId: string, fetchedCases: FetchedCaseType[], isRemoved: boolean) => {
    if (state.filters.length === 0) {
        return {
            ...state,
            filteredCases: changeCasesType(fetchedCases),
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
}