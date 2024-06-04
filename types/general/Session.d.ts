declare type SessionStatus =
	| 'A' //'active'
	| 'C' //'completed'
	| 'c' //'cancelled'
	| 'n'; //'not started';
declare interface QuestionI<QuestionID = string> {
	id: QuestionID;
	question: string;
	tag: string;
}
declare interface SessionI<SessionID = string, TimeT extends string | Date = string> extends TimeStampI<TimeT> {
	id: SessionID;
	name: string;
	description: string;
	note: string;
	startDate: TimeT;
	endDate: TimeT;
	status: SessionStatus;
	participants: SessionID[];
	questions: QuestionI<SessionID>[];
}
