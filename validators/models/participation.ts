import { MyZodType, z } from '^common/defaultZod';
import { booleanSchema, mongoIDSchema, otpSchema, stringDateSchema, uuidSchema } from '^common/elements';

export const participationStatuses: ParticipationKindI = {
	form: 'f',
	result: 'r',
};
export const participationStatusesArray = Object.values(participationStatuses) as unknown as MyEnum<ParticipationKinds>;
export const participationStatusSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.enum<ParticipationKinds, MyEnum<ParticipationKinds>>(participationStatusesArray, {
			invalid_type_error: msg?.invalid || 'Statut de participation invalide',
			required_error: msg?.required || 'Le statut de participation est requis',
			description: msg?.description || 'Le statut de participation',
		})
		.openapi('ParticipationKinds', {
			description: msg?.description || 'Le statut de participation',
			format: 'form | result',
		});

export const basicParticipationSchema = ({
	code,
	kind,
	sessionId,
	raterId,
	uuid,
	done,
	wantsReceive,
}: Partial<
	Record<keyof BasicParticipationI, ErrorsSchemaMsgI> & {
		questions: Partial<Record<keyof QuestionI, ErrorsSchemaMsgI>>;
	}
> = {}) =>
	z
		.object<MyZodType<BasicParticipationI<string>>>({
			raterId: mongoIDSchema(raterId),
			sessionId: mongoIDSchema(sessionId),
			code: otpSchema(code),
			kind: participationStatusSchema(kind),
			wantsReceive: booleanSchema(wantsReceive),
			uuid: uuidSchema(uuid),
			done: booleanSchema(done),
		})
		.openapi('BasicParticipation', { description: 'La participation de base' });

export const participationSchema = ({
	id,
	createdAt,
	updatedAt,
	...rest
}: Partial<
	Record<keyof ParticipationI, ErrorsSchemaMsgI> & {
		questions: Partial<Record<keyof QuestionI, ErrorsSchemaMsgI>>;
	}
> = {}) =>
	z
		.object<MyZodType<ParticipationI<string, string | Date>>>({
			...basicParticipationSchema(rest || {}).shape,
			id: mongoIDSchema(id),
			createdAt: stringDateSchema(createdAt),
			updatedAt: stringDateSchema(updatedAt),
		})
		.openapi('Participation', { description: 'La participation' });
