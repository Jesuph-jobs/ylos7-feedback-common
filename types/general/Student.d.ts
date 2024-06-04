declare interface StudentI<ID = string, TimeT extends string | Date = string> extends TimeStampI<TimeT> {
	id: ID;
	firstName: string;
	lastName: string;
	email: string;
	phone?: string;
	profilePicture?: string;
}
