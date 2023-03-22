import { api } from '@/config'
import axios, { type Axios } from 'axios'

interface ApiServiceParams {
  prefix?: string
  interceptors?: Array<(a: Axios) => void>
}

export class ApiService {
  constructor(params: ApiServiceParams) {
    const baseUrl = params.prefix ? api.baseUrl + params.prefix : api.baseUrl
    const axiosInstance = axios.create({ baseURL: baseUrl })

    if (params.interceptors) {
      params.interceptors.forEach((interceptor) => interceptor(axiosInstance))
    }

    this.httpClient = axiosInstance
  }

  public httpClient: Axios
}
