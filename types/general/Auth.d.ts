declare interface UserLogInI {
	username: string;
	password: string;
	stay?: boolean;
}
declare interface UserOAuthI {
	token: string;
}
declare interface UserAuthI {
	user: UserI;
	new?: boolean;
	token?: string;
}
declare type UserTokenI = string;

declare interface UserRegistrationI extends Omit<UserLogInI, 'stay'> {
	email: string;
	firstName: string;
	lastName: string;
	phone?: string;
	confirmPassword: string;
	terms: boolean;
}
declare interface UserGoogleRegistrationI extends Omit<UserRegistrationI, 'stay' | 'terms' | 'confirmPassword'> {
	profilePicture?: string;
	googleId: string;
}
declare type ValidationKeysI = 'email' | 'phone';
declare type ValidatedElementsI<T extends Omit<ValidationI, 'updatedAt'> = Omit<ValidationI, 'updatedAt'>> = Record<
	ValidationKeysI,
	T
>;
declare interface OAuthRequestQueryI {
	issFor?: A9raAppsI;
}
/* ----------------------- Google auth -----------------------*/
declare interface GoogleAuthorizationUrlRequestI {}
declare interface GoogleLogOnI {
	code: string;
}
