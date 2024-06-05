import {
	ApplySchemaOptions,
	FlatRecord,
	HydratedDocument,
	Model,
	ObtainDocumentType,
	ResolveSchemaOptions,
} from 'mongoose';

export interface StudentVirtuals {}
export interface StudentInstanceMethods {
	toOptimizedObject(): StudentI;
}
/* QueryWithHelpers<StudentHydratedDocument | null, StudentHydratedDocument, StudentQueryHelpers, BasicStudentI<ValidationHydratedDocument>,'findOne' >; */
export interface StudentQueryHelpers {}
export interface StudentDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<StudentDocument, BasicStudentI, ResolveSchemaOptions<StudentSchemaOptions>>,
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
	extends Model<BasicStudentI, StudentQueryHelpers, StudentInstanceMethods, StudentVirtuals, StudentHydratedDocument>,
		StudentStaticMethods {}
