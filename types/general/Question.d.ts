declare interface QuestionInfoI {
	question: string;
	title: string;
}
declare interface BasicQuestionI<QuestionID = string> extends QuestionInfoI {
	sessionId: QuestionID;
}
declare interface QuestionI<QuestionID = string> extends QuestionInfoI {
	id: QuestionID;
}
