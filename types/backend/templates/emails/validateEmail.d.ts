declare interface ValidateEmailContext extends TemplateContexts {
	name: string;
	validationUrl: string;
}
declare interface ValidateEmailAdditionalContext {
	logo: string;
	supportEmail: string;
}

declare interface ValidateTemplateContext extends ValidateEmailContext, ValidateEmailAdditionalContext {}
