export interface CreateStorageFuncParam {
  prefixKey: string;
  storage: Storage;
}

interface typeTransformer {
  typeString(storageValue: string): string;
  typeJson(storageValue: string): any;
  typeBoolean(storageValue: string): boolean;
  typeNumber(storageValue: string): number;
}

export const typeMethods: typeTransformer = {
  typeString: (storageValue: string) => {
    return storageValue;
  },
  typeJson: (storageValue: string) => {
    return JSON.parse(storageValue);
  },
  typeBoolean: (storageValue: string) => {
    return Boolean(storageValue);
  },
  typeNumber: (storageValue: string) => {
    return Number(storageValue);
  }
};

// sessionStorage localStorage  cookie 存的都是 string

export type storageType = keyof typeTransformer;
