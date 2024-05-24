declare interface EnumValue<T> {
	name: string;
	value: T;
}

interface FilterDef<T> {
	name: string;
	enums: EnumValue<T[Keys<T>]>[];
}
declare type FiltersI<T extends DataTablesI> = {
	[key in Keys<T>]?: FilterDef<T>;
};
declare type SelectFilterI<T extends DataTablesI> = FiltersI<T> & {
	selected: {
		[key in Keys<T>]?: string[];
	};
};
