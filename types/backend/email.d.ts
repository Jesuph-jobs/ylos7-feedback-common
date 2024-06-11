declare interface EmailContexts {
	resetPassword: ResetPasswordEmailContext;
	adminCreated: AdminCreatedEmailContext;
	participationForm: ParticipationFormEmailContext;
	participationResult: ParticipationFormEmailContext;
}
declare interface AdditionalContext {
	resetPassword: ResetPasswordEmailAdditionalContext;
	adminCreated: AdminCreatedEmailAdditionalContext;
	participationForm: ParticipationFormEmailAdditionalContext;
	participationResult: ParticipationFormEmailAdditionalContext;
}

declare type EmailTemplates = keyof EmailContexts;

declare type EmailAccounts = 'info' | 'support' | 'noReply';

declare interface QueuedEmail<T extends EmailTemplates = EmailTemplates> {
	by: AppApps;
	from: EmailAccounts;
	to: string | string[];
	cc?: string | string[];
	bcc?: string | string[];
	subject: string;
	template: T;
	context: EmailContexts[T];
}
