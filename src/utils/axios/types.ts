import { AxiosRequestConfig } from 'axios';
import { AxiosTransform } from './axiosTransform';

export interface RequestOptions {
  joinParamsToUrl?: boolean; // 请求参数是否拼接到url
  formatDate?: boolean; // 格式化请求参数时间
  isTransformRequestResult?: boolean; // 是否处理请求结果
  joinPrefix?: boolean; // 是否加入url
  apiUrl?: string; // 接口地址， 不填则使用默认apiUrl
  errorMessageMode?: 'none' | 'modal';
}

export interface Result<T = any> {
  code: number;
  type: 'success' | 'error' | 'warning';
  message: string;
  result: T;
}

export interface CreateAxiosOptions extends AxiosRequestConfig {
  prefixUrl?: string;
  transform?: AxiosTransform;
  requestOptions?: RequestOptions;
}