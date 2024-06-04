export type TimeType<T extends true | false> = T extends true ? Date : string;
