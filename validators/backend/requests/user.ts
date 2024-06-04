import { MyZodType, z } from '^common/defaultZod';
import { emailSchema, mongoIDSchema } from '^common/elements';

export const GetUserShapeSchema = z.object<MyZodType<GetUserShapeI>>({
	// body must be empty
	body: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Body must be empty',
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query must be empty',
	}),
	params: z.object({
		id: mongoIDSchema(),
	}),
});

export const UpdateUserShapeSchema = z.object<MyZodType<UpdateUserShapeI>>({
	body: z.object({
		firstName: z.string().optional(),
		lastName: z.string().optional(),
		email: emailSchema().optional(),
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query must be empty',
	}),
	params: z.object({
		id: mongoIDSchema(),
	}),
});

export const DeleteUserShapeSchema = GetUserShapeSchema;
