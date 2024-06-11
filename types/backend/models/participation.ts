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
	comparePublicKey: (this: ParticipationHydratedDocument, publicKey: string) => Promise<boolean>;
	generatePublicKey: (this: ParticipationHydratedDocument) => Promise<string>;
	generateToken(this: ParticipationHydratedDocument): Promise<string>;
	getRater(this: ParticipationHydratedDocument): Promise<StudentI>;
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
	convertSessionToResult(
		this: ParticipationModel,
		sessionId: Types.ObjectId,
		language?: LanguagesI
	): Promise<ParticipationI[]>;
	getPopulatedParticipations(this: ParticipationModel, sessionId: string): Promise<PopulatedParticipationI[]>;
	createParticipation(
		this: ParticipationModel,
		participation: ParticipationsActors<Types.ObjectId>,
		language?: LanguagesI
	): Promise<ParticipationHydratedDocument>;
	getGlobalAnswers(this: ParticipationModel, sessionId: string): Promise<GlobalAnswersI[]>;
	getParticipationAnswers(this: ParticipationModel, participationId: string): Promise<ParticipantResultI>;
	getPublicParticipationCollection(
		this: ParticipationModel,
		participationId: string
	): Promise<ParticipantAnswersCollectionI>;
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
