declare interface PublicStudentI {
	id: string;
	firstName: string;
	lastName: string;
	tag?: string;
	profilePicture?: string;
}
declare interface SelectedStudentI extends PublicStudentI {
	selected: boolean;
}
declare interface BasicStudentI extends Omit<PublicStudentI, 'id'> {
	email: string;
	phone?: string;
}
declare interface StudentI<ID = string, TimeT extends string | Date = string> extends TimeStampI<TimeT>, BasicStudentI {
	id: ID;
	selected?: boolean;
}
