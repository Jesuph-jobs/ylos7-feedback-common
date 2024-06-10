import { MyZodType, z } from '^common/defaultZod';
import { emailSchema } from '^common/elements';

import { LoginRequestSchema, RegisterRequestSchema } from '../generated/user';

export const CheckAuthShapeSchema = z.object<MyZodType<CheckAuthShapeI>>({
	// Body doit être vide
	body: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Body doit être vide',
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query doit être vide',
	}),
});

export const CheckEmailShapeSchema = z.object<MyZodType<CheckEmailShapeI>>({
	body: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Body doit être vide',
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query doit être vide',
	}),
	params: z.object({
		email: emailSchema(),
	}),
});

export const LoginRequestShapeSchema = z.object<MyZodType<LoginRequestShapeI>>({
	body: LoginRequestSchema,
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query doit être vide',
	}),
});

export const RegisterRequestShapeSchema = z.object<MyZodType<RegisterRequestShapeI>>({
	body: RegisterRequestSchema,
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query doit être vide',
	}),
});
