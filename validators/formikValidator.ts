import { ZodError, ZodTypeAny } from 'zod';

export function SchemaValidator<T>(schema: ZodTypeAny) {
	return (values: T) => {
		try {
			schema.parse(values) as T;
		} catch (error) {
			if (error instanceof ZodError) {
				return error.formErrors.fieldErrors;
				// eslint-disable-next-line no-console
			} else console.error(error);
		}
	};
}
export function SchemaValidatorZodError<T>(schema: ZodTypeAny) {
	return (values: T) => {
		try {
			schema.parse(values) as T;
		} catch (error) {
			if (error instanceof ZodError) {
				return error;
				// eslint-disable-next-line no-console
			} else console.error(error);
		}
	};
}
