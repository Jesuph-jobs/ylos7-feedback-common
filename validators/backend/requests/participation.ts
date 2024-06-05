import { MyZodType, z } from '^common/defaultZod';
import { uuidSchema } from '^common/elements';

export const GetParticipationShapeSchema = z.object<MyZodType<GetParticipationShapeI>>({
	// body must be empty
	body: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Body must be empty',
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query must be empty',
	}),
	params: z.object({
		uuid: uuidSchema(),
	}),
});