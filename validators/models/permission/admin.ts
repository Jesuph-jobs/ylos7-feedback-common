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
		requires: ['admin:view'],
	},

	'admin:create': {
		id: 'admin:create',
		name: 'Create Admin',
		description: 'Create a new Admin',
		requires: ['admin:view'],
	},
};
export const AdminPermissionsList = Object.keys(AdminPermissions) as unknown as AdminPermissionsIdsI;
