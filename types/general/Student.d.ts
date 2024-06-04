declare interface StudentI<TimeT extends string | Date = string> extends BasicUserI<TimeT> {
	id: string;
	phone?: string;
	profilePicture?: string;
}
