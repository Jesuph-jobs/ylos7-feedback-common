declare interface AdminCreatedEmailContext extends TemplateContexts {
	name: string;
	password: string;
}
declare interface AdminCreatedEmailAdditionalContext {
	logo: string;
	supportEmail: string;
}

declare interface AdminCreatedTemplateContext extends AdminCreatedEmailContext, AdminCreatedEmailAdditionalContext {}
