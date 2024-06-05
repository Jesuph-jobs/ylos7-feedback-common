import { emailSchema, mongoIDSchema, nameSchema, phoneSchema, stringDateSchema, urlSchema } from '^common/elements';

import { MyZodType, z } from '../defaultZod';

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
			firstName: nameSchema(firstName, 'First name'),
			lastName: nameSchema(lastName, 'Last name'),
			phone: phoneSchema(phone),
			profilePicture: urlSchema(profilePicture).optional(),
		})
		.openapi('Basic Student', { description: 'Basic student' });

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
			firstName: nameSchema(firstName, 'First name'),
			lastName: nameSchema(lastName, 'Last name'),
			phone: phoneSchema(phone),
			profilePicture: urlSchema(profilePicture).optional(),
			createdAt: stringDateSchema(createdAt),
			updatedAt: stringDateSchema(updatedAt),
		})
		.openapi('Student', { description: 'The student' });
