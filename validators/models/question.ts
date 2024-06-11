import { MyZodType, z } from '^common/defaultZod';
import { mongoIDSchema } from '^common/elements';

export const questionInfoSchema = ({ question, title }: Partial<Record<keyof QuestionInfoI, ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<QuestionInfoI>>({
			question: z.string(question),
			title: z.string(title),
			type: z.enum(['importance', 'quality', 'frequency']),
		})
		.openapi('Question de base', { description: 'Question de base' });

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
		.openapi('Question de base', { description: 'Question de base' });

export const questionsSchema = ({ id, question, title }: Partial<Record<keyof QuestionI, ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<QuestionI>>({
			id: mongoIDSchema(id),
			...questionInfoSchema({ question, title }).shape,
		})
		.openapi('Question', { description: 'La question' });
