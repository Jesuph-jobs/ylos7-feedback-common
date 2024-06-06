declare interface UserAfterRegistrationI {
	permissions: PermissionsIdEnum[];
}
declare interface BasicUserI<TimeT extends string | Date = string>
	extends Omit<UserRegistrationI, 'password' | 'confirmPassword'>,
		TimeStampI<TimeT> {}
declare interface UserI<UserID = string, TimeT extends string | Date = string>
	extends BasicUserI<TimeT>,
		UserAfterRegistrationI {
	id: UserID;
	profilePicture?: string;
}

declare interface UserDocumentI extends UserRegistrationI, UserAfterRegistrationI {
	// profilePicture?: string;
	password: string;
	enabled: boolean;
	lastLogin?: Date;
	/* validated: {
		email: boolean;
	}; */
}
declare interface NecessaryUserI {
	firstName: string;
	lastName: string;
	email: string;
}

declare interface UserPermissionI {
	permission: PermissionsIdEnum;
}
