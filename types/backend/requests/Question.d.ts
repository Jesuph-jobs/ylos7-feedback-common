declare interface GetQuestionShapeI {
	body: any;
	query: any;
	params: {
		id: string;
	};
}
declare interface UpdateQuestionShapeI {
	body: Partial<QuestionInfoI>;
	query: any;
	params: {
		id: string;
	};
}
declare interface GetQuestionsShapeI {
	body: any;
	query: any;
	params: {
		sessionId: string;
	};
}
declare interface CreateQuestionsShapeI {
	body: QuestionInfoI;
	query: any;
	params: {
		sessionId: string;
	};
}
declare type DeleteQuestionShapeI = GetQuestionShapeI;
