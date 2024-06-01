interface LabelI<T> {
	name?: string;
	render?: (element: T[keyof T] | null, props: T, i: number) => React.ReactNode | string;
}
declare type LableKeys<T> = Exclude<string, Keys<T>> | Keys<T>;

declare type LabelsI<T> = Record<LableKeys<T>, LabelI<T> | true>;

type SortOption<T> = {
	key: keyof T;
	label: string;
};
