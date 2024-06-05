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
export interface SessionDocumentI extends BasicSessionI<Types.ObjectId, Date> {}

export interface SessionVirtuals {}
export interface SessionInstanceMethods {
	toOptimizedObject(): SessionI;
}
/* QueryWithHelpers<SessionHydratedDocument | null, SessionHydratedDocument, SessionQueryHelpers, SessionDocumentI<ValidationHydratedDocument>,'findOne' >; */
export interface SessionQueryHelpers {}
export interface SessionDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<SessionDocument, SessionDocumentI, ResolveSchemaOptions<SessionSchemaOptions>>,
		ResolveSchemaOptions<SessionSchemaOptions>
	> {}
export interface SessionHydratedDocument
	extends HydratedDocument<
		FlatRecord<SessionDocument>,
		SessionInstanceMethods & SessionVirtuals,
		SessionQueryHelpers
	> {}

export interface SessionStaticMethods {}
export interface SessionSchemaOptions {
	timestamps: true;
}
export interface SessionModel
	extends Model<
			SessionDocumentI,
			SessionQueryHelpers,
			SessionInstanceMethods,
			SessionVirtuals,
			SessionHydratedDocument
		>,
		SessionStaticMethods {}
