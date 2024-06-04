import { MyZodType, z } from '../defaultZod';
import {
	arraySchema,
	booleanSchema,
	dateSchema,
	emailSchema,
	mongoIDSchema,
	nameSchema,
	passwordSchema,
	stringDateSchema,
	urlSchema,
} from '../elements';

import { permissionSchema } from './permission';

/* --------------------------------- User Login Schema --------------------------------- */
export const userLoginSchema = ({
	email,
	password,
	stay,
}: Partial<Record<keyof UserLogInI | 'email', ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<UserLogInI>>(
			{
				email: emailSchema(email),
				password: passwordSchema(password),
				stay: booleanSchema(stay).optional(),
			},
			{
				description: 'User Login Schema',
				invalid_type_error: 'Invalid User Login Schema',
				required_error: 'User Login Schema is required',
			}
		)
		.openapi('User_Login_Request', { description: 'User Login Schema' });
/* --------------------------------- User Register Schema --------------------------------- */
export const userRegisterSchema = ({
	email,
	password,
	firstName,
	lastName,
	confirmPassword: confirmPasswordMsg = { description: 'The password confirmation' },
}: Partial<Record<keyof UserRegistrationI, ErrorsSchemaMsgI>> = {}) => {
	const schema = z
		.object<MyZodType<UserRegistrationI>>(
			{
				email: emailSchema(email),
				password: passwordSchema(password),
				confirmPassword: passwordSchema(password),
				firstName: nameSchema(firstName, 'firstName'),
				lastName: nameSchema(lastName, 'lastName'),
			},
			{
				description: 'User Registration Schema',
				invalid_type_error: 'Invalid User Registration Schema',
				required_error: 'User Registration Schema is required',
			}
		)
		.openapi('User_Registration_Request', { description: 'User Registration Schema' });
	schema.superRefine(({ confirmPassword, password }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				code: 'custom',
				message: confirmPasswordMsg?.invalid || 'The passwords did not match',
			});
		}
	});
	return schema;
};

/* --------------------------------- User Forgot Password Schema --------------------------------- */

/* --------------------------------- User Document Schema --------------------------------- */

export const UserDocumentSchema = (
	{
		email,
		firstName,
		lastName,
		password,
		lastLogin,
		enabled,
		permissions,
	}: Partial<Record<keyof UserDocumentI, ErrorsSchemaMsgI>> = {},
	DocumentUserMsg: ErrorsSchemaMsgI = {}
) => {
	return z
		.object<MyZodType<UserDocumentI>>(
			{
				email: emailSchema(email),
				password: passwordSchema(password),
				firstName: nameSchema(firstName, 'First name'),
				lastName: nameSchema(lastName, 'Last name'),
				enabled: booleanSchema(enabled),
				lastLogin: dateSchema(lastLogin).optional(),
				validated: z.object<MyZodType<{ email: boolean }>>({
					email: booleanSchema(),
				}),
				permissions: arraySchema<PermissionsEnum>(permissionSchema(permissions)),
			},
			{
				description: DocumentUserMsg.description || 'User document Schema',
				invalid_type_error: DocumentUserMsg.invalid || 'Invalid User Schema',
				required_error: DocumentUserMsg.required || 'User document Schema is required',
			}
		)
		.openapi('User_Document', { description: 'User document Schema' });
};
/* --------------------------------- User Schema --------------------------------- */

export const PublicUserSchema = (
	{
		id,
		createdAt,
		email,
		firstName,
		lastName,
		updatedAt,
		profilePicture,
		permissions,
	}: Partial<Record<keyof UserI, ErrorsSchemaMsgI>> = {},
	PublicUserMsg: ErrorsSchemaMsgI = {}
) =>
	z
		.object<MyZodType<UserI>>(
			{
				email: emailSchema(email),
				firstName: nameSchema(firstName),
				lastName: nameSchema(lastName),
				createdAt: stringDateSchema(createdAt),
				updatedAt: stringDateSchema(updatedAt),
				id: mongoIDSchema(id),
				permissions: arraySchema<PermissionsEnum>(permissionSchema(permissions)),
				profilePicture: urlSchema(profilePicture).optional(),
			},
			{
				description: PublicUserMsg.description || 'Public User Schema',
				invalid_type_error: PublicUserMsg.invalid || 'Invalid User Schema',
				required_error: PublicUserMsg.required || 'User Schema is required',
			}
		)
		.openapi('Public_User', { description: 'Public User Schema' });

export const AuthUserSchema = (
	userMsgs: Partial<Record<keyof UserI, ErrorsSchemaMsgI>> = {},
	PublicUserMsg: ErrorsSchemaMsgI = {}
) =>
	z
		.object<MyZodType<UserAuthI>>(
			{
				user: PublicUserSchema(userMsgs, PublicUserMsg),
				token: z
					.string({
						description: 'User token',
						invalid_type_error: 'Invalid token',
						required_error: 'Token is required',
					})
					.optional(),
				new: booleanSchema({
					description: 'If the user is new',
					invalid: 'Invalid new',
					required: 'New is required',
				}).optional(),
			},
			{
				description: 'User Auth Response Schema',
				invalid_type_error: 'Invalid User Auth Response Schema',
				required_error: 'User Auth Response Schema is required',
			}
		)
		.openapi('User_Auth_Response', { description: 'User Auth Response Schema' });

export const NecessaryUserSchema = (
	{ email, firstName, lastName }: Partial<Record<keyof NecessaryUserI, ErrorsSchemaMsgI>> = {},
	NecessaryUserMsg: ErrorsSchemaMsgI = {}
) =>
	z
		.object<MyZodType<NecessaryUserI>>(
			{
				firstName: nameSchema(firstName),
				lastName: nameSchema(lastName),
				email: emailSchema(email),
			},
			{
				description: NecessaryUserMsg.description || 'Necessary User Schema',
				invalid_type_error: NecessaryUserMsg.invalid || 'Invalid Necessary User Schema',
				required_error: NecessaryUserMsg.required || 'Necessary User Schema is required',
			}
		)
		.openapi('Necessary_User', { description: 'Necessary User Schema' });
