import { MyZodType, z } from '^common/defaultZod';
import { arraySchema, otpSchema, uuidSchema } from '^common/elements';
import { answerInfoSchema } from '^common/models/answer';

export const GetParticipationShapeSchema = z.object<MyZodType<GetParticipationShapeI>>({
	// Body doit être vide
	body: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Body doit être vide',
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query doit être vide',
	}),
	params: z.object({
		uuid: uuidSchema(),
	}),
});

export const loginParticipationShapeSchema = z.object<MyZodType<loginParticipationShapeI>>({
	body: z.object({
		code: otpSchema(),
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query doit être vide',
	}),
	params: z.object({
		uuid: uuidSchema(),
	}),
});

export const submitAnswersShapeSchema = z.object<MyZodType<submitAnswersShapeI>>({
	body: z.object({
		answers: arraySchema(answerInfoSchema()),
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query doit être vide',
	}),
	params: z.any(),
});
