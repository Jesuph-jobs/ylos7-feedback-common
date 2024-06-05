declare interface SessionStatusI {
	A: 'active';
	C: 'completed';
	c: 'cancelled';
	p: 'pending';
}
declare type SessionStatus = keyof SessionStatusI;

declare interface BasicSessionI<SessionID = string, TimeT extends string | Date = string> {
	name: string;
	description: string;
	note: string;
	startDate: TimeT;
	endDate: TimeT;
	status: SessionStatus;
	participants: SessionID[];
}
declare interface SessionI<SessionID = string, TimeT extends string | Date = string>
	extends TimeStampI<TimeT>,
		BasicSessionI<SessionID, TimeT> {
	id: SessionID;
}
