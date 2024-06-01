declare interface UserI<UserID = string, TimeT extends string | Date = string>
	extends Omit<UserRegistrationI, 'password' | 'confirmPassword'>,
		TimeStampI<TimeT> {
	id: UserID;
	// validated: ValidatedElementsI;
}

declare interface UserAppsI {
	google: {
		id: string;
	};
}

declare interface StudentI extends UserI {
	profilePicture?: string;
}

declare interface AdminI extends UserI {
	permissions: Record<PermissionsNames, boolean>;
}

type PermissionsNames = 'read' | 'write';
