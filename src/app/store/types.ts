import { CaseType, FetchedCaseType } from "Entities/Case/types"
import { FilterGroup } from "Entities/Filter/types"

export type Store = {
    filters: string[],
    isLoadingCases: boolean,
    filteredCases: CaseType[],
}

export type FiltersReponseOK = {
    Error: null,
    Data: FilterGroup[],
}

export type CasesReponseOK = {
    Error: null,
    Data: FetchedCaseType[]
}

