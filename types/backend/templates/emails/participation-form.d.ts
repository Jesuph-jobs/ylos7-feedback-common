declare interface ParticipationFormEmailContext extends TemplateContexts {
	student: BasicStudentI;
	participation: BasicParticipationI;
}
declare interface ParticipationFormEmailAdditionalContext {
	logo: string;
	supportEmail: string;
}

declare interface ParticipationFormTemplateContext
	extends ParticipationFormEmailContext,
		ParticipationFormEmailAdditionalContext {}
