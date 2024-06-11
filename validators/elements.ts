import { ZodType } from 'zod';

import { MyZodType, z } from './defaultZod';

// nom d'utilisateur
export const usernameSchema = (usernameMsg?: ErrorsSchemaMsgI) =>
	z
		.string({
			invalid_type_error: usernameMsg?.invalid || "Ce n'est pas une chaîne de caractères",
			required_error: usernameMsg?.required || "Le nom d'utilisateur est requis",
			description: usernameMsg?.description || "Un nom d'utilisateur au format chaîne de caractères",
		})
		.trim()
		.min(4, usernameMsg?.small || "Le nom d'utilisateur doit comporter au moins 4 caractères")
		.max(35, usernameMsg?.big || "Le nom d'utilisateur ne peut pas dépasser 35 caractères")
		.regex(
			/^[a-zA-Z0-9_.-]+$/,
			usernameMsg?.invalid ||
				"Le nom d'utilisateur ne peut contenir que des lettres, des chiffres, des tirets bas, des points et des tirets"
		)
		.openapi("Nom d'utilisateur", {
			description: usernameMsg?.description || "Un nom d'utilisateur au format chaîne de caractères",
			example: 'nom_utilisateur',
			format: 'alphanumeric',
		});
// email
export const emailSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.string({
			invalid_type_error: msg?.invalid || "Ce n'est pas une chaîne de caractères",
			required_error: msg?.required || "L'adresse e-mail est requise",
			description: msg?.description || 'Une adresse e-mail au format chaîne de caractères',
		})
		.email(msg?.invalid || 'Adresse e-mail invalide')
		.openapi('Email', {
			description: msg?.description || 'Une adresse e-mail au format chaîne de caractères',
			example: 'nom_utilisateur@mail.com',
			format: 'email',
		});
// mot de passe
export const passwordSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.string({
			description: msg?.description || 'Un mot de passe au format chaîne de caractères',
			invalid_type_error: msg?.invalid || "Ce n'est pas une chaîne de caractères",
			required_error: msg?.required || 'Le mot de passe est requis',
		})
		.min(8, msg?.small || 'doit comporter au moins 8 caractères')
		.max(40, msg?.big || 'ne peut pas dépasser 40 caractères')
		.openapi('Mot de passe', {
			description: msg?.description || 'Un mot de passe au format chaîne de caractères',
			example: 'mot_de_passe',
			format: 'password',
		});
// téléphone
export const phoneSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.string({
			invalid_type_error: msg?.invalid || "Ce n'est pas une chaîne de caractères",
			required_error: msg?.required || 'Le numéro de téléphone est requis',
			description: msg?.description || 'Un numéro de téléphone au format chaîne de caractères',
		})
		.min(9, msg?.small || 'Le numéro de téléphone doit comporter au moins 9 caractères')
		.max(14, msg?.big || 'Le numéro de téléphone ne peut pas dépasser 14 caractères')
		.regex(
			/^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/,
			msg?.invalid || 'Le numéro de téléphone doit suivre le format +33 6 00 00 00 00 ou 06 00 00 00 00'
		)
		.openapi('Téléphone', {
			description: msg?.description || 'Un numéro de téléphone au format chaîne de caractères',
			example: '0550000000',
			format: 'phone',
		});
// nom
export const nameSchema = (msg?: ErrorsSchemaMsgI, attr: string = 'Nom') =>
	z
		.string({
			invalid_type_error: msg?.invalid || "Ce n'est pas une chaîne de caractères",
			required_error: msg?.required || `${attr} est requis`,
			description: msg?.description || 'Un nom au format chaîne de caractères',
		})
		.min(2, msg?.small || 'Le nom doit comporter au moins 2 caractères')
		.openapi(attr, {
			description: msg?.description || 'Un nom au format chaîne de caractères',
			example: attr,
			format: 'name',
		});

// id mongodb
export const mongoIDSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.string({
			required_error: msg?.required || 'id est requis',
			invalid_type_error: msg?.invalid || 'Id invalide',
			description: msg?.description || "L'id du document",
		})
		.refine((val) => val.match(/^[0-9a-fA-F]{24}$/), msg?.invalid || 'Id invalide')
		.openapi('ID', {
			description: msg?.description || "L'id du document",
			example: '5f8a0a3b1c9d4400007f0b9f',
			format: 'id',
		});
export const otpSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.string({
			required_error: msg?.required || 'OTP est requis',
			invalid_type_error: msg?.invalid || 'OTP invalide',
			description: msg?.description || 'OTP',
		})
		.refine((val) => val.match(/^\d{6}$/), msg?.invalid || 'OTP invalide')
		.openapi('OTP', {
			description: msg?.description || 'OTP',
			example: '123456',
			format: 'otp',
		});
export const uuidSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.string({
			required_error: msg?.required || 'id est requis',
			invalid_type_error: msg?.invalid || 'Uuid invalide',
			description: msg?.description || "L'id du document",
		})
		.uuid(msg?.invalid || 'Uuid invalide')
		.openapi('UUID', {
			description: msg?.description || "L'id du document",
			example: Math.random().toString(36).substring(2, 15),
			format: 'uuid',
		});

export const nullElementSchema = (msg?: ErrorsSchemaMsgI) =>
	z.null({
		invalid_type_error: msg?.invalid || "L'élément doit être nul",
		required_error: msg?.required || "L'élément est requis",
		description: msg?.description || 'Un élément nul',
	});
export const errorSchema = ({ message, error }: { message?: ErrorsSchemaMsgI; error?: ErrorsSchemaMsgI } = {}) =>
	z
		.object<MyZodType<ErrorResponseI>>({
			message: z.string({
				required_error: message?.required || "Le message d'erreur est requis",
				invalid_type_error: message?.invalid || "Message d'erreur invalide",
				description: message?.description || "Le message d'erreur",
			}),
			error: z.any({
				required_error: error?.required || 'Erreur requise',
				invalid_type_error: error?.invalid || 'Erreur invalide',
				description: error?.description || "L'erreur",
			}),
		})
		.openapi("Données d'erreur", {
			example: { message: message?.example || "Message d'erreur", error: error?.example || 'Erreur' },
			description: message?.description || "Le message d'erreur",
		});
export const booleanSchema = (msg?: ErrorsSchemaMsgI) =>
	z.boolean({
		required_error: msg?.required || 'Booléen requis',
		invalid_type_error: msg?.invalid || 'Booléen invalide',
		description: msg?.description || 'Une valeur booléenne',
	});
export const arraySchema = <X = any>(schema: ZodType<X>, msg?: ErrorsSchemaMsgI) =>
	z
		.array<ZodType<X>>(schema, {
			required_error: msg?.required || 'Tableau requis',
			invalid_type_error: msg?.invalid || 'Tableau invalide',
			description: msg?.description || 'Un tableau',
		})
		.openapi('Tableau', {
			description: msg?.description || 'Un tableau',
			format: 'arraynumeric',
		});
export const urlSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.string({
			required_error: msg?.required || 'Url requise',
			invalid_type_error: msg?.invalid || 'Url invalide',
			description: msg?.description || 'Une url',
		})
		.url(msg?.invalid || 'Url invalide')
		.or(z.literal(''))
		.openapi('Url', {
			description: msg?.description || 'Une url',
			format: 'url',
		});

export const dateSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.date({
			required_error: msg?.required || 'Date requise',
			invalid_type_error: msg?.invalid || 'Date invalide',
			description: msg?.description || 'Une date',
		})
		.openapi('Date', {
			description: msg?.description || 'Une date',
			format: 'date',
		});

export const stringDateSchema = (msg?: ErrorsSchemaMsgI) =>
	z.union([z.date(), z.string().refine((val) => !isNaN(Date.parse(val)), msg?.invalid || 'Date invalide')], {
		required_error: msg?.required || 'Date requise',
		invalid_type_error: msg?.invalid || 'Date invalide',
		description: msg?.description || 'Une date',
	}) as ZodType<Date> | ZodType<string>;
export const ratingSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.number({
			required_error: msg?.required || 'Note requise',
			invalid_type_error: msg?.invalid || 'Note invalide',
			description: msg?.description || 'Une note',
		})
		.min(0, "La note doit être d'au moins 0")
		.max(5, 'La note ne peut pas dépasser 5')
		.openapi('Note', {
			description: msg?.description || 'Une note',
			format: 'numeric',
		});
