export const AdminPermissions: Record<AdminPermissionsIdsI, PermissionsI> = {
	'admin:all': {
		id: 'admin:all',
		name: 'All Admin',
		description: 'All the admin management permissions',
		requires: ['admin:view', 'admin:edit', 'admin:create'],
	},
	'admin:view': {
		id: 'admin:view',
		name: 'View Admin',
		description: 'View Admins and their details',
		requires: [],
	},
	'admin:edit': {
		id: 'admin:edit',
		name: 'Edit Admin',
		description: 'Edit Admin general information',
		requires: ['admin:view', 'file:upload'],
	},

	'admin:create': {
		id: 'admin:create',
		name: 'Create Admin',
		description: 'Create a new Admin',
		requires: ['admin:view', 'file:upload'],
	},
};
export const AdminPermissionsList = Object.keys(AdminPermissions) as AdminPermissionsIdsI[];
export const AdminPermissionsListing: PermissionsListingI = {
	title: 'Admin Permissions',
	description: 'Permissions related to Admins',
	permissions: AdminPermissionsList,
};
