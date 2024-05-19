import { CaseType } from "Entities/Case/types";
import { useEffect, useState } from "react";
import { divideCases } from "../lib/divideCases";

export function useCaseArrays(filteredCases: CaseType[]) {
    const [arrayCases1, setArrayCases1] = useState<CaseType[]>([]);
    const [arrayCases2, setArrayCases2] = useState<CaseType[]>([]);
    
    useEffect(() => {
        const [array1, array2] = divideCases(filteredCases);
        setArrayCases1(array1);
        setArrayCases2(array2);
    }, [filteredCases]);

    return [arrayCases1, arrayCases2];
}
