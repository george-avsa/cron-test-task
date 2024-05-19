import { CasesReponseOK, FiltersReponseOK } from "App/store/store";
import axios from "axios";

const getRequest = (slug: string) => {
    return axios.get<CasesReponseOK | FiltersReponseOK>(`https://services.it-cron.ru/api/${slug}`, {
        headers: {
            'Accept-language': 'ru'
        }
    }
)};

const filters = getRequest('filters');
const cases = getRequest('cases');

export const fetchAll = () => {
    return axios.all([
        filters,
        cases,
    ])
        .then(axios.spread((data1, data2) => {
            const filterData = data1.data as FiltersReponseOK;
            const casesData = data2.data as CasesReponseOK;
            return {filterData, casesData};
        }
    ))
}