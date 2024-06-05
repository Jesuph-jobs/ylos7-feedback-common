declare interface BasicStudentI {
	firstName: string;
	lastName: string;
	email: string;
	phone?: string;
	profilePicture?: string;
}
declare interface StudentI<ID = string, TimeT extends string | Date = string> extends TimeStampI<TimeT>, BasicStudentI {
	id: ID;
}
