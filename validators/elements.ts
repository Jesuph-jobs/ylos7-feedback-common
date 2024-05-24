import { ZodType } from 'zod';

import { MyZodType, z } from './defaultZod';

// username
export const usernameSchema = (usernameMsg?: ErrorsSchemaMsgI) =>
	z
		.string({
			invalid_type_error: usernameMsg?.invalid || 'Not a string',
			required_error: usernameMsg?.required || 'Username is required',
			description: usernameMsg?.description || 'A username in string format',
		})
		.trim()
		.min(4, usernameMsg?.small || 'Username must be at least 4 characters long')
		.max(35, usernameMsg?.big || 'Username cannot be longer than 35 characters')
		.regex(
			/^[a-zA-Z0-9_.-]+$/,
			usernameMsg?.invalid || 'Username can only contain letters, numbers, underscores, periods, and hyphens'
		)
		.openapi('Username', {
			description: usernameMsg?.description || 'A username in string format',
			example: 'username',
			format: 'alphanumeric',
		});
// email
export const emailSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.string({
			invalid_type_error: msg?.invalid || 'Not a string',
			required_error: msg?.required || 'Email is required',
			description: msg?.description || 'An email in string format',
		})
		.email(msg?.invalid || 'Invalid email address')
		.openapi('Email', {
			description: msg?.description || 'An email in string format',
			example: 'username@mail.com',
			format: 'email',
		});
// password
export const passwordSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.string({
			description: msg?.description || 'A password in string format',
			invalid_type_error: msg?.invalid || 'Not a string',
			required_error: msg?.required || 'Password is required',
		})
		.min(8, msg?.small || 'must be at least 8 characters long')
		.max(40, msg?.big || 'cannot be longer than 40 characters')
		.openapi('Password', {
			description: msg?.description || 'A password in string format',
			example: 'password',
			format: 'password',
		});
// phone
export const phoneSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.string({
			invalid_type_error: msg?.invalid || 'Not a string',
			required_error: msg?.required || 'Phone number is required',
			description: msg?.description || 'A phone number in string format',
		})
		.min(9, msg?.small || 'Phone number must be at least 9 characters long')
		.max(14, msg?.big || 'Phone number cannot be longer than 14 characters')
		.regex(/^(00213|\+213|0)(5|6|7)[0-9]{8}$/, msg?.invalid || 'Phone number can only contain numbers')
		.openapi('Phone', {
			description: msg?.description || 'A phone number in string format',
			example: '0550000000',
			format: 'phone',
		});
// name
export const nameSchema = (msg?: ErrorsSchemaMsgI, attr: string = 'Name') =>
	z
		.string({
			invalid_type_error: msg?.invalid || 'Not a string',
			required_error: msg?.required || `${attr} is required`,
			description: msg?.description || 'A name in string format',
		})
		.min(2, msg?.small || 'Name must be at least 2 characters long')
		.openapi(attr, {
			description: msg?.description || 'A name in string format',
			example: attr,
			format: 'name',
		});
// string date
export const stringDateSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.string({
			invalid_type_error: msg?.invalid || 'Not a string',
			required_error: msg?.required || 'Date is required',
			description: msg?.description || 'A date in string format',
		})
		.refine((val) => !isNaN(Date.parse(val)), msg?.invalid || 'Invalid date');
// mongodb id
export const mongoIDSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.string({
			required_error: msg?.required || 'id is required',
			invalid_type_error: msg?.invalid || 'Invalid id',
			description: msg?.description || 'The id of the document',
		})
		.refine((val) => val.match(/^[0-9a-fA-F]{24}$/), msg?.invalid || 'Invalid id')
		.openapi('ID', {
			description: msg?.description || 'The id of the document',
			example: '5f8a0a3b1c9d4400007f0b9f',
			format: 'id',
		});
export const uuidSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.string({
			required_error: msg?.required || 'id is required',
			invalid_type_error: msg?.invalid || 'Invalid id',
			description: msg?.description || 'The id of the document',
		})
		.regex(/^[0-9a-zA-Z]{10,15}$/, msg?.invalid || 'Invalid id')
		.openapi('UUID', {
			description: msg?.description || 'The id of the document',
			example: Math.random().toString(36).substring(2, 15),
			format: 'uuid',
		});

export const nullElementSchema = (msg?: ErrorsSchemaMsgI) =>
	z.null({
		invalid_type_error: msg?.invalid || 'Element must be null',
		required_error: msg?.required || 'Element is required',
		description: msg?.description || 'A null element',
	});
export const errorSchema = ({ message, error }: { message?: ErrorsSchemaMsgI; error?: ErrorsSchemaMsgI } = {}) =>
	z
		.object<MyZodType<ErrorResponseI>>({
			message: z.string({
				required_error: message?.required || 'Error message is required',
				invalid_type_error: message?.invalid || 'Invalid error message',
				description: message?.description || 'The error message',
			}),
			error: z.any({
				required_error: error?.required || 'Error is required',
				invalid_type_error: error?.invalid || 'Invalid error',
				description: error?.description || 'The error',
			}),
		})
		.openapi('Error_Data', {
			example: { message: message?.example || 'Error message', error: error?.example || 'Error' },
			description: message?.description || 'The error message',
		});
export const booleanSchema = (msg?: ErrorsSchemaMsgI) =>
	z.boolean({
		required_error: msg?.required || 'Boolean is required',
		invalid_type_error: msg?.invalid || 'Invalid boolean',
		description: msg?.description || 'A boolean value',
	});
export const arraySchema = <X = any>(schema: ZodType<X>, msg?: ErrorsSchemaMsgI) =>
	z
		.array<ZodType<X>>(schema, {
			required_error: msg?.required || 'Array is required',
			invalid_type_error: msg?.invalid || 'Invalid array',
			description: msg?.description || 'An array',
		})
		.openapi('Array', {
			description: msg?.description || 'An array',
			format: 'array',
		});
export const urlSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.string({
			required_error: msg?.required || 'Url is required',
			invalid_type_error: msg?.invalid || 'Invalid url',
			description: msg?.description || 'A url',
		})
		.url(msg?.invalid || 'Invalid url')
		.or(z.literal(''))
		.openapi('Url', {
			description: msg?.description || 'A url',
			format: 'url',
		});
/* example of use
arraySchema<UserAuthI>(
	z.object<MyZodType<UserAuthI>>({
		password: passwordSchema(),
		username: usernameSchema(),
	})
); */

export const statusProductSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.enum(['active', 'inactive'], {
			invalid_type_error: msg?.invalid || 'Invalid product status',
			required_error: msg?.required || 'Product status is required',
			description: msg?.description || 'The status of the product',
		})
		.openapi('Product_Status', {
			description: msg?.description || 'The status of the product',
			format: 'active | inactive',
		});

export const statusLocationSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.enum(['active', 'inactive'], {
			invalid_type_error: msg?.invalid || 'Invalid Location status',
			required_error: msg?.required || 'Location status is required',
			description: msg?.description || 'The status of the Location',
		})
		.openapi('Location_Status', {
			description: msg?.description || 'The status of the Location',
			format: 'active | inactive',
		});

export const weightUnitSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.enum(['kg', 'g', 'lb', 'oz'], {
			invalid_type_error: msg?.invalid || 'Invalid weight unit',
			required_error: msg?.required || 'Weight unit is required',
			description: msg?.description || 'The unit of the weight',
		})
		.openapi('Weight_Unit', {
			description: msg?.description || 'The unit of the weight',
			format: 'kg | g | lb | oz',
		});

export const priceSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.string({
			invalid_type_error: msg?.invalid || 'Not a string',
			required_error: msg?.required || 'Price is required',
			description: msg?.description || 'A price in string format',
		})
		.refine((data) => !isNaN(Number(data)), msg?.invalid || 'Price should be a numeric string')
		.openapi('Price', {
			description: msg?.description || 'A price in string format',
			format: 'price',
		});

export const weightSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.string({
			invalid_type_error: msg?.invalid || 'Not a string',
			required_error: msg?.required || 'Weight is required',
			description: msg?.description || 'A weight in string format',
		})
		.refine((data) => !isNaN(Number(data)), msg?.invalid || 'Weight should be a numeric string')
		.openapi('Weight', {
			description: msg?.description || 'A weight in string format',
			format: 'weight',
		});

export const dateSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.date({
			required_error: msg?.required || 'Date is required',
			invalid_type_error: msg?.invalid || 'Invalid date',
			description: msg?.description || 'A date',
		})
		.openapi('Date', {
			description: msg?.description || 'A date',
			format: 'date',
		});

export const descriptionSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.string({
			required_error: msg?.required || 'Description is required',
			invalid_type_error: msg?.invalid || 'Invalid description',
			description: msg?.description || 'A description',
		})
		.openapi('Description', {
			description: msg?.description || 'A description',
			format: 'description',
		});

export const quantitySchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.number({
			required_error: msg?.required || 'Number is required',
			invalid_type_error: msg?.invalid || 'Invalid number',
			description: msg?.description || 'A number',
		})
		.refine((data) => data > 0, msg?.invalid || 'Number must be positive')
		.openapi('Quantity', {
			description: msg?.description || 'A number',
			format: 'quantity',
		});

export const validationSchema = () =>
	z.object<MyZodType<Omit<ValidationI, 'updatedAt'>>>({
		value: booleanSchema(),
	});
