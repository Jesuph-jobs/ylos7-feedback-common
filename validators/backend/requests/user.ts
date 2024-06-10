import { MyZodType, z } from '^common/defaultZod';
import { arraySchema, emailSchema, mongoIDSchema } from '^common/elements';
import { permissionSchema } from '^common/models/permission';

export const GetUserShapeSchema = z.object<MyZodType<GetUserShapeI>>({
	// Body doit être vide
	body: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Body doit être vide',
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query doit être vide',
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
		message: 'Query doit être vide',
	}),
	params: z.object({
		id: mongoIDSchema(),
	}),
});
export const SetPermissionUserShapeSchema = z.object<MyZodType<SetPermissionUserShapeI>>({
	body: z.object({
		permissions: arraySchema(permissionSchema()),
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query doit être vide',
	}),
	params: z.object({
		id: mongoIDSchema(),
	}),
});

export const DeleteUserShapeSchema = GetUserShapeSchema;
