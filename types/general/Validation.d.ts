declare interface ValidationI {
	value: boolean;
	updatedAt: Date;
}

declare interface ValidationResendRequestI {
	path?: ValidationKeysI;
}
declare interface ValidateRequestI extends ValidationResendRequestI {
	key: string;
}
