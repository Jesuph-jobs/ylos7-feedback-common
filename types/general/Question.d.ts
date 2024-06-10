declare interface QuestionsValuesI<V = number> {
	importance: V;
	quality: V;
	frequency: V;
}
declare interface QuestionInfoI {
	question: string;
	title: string;
	type: keyof QuestionsValuesI;
}
declare interface BasicQuestionI<QuestionID = string> extends QuestionInfoI {
	sessionId: QuestionID;
}
declare interface QuestionI<QuestionID = string> extends QuestionInfoI {
	id: QuestionID;
}
