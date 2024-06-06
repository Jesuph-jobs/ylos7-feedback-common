import { MyZodType, z } from '../defaultZod';
import { booleanSchema, mongoIDSchema, otpSchema, stringDateSchema, uuidSchema } from '../elements';
type ParticipationKindsEnum = Readonly<[ParticipationKinds, ...ParticipationKinds[]]>;
export const participationStatuses: ParticipationKindI = {
	form: 'f',
	result: 'r',
};
export const participationStatusesArray = Object.values(participationStatuses) as unknown as ParticipationKindsEnum;
export const participationStatusSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.enum<ParticipationKinds, ParticipationKindsEnum>(participationStatusesArray, {
			invalid_type_error: msg?.invalid || 'Invalid participation status',
			required_error: msg?.required || 'Participation status is required',
			description: msg?.description || 'The participation status',
		})
		.openapi('ParticipationKinds', {
			description: msg?.description || 'The participation status',
			format: 'form | result',
		});

export const basicParticipationSchema = ({
	code,
	kind,
	sessionId,
	raterId,
	uuid,
	done,
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
			uuid: uuidSchema(uuid),
			done: booleanSchema(done),
		})
		.openapi('BasicParticipation', { description: 'The basic participation' });

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
		.openapi('Participation', { description: 'The participation' });
