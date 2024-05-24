import { MyZodType, z } from '../defaultZod';

export const ValidationKeys: Readonly<[ValidationKeysI, ...ValidationKeysI[]]> = ['email', 'phone']; // Convert ValidationKeys to a tuple type
export const PathValidationSchema = (path: ErrorsSchemaMsgI = {}) =>
	z
		.enum(ValidationKeys, {
			// Use the converted tuple type
			description: path?.description || 'Path to validate',
			invalid_type_error: path?.invalid || 'Invalid path',
			required_error: path?.required || 'Path is required',
		})
		.optional();
export const ValidateRequestSchema = ({ key, path }: Partial<Record<keyof ValidateRequestI, ErrorsSchemaMsgI>> = {}) =>
	z.object<MyZodType<ValidateRequestI>>({
		key: z.string({
			description: key?.description || 'Key to validate',
			invalid_type_error: key?.invalid || 'Invalid key',
			required_error: key?.required || 'Key is required',
		}),
		path: PathValidationSchema(path),
	});
export const ResendValidationSchema = ({
	path,
}: Partial<Record<keyof ValidationResendRequestI, ErrorsSchemaMsgI>> = {}) =>
	z.object<MyZodType<ValidationResendRequestI>>({
		path: PathValidationSchema(path),
	});
