import { OTPSessionSchema, OTPSessionSendSchema, ResetPasswordSchema } from '^common/models/otpSession';

import { MyZodType, z } from '../../defaultZod';

export const OTPSessionRequestSchema = ({
	email,
}: Partial<Record<keyof OTPSessionI | 'email', ErrorsSchemaMsgI>> = {}) =>
	z.object<MyZodType<OTPSessionShapeI>>({
		// body must be empty
		body: OTPSessionSchema({ email }),
		query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
			message: 'Query must be empty',
		}),
	});
export const SendOTPSessionSchema = () =>
	z.object<MyZodType<OTPSessionSendShapeI>>({
		body: OTPSessionSendSchema(),
		query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
			message: 'Query must be empty',
		}),
	});
export const SendOTPSessionGetSchema = () =>
	z.object<MyZodType<OTPSessionSendShapeI>>({
		query: OTPSessionSendSchema(),
		body: z.any().refine((query) => !query || Object.keys(query).length === 0, {
			message: 'Body must be empty',
		}),
	});
export const ResetPasswordRequestSchema = () =>
	z.object<MyZodType<ResetPasswordShapeI>>({
		body: ResetPasswordSchema(),
		query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
			message: 'Query must be empty',
		}),
	});
