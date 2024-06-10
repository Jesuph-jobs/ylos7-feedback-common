import { mongoIDSchema } from '^common/elements';

import { MyZodType, z } from '../defaultZod';

export const questionInfoSchema = ({ question, title }: Partial<Record<keyof QuestionInfoI, ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<QuestionInfoI>>({
			question: z.string(question),
			title: z.string(title),
		})
		.openapi('Basic Question', { description: 'Basic question' });

export const basicQuestionsSchema = ({
	question,
	title,
	sessionId,
}: Partial<Record<keyof BasicQuestionI, ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<BasicQuestionI>>({
			...questionInfoSchema({ question, title }).shape,
			sessionId: mongoIDSchema(sessionId),
		})
		.openapi('Basic Question', { description: 'Basic question' });

export const questionsSchema = ({ id, question, title }: Partial<Record<keyof QuestionI, ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<QuestionI>>({
			id: mongoIDSchema(id),
			...questionInfoSchema({ question, title }).shape,
		})
		.openapi('Question', { description: 'The question' });
