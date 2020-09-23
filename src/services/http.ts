import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { environment } from '../env';

class HttpClient {
    private static axios: AxiosInstance | undefined;

    private static newInstance(baseURL: string) {
      const axiosInstance = axios.create({ baseURL });
      axiosInstance.interceptors.response.use(
        ({ data }: AxiosResponse) => data,
        (error: any) => Promise.reject(error),
      );
      return axiosInstance;
    }

    public static get instance(): AxiosInstance {
      if (!HttpClient.axios) {
        HttpClient.axios = this.newInstance(environment.api);
      }
      return HttpClient.axios;
    }
}
export default HttpClient;
