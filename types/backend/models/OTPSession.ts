import {
	ApplySchemaOptions,
	FlatRecord,
	FlattenMaps,
	HydratedDocument,
	Model,
	ObtainDocumentType,
	ResolveSchemaOptions,
	Types,
} from 'mongoose';

import { UserHydratedDocument } from './user';

export type VerifaibleI = 'email' | 'phone';
export type OTPSessionKindsI = 'resetPassword' | 'emailVerification' | 'phoneVerification';
export interface OTPSessionDocumentI {
	userId: Types.ObjectId;
	hashedOtp: string;
	kind: OTPSessionKindsI;
}

export interface OTPSessionVirtuals {}
export interface OTPSessionInstanceMethods {
	compareOTP: (this: OTPSessionDocument, OTPCode: string) => Promise<boolean>;
}
export interface OTPSessionQueryHelpers {}
export interface OTPSessionDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<OTPSessionDocument, OTPSessionDocumentI, ResolveSchemaOptions<OTPSessionSchemaOptions>>,
		ResolveSchemaOptions<OTPSessionSchemaOptions>
	> {}
export interface OTPSessionHydratedDocument
	extends HydratedDocument<
		FlatRecord<OTPSessionDocument>,
		OTPSessionInstanceMethods & OTPSessionVirtuals,
		OTPSessionQueryHelpers
	> {}
export type OTPSessionLeanDocumentI = FlattenMaps<OTPSessionDocumentI> & {
	_id: Types.ObjectId;
};
export interface OTPSessionStaticMethods {
	// custom static methods here
	createRecoverySession: (
		this: OTPSessionModel,
		email: string,
		replaceUser?: boolean
	) => Promise<[string, OTPSessionHydratedDocument, NecessaryUserI]>;
	createVerificationSession: (
		this: OTPSessionModel,
		userId: string | Types.ObjectId,
		verify: VerifaibleI,
		replaceUser?: boolean
	) => Promise<[string, OTPSessionHydratedDocument, NecessaryUserI]>;
	getNecessarySession: (
		this: OTPSessionModel,
		sessionId: string,
		OTPCode: string,
		replaceUser?: boolean
	) => Promise<[OTPSessionHydratedDocument, NecessaryUserI]>;
	getSession: (
		this: OTPSessionModel,
		sessionId: string,
		OTPCode: string
	) => Promise<[OTPSessionHydratedDocument, UserHydratedDocument]>;
	validateSession: (this: OTPSessionModel, sessionId: string, OTPCode: string) => Promise<void>;
	resetPassword: (this: OTPSessionModel, sessionId: string, password: string, OTPCode: string) => Promise<void>;
}
export interface OTPSessionSchemaOptions {
	timestamps: true;
}
export interface OTPSessionModel
	extends Model<
			OTPSessionDocumentI,
			OTPSessionQueryHelpers,
			OTPSessionInstanceMethods,
			OTPSessionVirtuals,
			OTPSessionHydratedDocument
		>,
		OTPSessionStaticMethods {}
