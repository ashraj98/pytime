import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { environment } from '../env';

export class HttpClient {
    private static _instance: AxiosInstance | undefined;

    private constructor() {}

    private static newInstance(baseURL: string) {
        const axiosInstance = axios.create({ baseURL });
        axiosInstance.interceptors.response.use(
            ({ data }: AxiosResponse) => data,
            (error: any) => Promise.reject(error),
        );
        return axiosInstance;
    }

    public static get instance(): AxiosInstance {
        if (!HttpClient._instance) {
            HttpClient._instance = this.newInstance(environment.api)
        }
        return HttpClient._instance;
    }
}
