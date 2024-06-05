import { MyZodType, z } from '^common/defaultZod';
import { emailSchema, mongoIDSchema, nameSchema, phoneSchema, urlSchema } from '^common/elements';
import { basicStudentsSchema } from '^common/models/student';

import { GetUserShapeSchema } from './user';

export const GetStudentShapeSchema = GetUserShapeSchema;

export const UpdateStudentShapeSchema = z.object<MyZodType<UpdateStudentShapeI>>({
	body: z.object({
		firstName: nameSchema().optional(),
		lastName: nameSchema().optional(),
		email: emailSchema().optional(),
		phone: phoneSchema().optional(),
		profilePicture: urlSchema().optional(),
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query must be empty',
	}),
	params: z.object({
		id: mongoIDSchema(),
	}),
});

export const CreateStudentShapeSchema = z.object<MyZodType<CreateStudentShapeI>>({
	body: basicStudentsSchema(),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query must be empty',
	}),
	params: z.any().refine((params) => !params || Object.keys(params).length === 0, {
		message: 'Params must be empty',
	}),
});
export const DeleteStudentShapeSchema = GetStudentShapeSchema;
