declare interface SettingsMapI {
	//[key: string]: string;
	defaultQuestions: [QuestionInfoI, QuestionInfoI, QuestionInfoI];
}
declare type SettingsKeys = keyof SettingsMapI;
