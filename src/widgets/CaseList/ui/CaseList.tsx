import { $store } from "App/store/store";
import { CaseType } from "Entities/Case/types";
import Case from "Entities/Case/ui/Case";
import { useUnit } from "effector-react";
import { useCaseArrays } from "../hooks/useCaseArrays";

function CasesList() {
  const { filteredCases } = useUnit($store);

  const [arrayCases1, arrayCases2] = useCaseArrays(filteredCases);

  return filteredCases.length ? (
    <div className="case-list">
      <div className="case-list__left">
        {arrayCases1.map((caseObject: CaseType) => {
          return <Case key={caseObject.Id} {...caseObject}></Case>;
        })}
      </div>
      <div className="case-list__right">
        {arrayCases2.map((caseObject: CaseType) => {
          return <Case key={caseObject.Id} {...caseObject}></Case>;
        })}
      </div>
    </div>
  ) : (
    <div className="empty-list">
      <p className="empty-list__no-cases">
        По Вашему запросу нету кейсов. Попробуйте убрать несколько фильтров!
      </p>
    </div>
  );
}

export default CasesList;
