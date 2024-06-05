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
declare type GetQuestionsShapeI = GetQuestionShapeI;
declare type DeleteQuestionShapeI = GetQuestionShapeI;
