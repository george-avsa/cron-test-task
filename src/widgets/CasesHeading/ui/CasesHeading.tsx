import { $fetchedData, $store, resetFilters } from "App/store/store";
import { $visibiltyStore, toggleVisibilty } from "App/store/visibiltyStore";
import IntercativeButton from "Shared/InteractiveButton/ui/InteractiveButton";
import { useUnit } from "effector-react";

function CasesHeading() {

    const {filters: fetchedFilters} = useUnit($fetchedData);
    const {filters} = useUnit($store);
    const isFilterVisible = useUnit($visibiltyStore).isFilterVisible;

    return (
        <div className="cases__heading">
            <h1 className="cases__title">Кейсы</h1>
            {fetchedFilters.length && (
                <div className="cases__filter-buttons">
                    {filters.length ? (
                        <IntercativeButton
                            opposite
                            isActive={isFilterVisible}
                            handleClick={() => resetFilters('')}
                            additionalClass="cases__filter-button"
                        >Очистить</IntercativeButton>
                    ) : null}
                    <IntercativeButton
                    isActive={isFilterVisible}
                    handleClick={() => toggleVisibilty({isFilterVisible: !isFilterVisible})}
                    additionalClass="cases__filter-button"
                    >Фильтры</IntercativeButton>
                </div>
            )}
        </div>
    );
}

export default CasesHeading;