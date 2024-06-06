import {
	ApplySchemaOptions,
	FlatRecord,
	HydratedDocument,
	Model,
	ObtainDocumentType,
	/* QueryWithHelpers, */
	ResolveSchemaOptions,
	Types,
} from 'mongoose';
export interface QuestionDocumentI extends BasicQuestionI<Types.ObjectId> {}

export interface QuestionVirtuals {}
export interface QuestionInstanceMethods {
	toOptimizedObject(this: QuestionHydratedDocument): QuestionI;
}
/* QueryWithHelpers<QuestionHydratedDocument | null, QuestionHydratedDocument, QuestionQueryHelpers, QuestionDocumentI<ValidationHydratedDocument>,'findOne' >; */
export interface QuestionQueryHelpers {}
export interface QuestionDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<QuestionDocument, QuestionDocumentI, ResolveSchemaOptions<QuestionSchemaOptions>>,
		ResolveSchemaOptions<QuestionSchemaOptions>
	> {}
export interface QuestionHydratedDocument
	extends HydratedDocument<
		FlatRecord<QuestionDocument>,
		QuestionInstanceMethods & QuestionVirtuals,
		QuestionQueryHelpers
	> {}

export interface QuestionStaticMethods {}
export interface QuestionSchemaOptions {
	timestamps: true;
}
export interface QuestionModel
	extends Model<
			QuestionDocumentI,
			QuestionQueryHelpers,
			QuestionInstanceMethods,
			QuestionVirtuals,
			QuestionHydratedDocument
		>,
		QuestionStaticMethods {}
