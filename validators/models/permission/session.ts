export const SessionPermissions: Record<SessionPermissionsIdsI, PermissionsI> = {
	'session:all': {
		id: 'session:all',
		name: 'Toutes les sessions',
		description: 'Toutes les permissions de gestion de session',
		requires: ['session:view', 'session:edit', 'session:create', 'session:delete'],
	},
	'session:view': {
		id: 'session:view',
		name: 'Voir la session',
		description: 'Voir les sessions et leurs détails',
		requires: [],
	},
	'session:edit': {
		id: 'session:edit',
		name: 'Modifier la session',
		description: 'Modifier les informations générales de la session',
		requires: ['session:view'],
	},

	'session:create': {
		id: 'session:create',
		name: 'Créer une session',
		description: 'Créer une nouvelle session',
		requires: ['session:view'],
	},
	'session:delete': {
		id: 'session:delete',
		name: 'Supprimer une session',
		description: 'Supprimer une session',
		requires: ['session:view'],
	},
	'session:participants:all': {
		id: 'session:participants:all',
		name: 'Tous les participants',
		description: 'Toutes les permissions de gestion des participants',
		requires: ['session:participants:view', 'session:participants:add', 'session:participants:remove'],
	},
	'session:participants:view': {
		id: 'session:participants:view',
		name: 'Voir les participants',
		description: "Voir les participants d'une session",
		requires: ['session:view'],
	},
	'session:participants:add': {
		id: 'session:participants:add',
		name: 'Ajouter des participants',
		description: 'Ajouter des participants à une session',
		requires: ['session:view'],
	},
	'session:participants:remove': {
		id: 'session:participants:remove',
		name: 'Supprimer des participants',
		description: "Supprimer des participants d'une session",
		requires: ['session:view'],
	},

	'session:state:all': {
		id: 'session:state:all',
		name: 'Tous les états',
		description: 'Toutes les permissions de gestion des états',
		requires: ['session:state:activate', 'session:state:complete', 'session:state:cancel', 'session:state:reset'],
	},
	'session:state:activate': {
		id: 'session:state:activate',
		name: 'Activer une session',
		description: 'Activer une session',
		requires: ['session:view'],
	},
	'session:state:complete': {
		id: 'session:state:complete',
		name: 'Terminer une session',
		description: 'Terminer une session',
		requires: ['session:view'],
	},
	'session:state:cancel': {
		id: 'session:state:cancel',
		name: 'Annuler une session',
		description: 'Annuler une session',
		requires: ['session:view'],
	},
	'session:state:reset': {
		id: 'session:state:reset',
		name: 'Réinitialiser une session',
		description: 'Réinitialiser une session',
		requires: ['session:view'],
	},
	'session:results:all': {
		id: 'session:results:all',
		name: 'Tous les résultats',
		description: 'Toutes les permissions de gestion des résultats',
		requires: ['session:results:view', 'session:results:export'],
	},
	'session:results:view': {
		id: 'session:results:view',
		name: 'Voir les résultats',
		description: "Voir les résultats d'une session",
		requires: ['session:view'],
	},
	'session:results:export': {
		id: 'session:results:export',
		name: 'Exporter les résultats',
		description: "Exporter les résultats d'une session",
		requires: ['session:view'],
	},
};
export const SessionPermissionsList = Object.keys(SessionPermissions) as SessionPermissionsIdsI[];
export const SessionPermissionsListing: PermissionsListingI = {
	title: 'Permissions de session',
	description: 'Permissions liées aux sessions',
	permissions: SessionPermissionsList,
};
