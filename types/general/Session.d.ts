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
	id: SessionID;
}
declare interface BasicSessionNoParticipantInfoI {
	session: SessionInfoI;
	rater: PublicStudentI;
}
declare interface SessionDetailI extends BasicSessionNoParticipantInfoI {
	questions: QuestionI[];
	participants: PublicStudentI[];
}
