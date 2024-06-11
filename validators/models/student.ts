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
			phone: phoneSchema(phone),
			tag: z.string().optional(),
			profilePicture: urlSchema(profilePicture).optional(),
		})
		.openapi('Étudiant de base', { description: 'Étudiant de base' });

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
			phone: phoneSchema(phone),
			tag: z.string().optional(),
			profilePicture: urlSchema(profilePicture).optional(),
			createdAt: stringDateSchema(createdAt),
			updatedAt: stringDateSchema(updatedAt),
			selected: z.boolean().optional(),
		})
		.openapi('Étudiant', { description: "L'étudiant" });
