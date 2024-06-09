declare interface ParticipationKindI {
	form: 'f';
	result: 'r';
}
declare type ParticipationKinds = ParticipationKindI[keyof ParticipationKindI];
declare interface ParticipationsActors<ID = string> {
	raterId: ID;
	sessionId: ID;
	kind: ParticipationKinds;
}
declare interface BasicParticipationI<ID = string> extends ParticipationsActors<ID> {
	code: string;
	uuid: string;
	done: boolean;
}
declare interface ParticipationI<ID = string, TimeT extends string | Date = string>
	extends BasicParticipationI<ID>,
		TimeStampI<TimeT> {
	id: ID;
}
declare interface PopulatedParticipationI<ID = string, TimeT extends string | Date = string>
	extends ParticipationI<ID, TimeT> {
	raterFirstName: string;
	raterLastName: string;
	raterTag?: string;
	raterProfilePicture?: string;
}
