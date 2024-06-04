declare interface UserLogInI {
	email: string;
	password: string;
	stay?: boolean;
}
interface UserAuthI {
	user: UserI<string, string | Date>;
	new?: boolean;
	token?: string;
}

declare interface UserRegistrationI extends Omit<UserLogInI, 'stay' | 'password'> {
	firstName: string;
	lastName: string;
}
