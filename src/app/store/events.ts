import { FetchedCaseType } from "Entities/Case/types";
import { createEvent } from "effector";

export const setFetched = createEvent<FetchedCaseType[]>();

export const removeLoader = createEvent();

export const toggleFilterEvent = createEvent<string>();

export const filterCases = createEvent<string>();

export const resetFilters = createEvent<string>();
