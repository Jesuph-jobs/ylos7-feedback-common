declare interface CheckAuthShapeI {
	body: any;
	query: any;
}
declare interface CheckUsernameShapeI {
	body: any;
	query: any;
	params: {
		username: string;
	};
}
declare interface CheckEmailShapeI {
	body: any;
	query: any;
	params: {
		email: string;
	};
}
declare interface LoginRequestShapeI {
	body: UserLoginI;
	query: any;
}
declare interface RegisterRequestShapeI {
	body: UserRegistrationI;
	query: any;
}

declare interface RequestGoogleUrlShapeI {
	body: any;
	query: any;
}
declare interface GoogleLoginRequestShapeI {
	body: GoogleLogOnI;
	query: any;
}
