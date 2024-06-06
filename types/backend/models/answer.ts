import {
	ApplySchemaOptions,
	FlatRecord,
	HydratedDocument,
	Model,
	ObtainDocumentType,
	ResolveSchemaOptions,
	Types,
} from 'mongoose';
export interface AnswerDocumentI extends BasicAnswerI<Types.ObjectId> {}

export interface AnswerVirtuals {}
export interface AnswerInstanceMethods {
	toOptimizedObject(): AnswerI;
}
/* QueryWithHelpers<AnswerHydratedDocument | null, AnswerHydratedDocument, AnswerQueryHelpers, AnswerDocumentI<ValidationHydratedDocument>,'findOne' >; */
export interface AnswerQueryHelpers {}
export interface AnswerDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<AnswerDocument, AnswerDocumentI, ResolveSchemaOptions<AnswerSchemaOptions>>,
		ResolveSchemaOptions<AnswerSchemaOptions>
	> {}
export interface AnswerHydratedDocument
	extends HydratedDocument<FlatRecord<AnswerDocument>, AnswerInstanceMethods & AnswerVirtuals, AnswerQueryHelpers> {}

export interface AnswerStaticMethods {
	getAnswersByQuestionIdForStudentId(
		this: AnswerModel,
		questionId: Types.ObjectId | string,
		studentId: Types.ObjectId | string
	): Promise<AnswerHydratedDocument[]>;
	getAnswersByQuestionId(this: AnswerModel, questionId: Types.ObjectId | string): Promise<AnswerHydratedDocument[]>;
	getAnswersByRaterId(this: AnswerModel, raterId: Types.ObjectId | string): Promise<AnswerHydratedDocument[]>;
	createManyAnswers(
		this: AnswerModel,
		answers: BasicAnswerI<Types.ObjectId | string>[]
	): Promise<AnswerHydratedDocument[]>;
}
export interface AnswerSchemaOptions {
	timestamps: true;
}
export interface AnswerModel
	extends Model<AnswerDocumentI, AnswerQueryHelpers, AnswerInstanceMethods, AnswerVirtuals, AnswerHydratedDocument>,
		AnswerStaticMethods {}
