import {
	OTPSessionResponseSchema,
	OTPSessionSchema,
	OTPSessionSendSchema,
	ResetPasswordSchema,
} from '../../models/otpSession';

export const DefaultOTPSessionSchema = OTPSessionSchema();
export const DefaultOTPSessionSendSchema = OTPSessionSendSchema();
export const DefaultResetPasswordSchema = ResetPasswordSchema();
export const DefaultOTPSessionResponseSchema = OTPSessionResponseSchema();
