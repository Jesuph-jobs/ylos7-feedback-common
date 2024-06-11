export const QuestionPermissions: Record<QuestionPermissionsIdsI, PermissionsI> = {
	'question:all': {
		id: 'question:all',
		name: 'Toutes les questions',
		description: 'Toutes les permissions de gestion des questions',
		requires: ['question:view', 'question:edit', /* 'question:create', 'question:delete', */ 'session:view'],
	},
	'question:view': {
		id: 'question:view',
		name: 'Voir la question',
		description: 'Voir les questions et leurs détails',
		requires: ['session:view'],
	},
	'question:edit': {
		id: 'question:edit',
		name: 'Modifier la question',
		description: 'Modifier les informations générales de la question',
		requires: ['session:view', 'question:view'],
	},

	/* 'question:create': {
		id: 'question:create',
		name: 'Créer une question',
		description: 'Créer une nouvelle question',
		requires: ['session:view', 'question:view'],
	},
	'question:delete': {
		id: 'question:delete',
		name: 'Supprimer la question',
		description: 'Supprimer une question',
		requires: ['session:view', 'question:view'],
	}, */
};
export const QuestionPermissionsList = Object.keys(QuestionPermissions) as QuestionPermissionsIdsI[];
export const QuestionPermissionsListing: PermissionsListingI = {
	title: 'Permissions des questions',
	description: 'Permissions liées aux questions',
	permissions: QuestionPermissionsList,
};
