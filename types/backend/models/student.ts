import {
	ApplySchemaOptions,
	FlatRecord,
	HydratedDocument,
	Model,
	ObtainDocumentType,
	ResolveSchemaOptions,
} from 'mongoose';
export interface StudentDocumentI extends Omit<StudentI, 'id' | 'createdAt' | 'updatedAt'> {}

export interface StudentVirtuals {}
export interface StudentInstanceMethods {}
/* QueryWithHelpers<StudentHydratedDocument | null, StudentHydratedDocument, StudentQueryHelpers, StudentDocumentI<ValidationHydratedDocument>,'findOne' >; */
export interface StudentQueryHelpers {}
export interface StudentDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<StudentDocument, StudentDocumentI, ResolveSchemaOptions<StudentSchemaOptions>>,
		ResolveSchemaOptions<StudentSchemaOptions>
	> {}
export interface StudentHydratedDocument
	extends HydratedDocument<
		FlatRecord<StudentDocument>,
		StudentInstanceMethods & StudentVirtuals,
		StudentQueryHelpers
	> {}

export interface StudentStaticMethods {}
export interface StudentSchemaOptions {
	timestamps: true;
}
export interface StudentModel
	extends Model<
			StudentDocumentI,
			StudentQueryHelpers,
			StudentInstanceMethods,
			StudentVirtuals,
			StudentHydratedDocument
		>,
		StudentStaticMethods {}
