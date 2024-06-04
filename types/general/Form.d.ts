declare interface AnswerI<ID = string> {
	questionId: ID;
	answer: value;
}
declare interface FormI<ID = string> {
	id: ID;
	studentId: ID;
	sessionId: ID;
	answers: AnswerI<ID>[];
}
