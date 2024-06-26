import { MyZodType, z } from '^common/defaultZod';
import { mongoIDSchema } from '^common/elements';

export const YLOS7_SERVER_JWT_PayloadSchema = ({
	id,
	exp,
	pk,
	issAt,
	issBy,
}: Partial<Record<keyof YLOS7_SERVER_JWT_Payload, ErrorsSchemaMsgI>> = {}) =>
	z.object<MyZodType<YLOS7_SERVER_JWT_Payload>>({
		exp: z.number({
			required_error: exp?.required || 'exp is required',
			invalid_type_error: exp?.invalid || 'exp must be a number',
			description: exp?.description || 'The expiration date of the token',
		}),
		id: mongoIDSchema(id),
		issAt: z.number({
			required_error: issAt?.required || 'issAt is required',
			invalid_type_error: issAt?.invalid || 'issAt must be a number',
			description: issAt?.description || 'The issue date of the token',
		}),
		pk: z.string({
			required_error: pk?.required || 'pk is required',
			invalid_type_error: pk?.invalid || 'pk must be a string',
			description: pk?.description || 'The public key of the user',
		}),
		issBy: z.string({
			required_error: issBy?.required || 'issBy is required',
			invalid_type_error: issBy?.invalid || 'issBy must be a string',
			description: issBy?.description || 'The issuer of the token',
		}),
	});
export const YLOS7_SERVER_JWT_Session_PayloadSchema = ({
	code,
	...rest
}: Partial<Record<keyof YLOS7_SERVER_JWT_Session_Payload, ErrorsSchemaMsgI>> = {}) =>
	YLOS7_SERVER_JWT_PayloadSchema({
		...rest,
	}).extend({
		code: z.string({
			required_error: code?.required || 'code is required',
			invalid_type_error: code?.invalid || 'code must be a string',
			description: code?.description || 'The code of the session',
		}),
	});
