declare interface AnswerInfoI<ID = string> {
	questionId: ID;
	studentId: ID;
	rating: number;
}
declare interface BasicAnswerI<ID = string> extends AnswerInfoI<ID> {
	participationId: ID;
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
declare interface AnswersMutualI<V = number> {
	effected: V;
	given: V;
}
declare interface AnswersMutualResolvedI<V = number> extends AnswersMutualI<V> {
	delta: V;
}
declare interface AnswersMutualResI<V = number> extends AnswersMutualResolvedI<V> {
	maximum: V;
	minimum: V;
}

declare interface GlobalAnswersI<T = AnswersSumI> {
	id: string;
	student: PublicStudentI;
	votes: number;
	questions: QuestionsValuesI<T>;
}
declare interface ParticipantAnswersI<T extends AnswersMutualI = AnswersMutualI, U = QuestionsValuesI<T>> {
	id: string;
	student: PublicStudentI;
	questions: U;
}
declare interface ParticipantResultI<T extends AnswersMutualI = AnswersMutualI, U = QuestionsValuesI<T>> {
	id: string;
	rater: PublicStudentI;
	answers: ParticipantAnswersI<T, U>[];
}

declare interface GlobalAnswersCollectionI {
	average: QuestionsValuesI<AnswersSumI>;
	STDev: QuestionsValuesI<AnswersSumI>; // écart type
	median: QuestionsValuesI<AnswersSumI>;
}
declare type ParticipantAnswersCollectionI = QuestionsValuesI<AnswersMutualResI>;
declare type ParticipantAnswersCollectionReverseI = AnswersMutualResI<QuestionsValuesI>;
