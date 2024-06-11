import { MyZodType, z } from '^common/defaultZod';
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
} from '^common/elements';

import { permissionSchema } from './permission';

/* --------------------------------- Schéma de connexion utilisateur --------------------------------- */
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
				description: 'Schéma de connexion utilisateur',
				invalid_type_error: 'Schéma de connexion utilisateur invalide',
				required_error: 'Le schéma de connexion utilisateur est requis',
			}
		)
		.openapi('Demande_de_connexion_utilisateur', { description: 'Schéma de connexion utilisateur' });
/* --------------------------------- Schéma d'inscription utilisateur --------------------------------- */
export const userRegisterSchema = ({
	email,
	firstName,
	lastName,
}: Partial<Record<keyof UserRegistrationI, ErrorsSchemaMsgI>> = {}) => {
	const schema = z
		.object<MyZodType<UserRegistrationI>>(
			{
				email: emailSchema(email),
				firstName: nameSchema(firstName, 'prénom'),
				lastName: nameSchema(lastName, 'nom de famille'),
			},
			{
				description: "Schéma d'inscription utilisateur",
				invalid_type_error: "Schéma d'inscription utilisateur invalide",
				required_error: "Le schéma d'inscription utilisateur est requis",
			}
		)
		.openapi("Demande_d'inscription_utilisateur", { description: "Schéma d'inscription utilisateur" });

	return schema;
};

/* --------------------------------- Schéma de mot de passe oublié utilisateur --------------------------------- */

/* --------------------------------- Schéma de document utilisateur --------------------------------- */

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
				firstName: nameSchema(firstName, 'prénom'),
				lastName: nameSchema(lastName, 'nom de famille'),
				enabled: booleanSchema(enabled),
				lastLogin: dateSchema(lastLogin).optional(),
				permissions: arraySchema<PermissionsIdEnum>(permissionSchema(permissions)),
			},
			{
				description: DocumentUserMsg.description || 'Schéma de document utilisateur',
				invalid_type_error: DocumentUserMsg.invalid || 'Schéma utilisateur invalide',
				required_error: DocumentUserMsg.required || 'Le schéma de document utilisateur est requis',
			}
		)
		.openapi('Document_utilisateur', { description: 'Schéma de document utilisateur' });
};
/* --------------------------------- Schéma utilisateur --------------------------------- */

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
		.object<MyZodType<UserI<string, Date | string>>>(
			{
				email: emailSchema(email),
				firstName: nameSchema(firstName),
				lastName: nameSchema(lastName),
				createdAt: stringDateSchema(createdAt),
				updatedAt: stringDateSchema(updatedAt),
				id: mongoIDSchema(id),
				permissions: arraySchema<PermissionsIdEnum>(permissionSchema(permissions)),
				profilePicture: urlSchema(profilePicture).optional(),
			},
			{
				description: PublicUserMsg.description || 'Schéma utilisateur public',
				invalid_type_error: PublicUserMsg.invalid || 'Schéma utilisateur invalide',
				required_error: PublicUserMsg.required || 'Le schéma utilisateur est requis',
			}
		)
		.openapi('Utilisateur_public', { description: 'Schéma utilisateur public' });

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
						description: 'Jeton utilisateur',
						invalid_type_error: 'Jeton invalide',
						required_error: 'Le jeton est requis',
					})
					.optional(),
				new: booleanSchema({
					description: "Si l'utilisateur est nouveau",
					invalid: 'Nouveau invalide',
					required: 'Nouveau est requis',
				}).optional(),
			},
			{
				description: "Schéma de réponse d'authentification utilisateur",
				invalid_type_error: "Schéma de réponse d'authentification utilisateur invalide",
				required_error: "Le schéma de réponse d'authentification utilisateur est requis",
			}
		)
		.openapi("Réponse_d'authentification_utilisateur", {
			description: "Schéma de réponse d'authentification utilisateur",
		});

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
				description: NecessaryUserMsg.description || 'Schéma utilisateur nécessaire',
				invalid_type_error: NecessaryUserMsg.invalid || 'Schéma utilisateur nécessaire invalide',
				required_error: NecessaryUserMsg.required || 'Le schéma utilisateur nécessaire est requis',
			}
		)
		.openapi('Utilisateur_nécessaire', { description: 'Schéma utilisateur nécessaire' });

export const BasicUserSchema = (
	{ email, firstName, lastName, createdAt, updatedAt }: Partial<Record<keyof BasicUserI, ErrorsSchemaMsgI>> = {},
	BasicUserMsg: ErrorsSchemaMsgI = {}
) =>
	z
		.object<MyZodType<BasicUserI<Date | string>>>(
			{
				email: emailSchema(email),
				firstName: nameSchema(firstName),
				lastName: nameSchema(lastName),
				createdAt: stringDateSchema(createdAt),
				updatedAt: stringDateSchema(updatedAt),
			},
			{
				description: BasicUserMsg.description || 'Schéma utilisateur de base',
				invalid_type_error: BasicUserMsg.invalid || 'Schéma utilisateur de base invalide',
				required_error: BasicUserMsg.required || 'Le schéma utilisateur de base est requis',
			}
		)
		.openapi('Utilisateur_de_base', { description: 'Schéma utilisateur de base' });
