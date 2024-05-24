declare type Keys<T extends object> = Exclude<keyof T, symbol | number>;
