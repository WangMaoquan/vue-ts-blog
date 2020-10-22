import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { RequestOptions, Result } from './types';

export abstract class AxiosTransform {
  // 请求之前处理配置
  public beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig;

  // 请求成功处理
  public transformRequestData?: (res: AxiosResponse<Result>, options: RequestOptions) => any;

  // 请求失败处理
  public requestCatch?: (e: Error) => Promise<any>;

  // 请求之前的拦截器
  public requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;

  // 请求之后的拦截器
  public responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

  // 请求之前的拦截器错误处理
  public requestInterceptorsCatch?: (error: Error) => void;

  // 请求之后的拦截器错误处理
  public responseInterceptorsCatch?: (error: Error) => void;
}
