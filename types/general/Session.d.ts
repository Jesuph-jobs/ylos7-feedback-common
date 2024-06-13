declare interface SessionStatusI {
	A: 'active';
	C: 'completed';
	c: 'cancelled';
	p: 'pending';
}
declare type SessionStatus = keyof SessionStatusI;
declare interface SessionInfoI {
	name: string;
	title: string;
	description: string[];
	note: string;
}
declare interface BasicSessionNoParticipantI<TimeT extends string | Date = string> extends SessionInfoI {
	startDate: TimeT;
	endDate: TimeT;
}
declare interface BasicSessionI<SessionID = string, TimeT extends string | Date = string>
	extends BasicSessionNoParticipantI<TimeT> {
	participants: SessionID[];
	status: SessionStatus;
}
declare interface SessionI<SessionID = string, TimeT extends string | Date = string>
	extends TimeStampI<TimeT>,
		BasicSessionI<SessionID, TimeT> {
	participants: number;
	id: SessionID;
}
declare interface BasicSessionNoParticipantInfoI<DONE extends boolean = boolean> {
	session: SessionInfoI;
	rater: PublicStudentI;
	done: DONE;
}
declare interface SessionDetailI<DONE extends boolean = boolean> extends BasicSessionNoParticipantInfoI<DONE> {
	questions: QuestionI[];
	participants: PublicStudentI[];
}
