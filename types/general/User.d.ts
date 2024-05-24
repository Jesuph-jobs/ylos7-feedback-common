declare interface UserI<UserID = string, TimeT extends string | Date = string>
	extends Omit<UserRegistrationI, 'password' | 'confirmPassword' | 'terms'>,
		TimeStampI<TimeT> {
	fullName: string;
	profilePicture?: string;
	id: UserID;
	validated: ValidatedElementsI;
}
declare interface UserDocumentI<T extends Omit<ValidationI, 'updatedAt'> = Omit<ValidationI, 'updatedAt'>>
	extends Omit<UserRegistrationI, 'confirmPassword' | 'terms'> {
	profilePicture?: string;
	enabled: boolean;
	lastLogin?: Date;
	validated: ValidatedElementsI<T>;
	apps: UserAppsI;
}
declare interface NecessaryUserI {
	fullName: string;
	firstName: string;
	lastName: string;
	phone?: string;
	profilePicture?: string;
	email: string;
}
declare interface UserAppsI {
	google: {
		id: string;
	};
}
