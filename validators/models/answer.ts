import { MyZodType, z } from '^common/defaultZod';
import { mongoIDSchema, ratingSchema } from '^common/elements';

export const answerInfoSchema = ({
	questionId,
	rating,
	studentId,
}: Partial<Record<keyof AnswerInfoI, ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<AnswerInfoI>>({
			questionId: mongoIDSchema(questionId),
			rating: ratingSchema(rating),
			studentId: mongoIDSchema(studentId),
		})
		.openapi('Answer Info', { description: 'Answer information' });
