import { MyZodType, z } from '../defaultZod';
import { arraySchema, mongoIDSchema, nameSchema, stringDateSchema } from '../elements';
type SessionStatusEnum = Readonly<[SessionStatus, ...SessionStatus[]]>;
const sessionStatuses: Record<SessionStatusI[SessionStatus], SessionStatus> = {
	active: 'A',
	completed: 'C',
	cancelled: 'c',
	pending: 'p',
};
export const sessionStatusesArray = Object.values(sessionStatuses) as unknown as SessionStatusEnum;
export const sessionStatusSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.enum<SessionStatus, SessionStatusEnum>(sessionStatusesArray, {
			invalid_type_error: msg?.invalid || 'Invalid session status',
			required_error: msg?.required || 'Session status is required',
			description: msg?.description || 'The session status',
		})
		.openapi('SessionStatus', {
			description: msg?.description || 'The session status',
			format: 'active | inactive | completed',
		});

export const basicSessionSchema = ({
	description,
	endDate,
	name,
	note,
	participants,
	startDate,
	status,
}: Partial<
	Record<keyof BasicSessionI, ErrorsSchemaMsgI> & { questions: Partial<Record<keyof QuestionI, ErrorsSchemaMsgI>> }
> = {}) =>
	z
		.object<MyZodType<BasicSessionI<string, string | Date>>>({
			name: nameSchema(name),
			description: z.string(description),
			endDate: stringDateSchema(endDate),
			startDate: stringDateSchema(startDate),
			note: z.string(note),
			status: sessionStatusSchema(status),
			participants: arraySchema(mongoIDSchema(participants)),
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
