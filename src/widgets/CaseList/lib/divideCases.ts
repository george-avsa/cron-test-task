import { CaseType } from "Entities/Case/types";

export function divideCases(array: CaseType[]): CaseType[][] {
  let dividerIndex = array.length / 2;
  array.length % 2 !== 0 && ++dividerIndex;
  return [
    array.slice(0, dividerIndex),
    array.slice(dividerIndex, array.length),
  ];
}
