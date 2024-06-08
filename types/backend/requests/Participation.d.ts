declare interface GetParticipationShapeI {
	body: any;
	query: any;
	params: {
		uuid: string;
	};
}
declare interface loginParticipationShapeI {
	body: {
		code: string;
	};
	query: any;
	params: {
		uuid: string;
	};
}

declare interface submitAnswersShapeI {
	body: {
		answers: AnswerInfoI[];
	};
	query: any;
	params: any;
}
