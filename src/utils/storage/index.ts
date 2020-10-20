import { CreateStorageFuncParam, storageType, typeMethods } from './type';

// 定义cookie 默认过期时间
const defaultTime: number = 60 * 60 * 24 * 7;

export const createStorage = (
  { prefixKey = 'xxx', storage = sessionStorage } = {} as CreateStorageFuncParam
) => {
  class MyWebSorage {
    private storage: Storage;
    private prefixKey: string;
    private typeMap: Map<string, string>;

    constructor() {
      this.storage = storage;
      this.prefixKey = prefixKey;
      this.typeMap = new Map<string, string>();
    }

    public set(key: string, value: string, type?: storageType) {
      type && this.typeMap.set(this.getKey(key), type);
      this.storage.setItem(this.getKey(key), value);
    }

    public get(key: string) {
      const item = this.storage.getItem(this.getKey(key)) || '';
      const type = this.typeMap.get(this.getKey(key)) as storageType;
      return type ? typeMethods[type](item) : item;
    }

    public remove(key: string) {
      this.storage.removeItem(this.getKey(key));
    }

    public clear(): void {
      this.storage.clear();
    }

    public setCookie(
      name: string,
      value: string,
      expire: number | null = defaultTime
    ) {
      document.cookie = this.getKey(name) + '=' + value + '; Max-Age=' + expire;
    }

    public getCookie(name: string) {
      const cookieInfo = document.cookie.split('; ');
      for (const v of cookieInfo) {
        const arr = v.split('=');
        if (arr[0] === this.getKey(name)) {
          return arr[1];
        }
      }
      return '';
    }

    public removeCookie(key: string) {
      this.setCookie(key, '', -1);
    }

    public clearCookie() {
      const keys = document.cookie.match(/[^ =;]+(?==)/g);
      if (keys) {
        for (let i = keys.length; i--; ) {
          document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
        }
      }
    }

    private getKey(key: string): string {
      return `${this.prefixKey}_${key}`.toUpperCase();
    }
  }
  return new MyWebSorage();
};
