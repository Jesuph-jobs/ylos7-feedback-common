interface SessionI<SessionID = string, TimeT extends string | Date = string> extends TimeStampI<TimeT> {
	id: SessionID;
	name: string;
	description?: string;
	startDate: TimeT;
	endDate: TimeT;
	status: 'active' | 'completed' | 'cancelled' | 'not started';
	participants: string[];
}
