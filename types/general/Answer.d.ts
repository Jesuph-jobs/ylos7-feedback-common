declare interface AnswerInfoI<ID = string> {
	questionId: ID;
	studentId: ID;
	rating: number;
}
declare interface BasicAnswerI<ID = string> extends AnswerInfoI<ID> {
	raterId: ID;
}
declare interface AnswerI<ID = string, TimeT extends string | Date = string>
	extends BasicAnswerI<ID>,
		TimeStampI<TimeT> {
	id: ID;
}
