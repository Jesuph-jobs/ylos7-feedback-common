declare interface CheckAuthShapeI {
	body: any;
	query: any;
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
