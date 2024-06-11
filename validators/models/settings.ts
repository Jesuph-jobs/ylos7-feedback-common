import { ZodType, ZodTypeDef } from 'zod';

import { MyZodType, z } from '^common/defaultZod';
import { arraySchema } from '^common/elements';

import { questionInfoSchema } from './question';

export const settingsKeys: MyEnum<SettingsKeys> = ['defaultQuestions'];

export const defaultQuestionsSchema = arraySchema(questionInfoSchema()).length(3, {
	message: 'Il doit y avoir exactement 3 questions par défaut.',
}) as unknown as ZodType<
	[QuestionInfoI, QuestionInfoI, QuestionInfoI],
	ZodTypeDef,
	[QuestionInfoI, QuestionInfoI, QuestionInfoI]
>;
export const settingsSchema = () =>
	z
		.object<MyZodType<SettingsMapI>>({ defaultQuestions: defaultQuestionsSchema })
		.openapi('Paramètres', { description: 'Paramètres' });

export const settingsKeysSchema = () =>
	z
		.enum<SettingsKeys, MyEnum<SettingsKeys>>(settingsKeys)
		.openapi('Clés des paramètres', { description: 'Clés des paramètres' });
