declare interface QuestionsValuesI<V = number> {
	importance: V;
	quality: V;
	frequency: V;
}
declare type ColorValueI =
	| 'V' // Very bad
	| 'B' // Bad
	| 'A' // Average
	| 'G' // Good
	| 'E'; // Excellent
declare interface QuestionEvaluationI {
	color: ColorValueI;
	text: string;
}
declare type QuestionEvaluationsArrayI<T = QuestionEvaluationI> = [T, T, T, T, T];
declare type QuestionsValuesKeysI = keyof QuestionsValuesI;
declare interface QuestionInfoI {
	question: string;
	title: string;
	type: QuestionsValuesKeysI;
	evaluations?: QuestionEvaluationsArrayI;
}
declare interface BasicQuestionI<QuestionID = string> extends QuestionInfoI {
	sessionId: QuestionID;
}
declare interface QuestionI<QuestionID = string> extends QuestionInfoI {
	id: QuestionID;
}
