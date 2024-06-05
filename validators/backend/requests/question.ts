import { MyZodType, z } from '^common/defaultZod';
import { mongoIDSchema } from '^common/elements';

import { GetUserShapeSchema } from './user';

export const GetQuestionShapeSchema = GetUserShapeSchema;
export const GetQuestionsShapeSchema = GetUserShapeSchema;

export const UpdateQuestionShapeSchema = z.object<MyZodType<UpdateQuestionShapeI>>({
	body: z.object({
		question: z.string().optional(),
		tag: z.string().optional(),
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query must be empty',
	}),
	params: z.object({
		id: mongoIDSchema(),
	}),
});

export const DeleteQuestionShapeSchema = GetQuestionShapeSchema;
