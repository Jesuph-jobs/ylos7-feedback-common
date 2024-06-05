declare interface QuestionInfoI {
	question: string;
	tag: string;
}
declare interface BasicQuestionI<QuestionID = string> extends QuestionInfoI {
	sessionID: QuestionID;
}
declare interface QuestionI<QuestionID = string> extends BasicQuestionI<QuestionID> {
	id: QuestionID;
}
