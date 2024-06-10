import { MyZodType, z } from '^common/defaultZod';
import { defaultQuestionsSchema, settingsKeysSchema } from '^common/models/settings';

export const GetSettingsShapeSchema = z.object<MyZodType<UpdateSettingsShapeI>>({
	// body must be empty
	body: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Body must be empty',
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query must be empty',
	}),
	params: z.object({
		key: settingsKeysSchema(),
	}),
});

export const UpdateSettingsShapeSchema = z.object<MyZodType<UpdateSettingsShapeI>>({
	body: z.object({
		value: defaultQuestionsSchema, // if added should use union
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query must be empty',
	}),
	params: z.object({
		key: settingsKeysSchema(),
	}),
});
