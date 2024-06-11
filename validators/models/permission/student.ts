export const StudentPermissions: Record<StudentPermissionsIdsI, PermissionsI> = {
	'student:all': {
		id: 'student:all',
		name: 'Tous les étudiants',
		description: 'Toutes les permissions de gestion des étudiants',
		requires: ['student:view', 'student:edit', 'student:create'],
	},
	'student:view': {
		id: 'student:view',
		name: 'Voir les étudiants',
		description: 'Voir les étudiants et leurs détails',
		requires: [],
	},
	'student:edit': {
		id: 'student:edit',
		name: 'Modifier les étudiants',
		description: 'Modifier les informations générales des étudiants',
		requires: ['student:view'],
	},

	'student:create': {
		id: 'student:create',
		name: 'Créer un étudiant',
		description: 'Créer un nouvel étudiant',
		requires: ['student:view'],
	},
	'student:delete': {
		id: 'student:delete',
		name: 'Supprimer un étudiant',
		description: 'Supprimer un étudiant',
		requires: ['student:view'],
	},
};
export const StudentPermissionsList = Object.keys(StudentPermissions) as StudentPermissionsIdsI[];
export const StudentPermissionsListing: PermissionsListingI = {
	title: 'Permissions des étudiants',
	description: 'Permissions liées aux étudiants',
	permissions: StudentPermissionsList,
};
