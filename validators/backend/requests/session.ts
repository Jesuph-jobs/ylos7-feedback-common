import { MyZodType, z } from '^common/defaultZod';
import { mongoIDSchema, nameSchema, stringDateSchema } from '^common/elements';
import { sessionStatusSchema } from '^common/models/session';

import { GetUserShapeSchema } from './user';

export const GetSessionShapeSchema = GetUserShapeSchema;
export const CreateSessionShapeSchema = z.object<MyZodType<CreateSessionShapeI>>({
	body: z.object({
		name: nameSchema(),
		description: z.string(),
		endDate: stringDateSchema(),
		startDate: stringDateSchema(),
		note: z.string(),
		status: sessionStatusSchema(),
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query must be empty',
	}),
	params: z.any().refine((params) => !params || Object.keys(params).length === 0, {
		message: 'Params must be empty',
	}),
});

export const UpdateSessionShapeSchema = z.object<MyZodType<UpdateSessionShapeI>>({
	body: z.object({
		name: nameSchema().optional(),
		description: z.string().optional(),
		endDate: stringDateSchema().optional(),
		startDate: stringDateSchema().optional(),
		note: z.string().optional(),
		status: sessionStatusSchema().optional(),
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query must be empty',
	}),
	params: z.object({
		id: mongoIDSchema(),
	}),
});

export const UpdateSessionAddParticipantShapeSchema = z.object<MyZodType<UpdateSessionAddParticipantShapeI>>({
	body: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Body must be empty',
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query must be empty',
	}),
	params: z.object({
		id: mongoIDSchema(),
		participant: mongoIDSchema(),
	}),
});

export const UpdateSessionRemoveParticipantShapeSchema = UpdateSessionAddParticipantShapeSchema;

export const DeleteSessionShapeSchema = GetSessionShapeSchema;
