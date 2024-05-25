import { MyZodType, z } from '../defaultZod';
import {
	booleanSchema,
	dateSchema,
	emailSchema,
	mongoIDSchema,
	nameSchema,
	passwordSchema,
	phoneSchema,
	stringDateSchema,
	urlSchema,
	usernameSchema,
	validationSchema,
} from '../elements';

/* --------------------------------- User Login Schema --------------------------------- */
export const userLoginSchema = ({
	email,
	password,
	username,
	stay,
}: Partial<Record<keyof UserLogInI | 'email', ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<UserLogInI>>(
			{
				username: z.union([usernameSchema(username), emailSchema(email)]),
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

export const LoginOAuthRequestSchema = z.object<MyZodType<UserOAuthI>>({
	token: z.string({
		description: 'The token received from the OAuth provider',
		invalid_type_error: 'Invalid token',
		required_error: 'Token is required',
	}),
});
/* --------------------------------- User Register Schema --------------------------------- */
export const userRegisterSchema = ({
	username,
	email,
	password,
	firstName,
	lastName,
	phone,
	confirmPassword: confirmPasswordMsg = { description: 'The password confirmation' },
	terms,
}: Partial<Record<keyof UserRegistrationI, ErrorsSchemaMsgI>> = {}) => {
	const schema = z
		.object<MyZodType<UserRegistrationI>>(
			{
				username: usernameSchema(username),
				email: emailSchema(email),
				password: passwordSchema(password),
				confirmPassword: passwordSchema(password),
				firstName: nameSchema(firstName, 'firstName'),
				lastName: nameSchema(lastName, 'lastName'),
				phone: phoneSchema(phone).optional(),
				terms: booleanSchema(terms),
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
		phone,
		password,
		username,
		lastLogin,
		enabled,
		profilePicture,
	}: Partial<Record<keyof UserDocumentI, ErrorsSchemaMsgI>> = {},
	DocumentUserMsg: ErrorsSchemaMsgI = {}
) => {
	return z
		.object<MyZodType<UserDocumentI>>(
			{
				username: usernameSchema(username),
				email: emailSchema(email),
				password: passwordSchema(password),
				firstName: nameSchema(firstName, 'First name'),
				lastName: nameSchema(lastName, 'Last name'),
				phone: phoneSchema(phone).optional(),
				enabled: booleanSchema(enabled),
				lastLogin: dateSchema(lastLogin).optional(),
				profilePicture: urlSchema(profilePicture).optional(),
				validated: z.object<MyZodType<ValidatedElementsI<Omit<ValidationI, 'updatedAt'>>>>({
					email: validationSchema(),
					phone: validationSchema(),
				}),
				apps: z.object<MyZodType<UserAppsI>>({
					google: z.object<MyZodType<UserAppsI['google']>>({
						id: z.string(),
					}),
				}),
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
		phone,
		updatedAt,
		username,
		fullName,
		profilePicture,
	}: Partial<Record<keyof UserI, ErrorsSchemaMsgI>> = {},
	PublicUserMsg: ErrorsSchemaMsgI = {}
) =>
	z
		.object<MyZodType<UserI>>(
			{
				username: usernameSchema(username),
				email: emailSchema(email),
				firstName: nameSchema(firstName),
				lastName: nameSchema(lastName),
				phone: phoneSchema(phone).optional(),
				createdAt: stringDateSchema(createdAt),
				updatedAt: stringDateSchema(updatedAt),
				fullName: nameSchema(fullName),
				id: mongoIDSchema(id),
				profilePicture: urlSchema(profilePicture).optional(),
				validated: z.object<MyZodType<ValidatedElementsI<Omit<ValidationI, 'updatedAt'>>>>({
					email: validationSchema(),
					phone: validationSchema(),
				}),
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
	{
		email,
		firstName,
		fullName,
		lastName,
		phone,
		profilePicture,
	}: Partial<Record<keyof NecessaryUserI, ErrorsSchemaMsgI>> = {},
	NecessaryUserMsg: ErrorsSchemaMsgI = {}
) =>
	z
		.object<MyZodType<NecessaryUserI>>(
			{
				id: mongoIDSchema(),
				firstName: nameSchema(firstName),
				lastName: nameSchema(lastName),
				fullName: nameSchema(fullName),
				profilePicture: urlSchema(profilePicture).optional(),
				email: emailSchema(email),
				phone: phoneSchema(phone).optional(),
			},
			{
				description: NecessaryUserMsg.description || 'Necessary User Schema',
				invalid_type_error: NecessaryUserMsg.invalid || 'Invalid Necessary User Schema',
				required_error: NecessaryUserMsg.required || 'Necessary User Schema is required',
			}
		)
		.openapi('Necessary_User', { description: 'Necessary User Schema' });
