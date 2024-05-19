import { $fetchedData, $store } from "App/store/store";
import { fetchCases } from "Entities/store";
import FetchError from "Shared/FetchError/ui/FetchError";
import Loader from "Shared/Loader/ui/Loader";
import RotatedBox from "Shared/RotatedBox/ui/RotatedBox";
import Cases from "Widgets/Cases/ui/Cases";
import { useUnit } from "effector-react";
import { useEffect } from "react";

function Main() {
    const {isLoadingCases} = useUnit($store);
    const {fetchError} = useUnit($fetchedData);

    useEffect(() => {
        fetchCases();
    }, []);

    return (
        <main className="main">
            <RotatedBox side={45} rotationDegree={45} margin={60} additionalClass="main__rotated-box"></RotatedBox>
            {isLoadingCases ? (
                <Loader></Loader>
            ) : fetchError ? (
                <FetchError/>
            ) : (
                <Cases></Cases>
            )}
        </main>
    );
}

export default Main;