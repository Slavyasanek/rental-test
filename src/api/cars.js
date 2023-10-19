import { instance } from "./instance";

export const getCars = async () => {
    const {data} = await instance.get('/cars')
    return data;
};

export const getCar = async (id) => {
    const {data} = await instance.get(`/cars/${id}`);
    return data;
};
