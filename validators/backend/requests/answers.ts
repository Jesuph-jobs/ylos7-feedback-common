import { MyZodType, z } from '^common/defaultZod';
import { mongoIDSchema } from '^common/elements';

import { GetUserShapeSchema } from './user';

export const GetStudentShapeSchema = GetUserShapeSchema;

export const GetGlobalAnswersSchema = z.object<MyZodType<GetGlobalAnswersShapeI>>({
	body: z.any().refine((body) => !body || Object.keys(body).length === 0, {
		message: 'Body doit être vide',
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query doit être vide',
	}),
	params: z.object({
		sessionId: mongoIDSchema(),
	}),
});

export const GetParticipantAnswersSchema = z.object<MyZodType<GetParticipantAnswersShapeI>>({
	body: z.any().refine((body) => !body || Object.keys(body).length === 0, {
		message: 'Body doit être vide',
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query doit être vide',
	}),
	params: z.object({
		participationId: mongoIDSchema(),
	}),
});
export const DeleteStudentShapeSchema = GetStudentShapeSchema;
