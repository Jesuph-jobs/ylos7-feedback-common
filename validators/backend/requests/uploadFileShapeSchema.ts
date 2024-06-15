import { MyZodType, z } from '^common/defaultZod';

declare interface UploadFileShapeI {
	body: {
		file: MyFile;
	};
	query: Record<string, unknown>;
	params: Record<string, unknown>;
}

const myFileSchema = z.object<MyZodType<MyFile>>({
	fieldname: z.string(),
	originalname: z.string(),
	encoding: z.string(),
	mimetype: z.string(),
	path: z.string(),
	size: z.number(),
	filename: z.string(),
});

// Schéma Zod pour UploadFileShapeI
export const UploadFileShapeSchema = z.object<MyZodType<UploadFileShapeI>>({
	body: z.object({
		file: myFileSchema,
	}),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query doit être vide',
	}),
	params: z.any().refine((params) => !params || Object.keys(params).length === 0, {
		message: 'Params doit être vide',
	}),
});
