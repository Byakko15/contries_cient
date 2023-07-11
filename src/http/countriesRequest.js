import { handleError } from "../helpers/error"
import { api } from "./axiosInstance";


export const getCountries = async (name) => {
    try {
        const { data } = await api({
            url: "/countries",
            params: {
                name
            }
        });
        return data;
    } catch (error) {
        const message = handleError(error);
        throw message
    }
}

export const getCountryById = async (id) => {
    try {
        const { data } = await api({
            url: `/countries/${id}`,
        });
        return data;
    } catch (error) {
        const message = handleError(error);
        throw message
    }
}