import {
	ApplySchemaOptions,
	FlatRecord,
	HydratedDocument,
	Model,
	ObtainDocumentType,
	ResolveSchemaOptions,
	Types,
} from 'mongoose';
export interface StudentDocumentI extends BasicStudentI {}

export interface StudentVirtuals {}
export interface StudentInstanceMethods {
	toOptimizedObject(): StudentI;
}
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

export interface StudentStaticMethods {
	checkIfAllIdsExist(this: StudentModel, ids: (Types.ObjectId | string)[]): Promise<boolean>;
}
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
