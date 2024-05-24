declare interface RecoverySessionI {
	// username or email
	username: string;
}
declare interface RecoverySessionSendI {
	sessionId: string;
}
declare interface ResetPasswordI {
	sessionId: string;
	secretKey: string;
	password: string;
	confirmPassword: string;
}
declare interface RecoverySessionResponseI {
	sessionId: string;
	user: NecessaryUserI;
}
