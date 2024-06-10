import { MyZodType, z } from '^common/defaultZod';
import { mongoIDSchema } from '^common/elements';
import { questionInfoSchema } from '^common/models/question';

import { GetUserShapeSchema } from './user';

export const GetQuestionShapeSchema = GetUserShapeSchema;
export const GetQuestionsShapeSchema = z.object<MyZodType<GetQuestionsShapeI>>({
	// Body doit être vide
	body: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Body doit être vide',
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query doit être vide',
	}),
	params: z.object({
		sessionId: mongoIDSchema(),
	}),
});
export const CreateQuestionsShapeSchema = z.object<MyZodType<CreateQuestionsShapeI>>({
	body: questionInfoSchema(),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query doit être vide',
	}),
	params: z.object({
		sessionId: mongoIDSchema(),
	}),
});
export const UpdateQuestionShapeSchema = z.object<MyZodType<UpdateQuestionShapeI>>({
	body: z.object({
		question: z.string().optional(),
		tag: z.string().optional(),
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query doit être vide',
	}),
	params: z.object({
		id: mongoIDSchema(),
	}),
});

export const DeleteQuestionShapeSchema = GetQuestionShapeSchema;
