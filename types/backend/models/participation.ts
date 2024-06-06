import {
	ApplySchemaOptions,
	FlatRecord,
	HydratedDocument,
	Model,
	ObtainDocumentType,
	ResolveSchemaOptions,
	Types,
} from 'mongoose';

import { SessionHydratedDocument } from './session';
export interface ParticipationDocumentI extends BasicParticipationI<Types.ObjectId> {}

export interface ParticipationVirtuals {}
export interface ParticipationInstanceMethods {
	toOptimizedObject<B extends boolean>(
		includesCode: B
	): B extends true ? ParticipationI : Omit<ParticipationI, 'code'>;
	toBasicObject(): ParticipationInfo;
	comparePublicKey: (this: ParticipationHydratedDocument, publicKey: string) => Promise<boolean>;
	generatePublicKey: (this: ParticipationHydratedDocument) => Promise<string>;
	generateToken(this: ParticipationHydratedDocument): Promise<string>;
	getRater(this: ParticipationHydratedDocument): Promise<PublicStudentI>;
	getSession(this: ParticipationHydratedDocument): Promise<SessionHydratedDocument>;
}
/* QueryWithHelpers<ParticipationHydratedDocument | null, ParticipationHydratedDocument, ParticipationQueryHelpers, ParticipationDocumentI<ValidationHydratedDocument>,'findOne' >; */
export interface ParticipationQueryHelpers {}
export interface ParticipationDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<
			ParticipationDocument,
			ParticipationDocumentI,
			ResolveSchemaOptions<ParticipationSchemaOptions>
		>,
		ResolveSchemaOptions<ParticipationSchemaOptions>
	> {}
export interface ParticipationHydratedDocument
	extends HydratedDocument<
		FlatRecord<ParticipationDocument>,
		ParticipationInstanceMethods & ParticipationVirtuals,
		ParticipationQueryHelpers
	> {}

export interface ParticipationStaticMethods {
	getSessionFromToken(this: ParticipationModel, token: string): Promise<ParticipationHydratedDocument>;
}
export interface ParticipationSchemaOptions {
	timestamps: true;
}
export interface ParticipationModel
	extends Model<
			ParticipationDocumentI,
			ParticipationQueryHelpers,
			ParticipationInstanceMethods,
			ParticipationVirtuals,
			ParticipationHydratedDocument
		>,
		ParticipationStaticMethods {}
