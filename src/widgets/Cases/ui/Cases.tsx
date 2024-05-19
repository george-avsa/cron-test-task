import { $visibiltyStore } from "App/store/visibiltyStore";
import CasesList from "Widgets/CaseList/ui/CaseList";
import CasesHeading from "Widgets/CasesHeading/ui/CasesHeading";
import Filters from "Widgets/FilterGroups/ui/FilterGroups";
import { useUnit } from "effector-react";

function Cases() {
  const { isFilterVisible } = useUnit($visibiltyStore);

  return (
    <div className="cases">
      <div className="cases__content">
        <CasesHeading></CasesHeading>
        <Filters isFilterActive={isFilterVisible}></Filters>
        <CasesList></CasesList>
      </div>
    </div>
  );
}

export default Cases;
