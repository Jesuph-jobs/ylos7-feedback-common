export const StudentPermissions: Record<StudentPermissionsIdsI, PermissionsI> = {
	'student:all': {
		id: 'student:all',
		name: 'Tous les participants',
		description: 'Toutes les permissions de gestion des participants',
		requires: ['student:view', 'student:edit', 'student:create'],
	},
	'student:view': {
		id: 'student:view',
		name: 'Voir les participants',
		description: 'Voir les participants et leurs détails',
		requires: [],
	},
	'student:edit': {
		id: 'student:edit',
		name: 'Modifier les participants',
		description: 'Modifier les informations générales des participants',
		requires: ['student:view'],
	},

	'student:create': {
		id: 'student:create',
		name: 'Créer un participant',
		description: 'Créer un nouvel participant',
		requires: ['student:view'],
	},
	'student:delete': {
		id: 'student:delete',
		name: 'Supprimer un participant',
		description: 'Supprimer un participant',
		requires: ['student:view'],
	},
};
export const StudentPermissionsList = Object.keys(StudentPermissions) as StudentPermissionsIdsI[];
export const StudentPermissionsListing: PermissionsListingI = {
	title: 'Permissions des participants',
	description: 'Permissions liées aux participants',
	permissions: StudentPermissionsList,
};
