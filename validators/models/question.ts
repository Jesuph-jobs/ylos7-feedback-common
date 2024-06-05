import { mongoIDSchema } from '^common/elements';

import { MyZodType, z } from '../defaultZod';

export const basicQuestionsSchema = ({
	question,
	tag,
	sessionID,
}: Partial<Record<keyof BasicQuestionI, ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<BasicQuestionI>>({
			question: z.string(question),
			tag: z.string(tag),
			sessionID: mongoIDSchema(sessionID),
		})
		.openapi('Basic Question', { description: 'Basic question' });

export const questionsSchema = ({
	id,
	question,
	tag,
	sessionID,
}: Partial<Record<keyof QuestionI, ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<QuestionI>>({
			id: mongoIDSchema(id),
			question: z.string(question),
			tag: z.string(tag),
			sessionID: mongoIDSchema(sessionID),
		})
		.openapi('Question', { description: 'The question' });
