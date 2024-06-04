declare interface UserLogInI {
	email: string;
	password: string;
	stay?: boolean;
}
interface UserAuthI {
	user: UserI;
	new?: boolean;
	token?: string;
}

declare interface UserRegistrationI extends Omit<UserLogInI, 'stay'> {
	firstName: string;
	lastName: string;
	confirmPassword: string;
}
