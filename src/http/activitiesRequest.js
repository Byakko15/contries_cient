import { handleError } from "../helpers/error"
import { api } from "./axiosInstance";


export const getActivities = async () => {
    try {
        const { data } = await api({
            url: "/activities"
        });

        return data;
    } catch (error) {
        const message = handleError(error);
        throw message
    }
}

export const postActivity = async (body) => {
    try {
        await api({
            method: "post",
            url: "/activities",
            data: body
        });
    } catch (error) {
        const message = handleError(error)
        throw message
    }
}