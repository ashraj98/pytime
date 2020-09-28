import axios, { AxiosInstance } from 'axios';
import { environment } from '../env';

class HttpClient {
    private static axios: AxiosInstance | undefined;

    private static newInstance(baseURL: string) {
      return axios.create({ baseURL });
    }

    public static get instance(): AxiosInstance {
      if (!HttpClient.axios) {
        HttpClient.axios = this.newInstance(environment.api);
      }
      return HttpClient.axios;
    }
}
export default HttpClient;
