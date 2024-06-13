import { MyZodType, z } from '^common/defaultZod';
import { arraySchema, mongoIDSchema, nameSchema, stringDateSchema } from '^common/elements';

export const sessionStatuses: Record<SessionStatusI[SessionStatus], SessionStatus> = {
	active: 'A',
	completed: 'C',
	cancelled: 'c',
	pending: 'p',
};

export const sessionStatusesMap: Record<SessionStatus, string> = {
	A: 'actif',
	C: 'terminé',
	c: 'annulé',
	p: 'en attente',
};

export const sessionStatusesArray = Object.keys(sessionStatusesMap) as unknown as MyEnum<SessionStatus>;

export const sessionStatusSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.enum<SessionStatus, MyEnum<SessionStatus>>(sessionStatusesArray, {
			invalid_type_error: msg?.invalid || 'Statut de session invalide',
			required_error: msg?.required || 'Le statut de session est requis',
			description: msg?.description || 'Le statut de la session',
		})
		.openapi('SessionStatus', {
			description: msg?.description || 'Le statut de la session',
			format: 'actif | inactif | terminé',
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
			description: arraySchema(z.string(description)).min(1, 'La description est requise'),
			endDate: stringDateSchema(endDate),
			startDate: stringDateSchema(startDate),
			note: z.string(note),
			title: z.string(title),
		})
		.openapi('BasicSession', { description: 'La session de base' });

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
		.openapi('BasicSession', { description: 'La session de base' });

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
			participants: z.number(participants),
			id: mongoIDSchema(id),
			createdAt: stringDateSchema(createdAt),
			updatedAt: stringDateSchema(updatedAt),
		})
		.openapi('Session', { description: 'La session' });
