declare interface ParticipationFormEmailContext extends TemplateContexts {
	name: string;
	code: string;
	url: string;
}
declare interface ParticipationFormEmailAdditionalContext {
	logo: string;
	supportEmail: string;
}

declare interface ParticipationFormTemplateContext
	extends ParticipationFormEmailContext,
		ParticipationFormEmailAdditionalContext {}
