import { ZodType, ZodTypeDef } from 'zod';

import { arraySchema } from '^common/elements';

import { MyZodType, z } from '../defaultZod';

import { questionInfoSchema } from './question';

export const settingsKeys: MyEnum<SettingsKeys> = ['defaultQuestions'];

export const defaultQuestionsSchema = arraySchema(questionInfoSchema()).length(3, {
	message: 'There must be exactly 3 default questions.',
}) as unknown as ZodType<
	[QuestionInfoI, QuestionInfoI, QuestionInfoI],
	ZodTypeDef,
	[QuestionInfoI, QuestionInfoI, QuestionInfoI]
>;
export const settingsSchema = () =>
	z
		.object<MyZodType<SettingsMapI>>({ defaultQuestions: defaultQuestionsSchema })
		.openapi('Settings', { description: 'Settings' });

export const settingsKeysSchema = () =>
	z.enum<SettingsKeys, MyEnum<SettingsKeys>>(settingsKeys).openapi('Settings Keys', { description: 'Settings keys' });
