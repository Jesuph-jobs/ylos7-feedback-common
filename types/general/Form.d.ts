declare interface ParticipationKindI {
	form: 'f';
	result: 'r';
}
declare type ParticipationKinds = ParticipationKindI[keyof ParticipationKindI];
declare interface ParticipationInfo {
	kind: ParticipationKinds;
	uuid: string;
}
declare interface BasicParticipationI<ID = string> extends ParticipationInfo {
	raterId: ID;
	sessionId: ID;
	code: string;
}
declare interface ParticipationI<ID = string, TimeT extends string | Date = string>
	extends BasicParticipationI<ID>,
		TimeStampI<TimeT> {
	id: ID;
}
