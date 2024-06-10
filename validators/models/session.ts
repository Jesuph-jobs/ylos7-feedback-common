import { MyZodType, z } from '../defaultZod';
import { arraySchema, mongoIDSchema, nameSchema, stringDateSchema } from '../elements';
export const sessionStatuses: Record<SessionStatusI[SessionStatus], SessionStatus> = {
	active: 'A',
	completed: 'C',
	cancelled: 'c',
	pending: 'p',
};
export const sessionStatusesMap: Record<SessionStatus, string> = {
	A: 'active',
	C: 'terminé',
	c: 'annulé',
	p: 'en attente',
};
export const sessionStatusesArray = Object.keys(sessionStatusesMap) as unknown as MyEnum<SessionStatus>;
export const sessionStatusSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.enum<SessionStatus, MyEnum<SessionStatus>>(sessionStatusesArray, {
			invalid_type_error: msg?.invalid || 'Invalid session status',
			required_error: msg?.required || 'Session status is required',
			description: msg?.description || 'The session status',
		})
		.openapi('SessionStatus', {
			description: msg?.description || 'The session status',
			format: 'active | inactive | completed',
		});

export const basicSessionWithoutParticipantsSchema = ({
	description,
	endDate,
	name,
	note,
	startDate,
	title,
}: Partial<
	Record<keyof BasicSessionNoParticipantI, ErrorsSchemaMsgI> & {
		questions: Partial<Record<keyof QuestionI, ErrorsSchemaMsgI>>;
	}
> = {}) =>
	z
		.object<MyZodType<BasicSessionNoParticipantI<string | Date>>>({
			name: nameSchema(name),
			description: arraySchema(z.string(description)).min(1, 'Description is required'),
			endDate: stringDateSchema(endDate),
			startDate: stringDateSchema(startDate),
			note: z.string(note),
			title: z.string(title),
		})
		.openapi('BasicSession', { description: 'The basic session' });
export const basicSessionSchema = ({
	participants,
	status,
	...others
}: Partial<
	Record<keyof BasicSessionI, ErrorsSchemaMsgI> & { questions: Partial<Record<keyof QuestionI, ErrorsSchemaMsgI>> }
> = {}) =>
	z
		.object<MyZodType<BasicSessionI<string, string | Date>>>({
			...basicSessionWithoutParticipantsSchema(others || {}).shape,
			participants: arraySchema(mongoIDSchema(participants)),
			status: sessionStatusSchema(status),
		})
		.openapi('BasicSession', { description: 'The basic session' });

export const sessionSchema = ({
	description,
	endDate,
	id,
	name,
	note,
	participants,
	questions,
	startDate,
	status,
	createdAt,
	updatedAt,
}: Partial<
	Record<keyof SessionI, ErrorsSchemaMsgI> & {
		questions: Partial<Record<keyof QuestionI, ErrorsSchemaMsgI>>;
	}
> = {}) =>
	z
		.object<MyZodType<SessionI<string, string | Date>>>({
			...basicSessionSchema({
				description,
				endDate,
				name,
				note,
				participants,
				questions,
				startDate,
				status,
			}).shape,
			id: mongoIDSchema(id),
			createdAt: stringDateSchema(createdAt),
			updatedAt: stringDateSchema(updatedAt),
		})
		.openapi('Session', { description: 'The session' });
