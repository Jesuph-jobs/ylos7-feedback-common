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
declare interface AnswersSumI {
	sum: number;
	average: number;
}

declare interface GlobalAnswersI {
	id: string;
	student: PublicStudentI;
	questions: QuestionsValuesI<AnswersSumI>;
}

declare interface GlobalAnswersCollectionI {
	average: QuestionsValuesI<AnswersSumI>;
	STDev: QuestionsValuesI<AnswersSumI>; // écart type
	median: QuestionsValuesI<AnswersSumI>;
}
