import { MyZodType, z } from '^common/defaultZod';
import { emailSchema, mongoIDSchema, nameSchema, phoneSchema, stringDateSchema, urlSchema } from '^common/elements';

export const basicStudentsSchema = ({
	email,
	firstName,
	lastName,
	phone,
	profilePicture,
}: Partial<Record<keyof BasicStudentI, ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<BasicStudentI>>({
			email: emailSchema(email),
			firstName: nameSchema(firstName, 'Prénom'),
			lastName: nameSchema(lastName, 'Nom de famille'),
			phone: phoneSchema(phone).optional(),
			tag: z.string().optional(),
			enabled: z.boolean().optional(),
			profilePicture: urlSchema(profilePicture).optional(),
		})
		.openapi('participant de base', { description: 'participant de base' });
export const basicStudentsFrenchSchema = ({
	email,
	firstName,
	lastName,
	phone,
	profilePicture,
}: Partial<Record<keyof BasicStudentI, ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<BasicStudentFrenchI>>({
			'adresse e-mail*': emailSchema(email),
			'prénom *': nameSchema(firstName, 'Prénom'),
			'nom de famille *': nameSchema(lastName, 'Nom de famille'),
			'numéro de téléphone': phoneSchema(phone).optional(),
			tag: z.string().optional(),
			'Photo de profil': urlSchema(profilePicture).optional(),
		})
		.openapi('participant de base', { description: 'participant de base' });

export const studentsSchema = ({
	id,
	email,
	firstName,
	lastName,
	phone,
	profilePicture,
	createdAt,
	updatedAt,
}: Partial<Record<keyof StudentI, ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<StudentI<string, string | Date>>>({
			id: mongoIDSchema(id),
			email: emailSchema(email),
			firstName: nameSchema(firstName, 'Prénom'),
			lastName: nameSchema(lastName, 'Nom de famille'),
			phone: phoneSchema(phone).optional(),
			tag: z.string().optional(),
			profilePicture: urlSchema(profilePicture).optional(),
			createdAt: stringDateSchema(createdAt),
			updatedAt: stringDateSchema(updatedAt),
			enabled: z.boolean().optional(),
			selected: z.boolean().optional(),
		})
		.openapi('participant', { description: 'le participant' });
