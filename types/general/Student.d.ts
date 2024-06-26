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
	enabled?: boolean;
	email: string;
	phone?: string;
}
declare interface StudentI<ID = string, TimeT extends string | Date = string> extends TimeStampI<TimeT>, BasicStudentI {
	id: ID;
	selected?: boolean;
}
declare interface BasicStudentFrenchI {
	'prénom *': string;
	'nom de famille *': string;
	'adresse e-mail*': string;
	'numéro de téléphone'?: string;
	tag?: string;
	'Photo de profil'?: string;
}
