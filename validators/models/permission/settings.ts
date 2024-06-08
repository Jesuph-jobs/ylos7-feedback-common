export const SettingsPermissions: Record<SettingsPermissionsIdsI, PermissionsI> = {
	'settings:all': {
		id: 'settings:all',
		name: 'All Settings',
		description: 'All settings',
		requires: ['settings:view', 'settings:edit'],
	},
	'settings:view': {
		id: 'settings:view',
		name: 'View Settings',
		description: 'View settings',
		requires: [],
	},
	'settings:edit': {
		id: 'settings:edit',
		name: 'Edit Settings',
		description: 'Edit settings',
		requires: ['settings:view'],
	},
};
export const SettingsPermissionsList = Object.keys(SettingsPermissions) as SettingsPermissionsIdsI[];
export const SettingsPermissionsListing: PermissionsListingI = {
	title: 'Settings Permissions',
	description: 'Permissions related to Settings',
	permissions: SettingsPermissionsList,
};
