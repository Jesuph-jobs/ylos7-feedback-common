import { MyZodType, z } from '../defaultZod';
import { emailSchema, mongoIDSchema, otpSchema, passwordSchema } from '../elements';

import { NecessaryUserSchema } from './user';

export const OTPSessionSchema = ({ email }: Partial<Record<keyof OTPSessionI, ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<OTPSessionI>>(
			{
				email: emailSchema(email),
			},
			{
				description: 'A Recovery Session Schema',
				invalid_type_error: 'Recovery Session must be an object',
				required_error: 'Recovery Session is required',
			}
		)
		.openapi('Recovery_Session', { description: 'A Recovery Session Schema' });

export const OTPSessionSendSchema = () =>
	z
		.object<MyZodType<OTPSessionSendI>>(
			{
				otpCode: otpSchema({
					description: 'The OTP code',
					required: 'The OTP code is required',
				}),
				sessionId: mongoIDSchema({
					description: 'The session id',
					required: 'The session id is required',
				}),
			},
			{
				description: 'A Send Recovery Session request Schema',
				invalid_type_error: 'Send Recovery Session request must be an object',
				required_error: 'Send Recovery Session request is required',
			}
		)
		.openapi('Recovery_Session_Send', { description: 'A Send Recovery Session request Schema' });

export const ResetPasswordSchema = ({
	confirmPassword,
	password,
	otpCode,
	sessionId,
}: Partial<Record<keyof ResetPasswordI, ErrorsSchemaMsgI>> = {}) => {
	return z
		.object<MyZodType<ResetPasswordI>>({
			sessionId: mongoIDSchema({
				description: 'The session id',
				required: 'The session id is required',
				...(sessionId || null),
			}),
			password: passwordSchema({
				description: 'The password',
				required: 'The password is required',
				...(password || null),
			}),
			confirmPassword: passwordSchema({
				description: 'The confirm password',
				required: 'The confirm password is required',
				...(confirmPassword || null),
			}),
			otpCode: otpSchema({
				description: 'The OTP code',
				required: 'The OTP code is required',
				...(otpCode || null),
			}),
		})
		.openapi('Reset_Password', { description: 'A Reset Password request Schema' })
		.superRefine((data, ctx) => {
			if (data.password !== data.confirmPassword) {
				return ctx.addIssue({
					code: 'custom',
					message: 'The password and confirm password must match',
					path: ['confirmPassword'],
				});
			}
		});
};
// OTPSessionResponseI
export const OTPSessionResponseSchema = () =>
	z
		.object<MyZodType<OTPSessionResponseI>>(
			{
				sessionId: mongoIDSchema({
					description: 'The session id',
					required: 'The session id is required',
				}),
				user: NecessaryUserSchema(),
			},
			{
				description: 'A Recovery Session Response Schema',
				invalid_type_error: 'Recovery Session Response must be an object',
				required_error: 'Recovery Session Response is required',
			}
		)
		.openapi('Recovery_Session_Response', { description: 'A Recovery Session Response Schema' });
