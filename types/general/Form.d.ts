declare interface AnswerI<ID = string> {
	questionId: ID;
	answer: value;
}
declare interface BasicFormI<ID = string> {
	studentId: ID;
	sessionId: ID;
	answers: AnswerI<ID>[];
}
declare interface FormI<ID = string> extends BasicFormI<ID> {
	id: ID;
}
