declare interface SettingsMapI extends Record<string, any> {
	//[key: string]: string;
	defaultQuestions: [QuestionInfoI, QuestionInfoI, QuestionInfoI];
}
