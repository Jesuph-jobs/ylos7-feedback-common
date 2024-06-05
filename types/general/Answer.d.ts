declare interface BasicAnswerI<ID = string> {
	questionId: ID;
	studentId: ID;
	participantId: ID;
	answer: number;
}
declare interface AnswerI<ID = string> extends BasicAnswerI<ID> {
	id: ID;
}
