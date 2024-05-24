declare type PrimitiveTypes = string | number | boolean | Date | null | undefined;

declare type DataI = Record<string, PrimitiveTypes>;

declare type DataTablesI<T extends DataI = { id: string }> = Record<keyof T, T[keyof T]>;
