import { MyZodType, z } from '../defaultZod';
import { emailSchema, mongoIDSchema, passwordSchema, usernameSchema, uuidSchema } from '../elements';

import { NecessaryUserSchema } from './user';

export const RecoverySessionSchema = ({
	email,
	username,
}: Partial<Record<keyof RecoverySessionI | 'email', ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<RecoverySessionI>>(
			{
				username: z.union([usernameSchema(username), emailSchema(email)]),
			},
			{
				description: 'A Recovery Session Schema',
				invalid_type_error: 'Recovery Session must be an object',
				required_error: 'Recovery Session is required',
			}
		)
		.openapi('Recovery_Session', { description: 'A Recovery Session Schema' });

export const RecoverySessionSendSchema = () =>
	z
		.object<MyZodType<RecoverySessionSendI>>(
			{
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
	secretKey,
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
			secretKey: uuidSchema({
				description: 'The secret key',
				required: 'The secret key is required',
				...(secretKey || null),
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
// RecoverySessionResponseI
export const RecoverySessionResponseSchema = () =>
	z
		.object<MyZodType<RecoverySessionResponseI>>(
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
