import {
	ApplySchemaOptions,
	FlatRecord,
	HydratedDocument,
	Model,
	ObtainDocumentType,
	ResolveSchemaOptions,
	Types,
} from 'mongoose';
export interface FormDocumentI extends Omit<FormI<Types.ObjectId>, 'id'> {}

export interface FormVirtuals {}
export interface FormInstanceMethods {}
/* QueryWithHelpers<FormHydratedDocument | null, FormHydratedDocument, FormQueryHelpers, FormDocumentI<ValidationHydratedDocument>,'findOne' >; */
export interface FormQueryHelpers {}
export interface FormDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<FormDocument, FormDocumentI, ResolveSchemaOptions<FormSchemaOptions>>,
		ResolveSchemaOptions<FormSchemaOptions>
	> {}
export interface FormHydratedDocument
	extends HydratedDocument<FlatRecord<FormDocument>, FormInstanceMethods & FormVirtuals, FormQueryHelpers> {}

export interface FormStaticMethods {}
export interface FormSchemaOptions {
	timestamps: true;
}
export interface FormModel
	extends Model<FormDocumentI, FormQueryHelpers, FormInstanceMethods, FormVirtuals, FormHydratedDocument>,
		FormStaticMethods {}
