declare interface AnswerInfoI<ID = string> {
	questionId: ID;
	participantId: ID;
	rating: number;
}
declare interface BasicAnswerI<ID = string> extends AnswerInfoI<ID> {
	raterId: ID;
}
declare interface AnswerI<ID = string> extends BasicAnswerI<ID> {
	id: ID;
}
