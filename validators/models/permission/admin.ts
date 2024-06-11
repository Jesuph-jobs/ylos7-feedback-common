export const AdminPermissions: Record<AdminPermissionsIdsI, PermissionsI> = {
	'admin:all': {
		id: 'admin:all',
		name: "Tous les droits d'administration",
		description: "Tous les droits de gestion d'administration",
		requires: ['admin:view', 'admin:edit', 'admin:create'],
	},
	'admin:view': {
		id: 'admin:view',
		name: 'Voir les administrateurs',
		description: 'Voir les administrateurs et leurs détails',
		requires: [],
	},
	'admin:edit': {
		id: 'admin:edit',
		name: 'Modifier les administrateurs',
		description: 'Modifier les informations générales des administrateurs',
		requires: ['admin:view', 'file:upload'],
	},

	'admin:create': {
		id: 'admin:create',
		name: 'Créer un administrateur',
		description: 'Créer un nouvel administrateur',
		requires: ['admin:view', 'file:upload'],
	},
};
export const AdminPermissionsList = Object.keys(AdminPermissions) as AdminPermissionsIdsI[];
export const AdminPermissionsListing: PermissionsListingI = {
	title: "Droits d'administration",
	description: 'Droits liés aux administrateurs',
	permissions: AdminPermissionsList,
};
