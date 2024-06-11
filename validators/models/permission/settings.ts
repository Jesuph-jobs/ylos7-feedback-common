export const SettingsPermissions: Record<SettingsPermissionsIdsI, PermissionsI> = {
	'settings:all': {
		id: 'settings:all',
		name: 'Toutes les paramètres',
		description: 'Tous les paramètres',
		requires: ['settings:view', 'settings:edit'],
	},
	'settings:view': {
		id: 'settings:view',
		name: 'Afficher les paramètres',
		description: 'Afficher les paramètres',
		requires: [],
	},
	'settings:edit': {
		id: 'settings:edit',
		name: 'Modifier les paramètres',
		description: 'Modifier les paramètres',
		requires: ['settings:view'],
	},
};
export const SettingsPermissionsList = Object.keys(SettingsPermissions) as SettingsPermissionsIdsI[];
export const SettingsPermissionsListing: PermissionsListingI = {
	title: 'Permissions des paramètres',
	description: 'Permissions liées aux paramètres',
	permissions: SettingsPermissionsList,
};
