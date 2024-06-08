export const StudentPermissions: Record<StudentPermissionsIdsI, PermissionsI> = {
	'student:all': {
		id: 'student:all',
		name: 'All Student',
		description: 'All the student management permissions',
		requires: ['student:view', 'student:edit', 'student:create'],
	},
	'student:view': {
		id: 'student:view',
		name: 'View Student',
		description: 'View Students and their details',
		requires: [],
	},
	'student:edit': {
		id: 'student:edit',
		name: 'Edit Student',
		description: 'Edit Student general information',
		requires: ['student:view'],
	},

	'student:create': {
		id: 'student:create',
		name: 'Create Student',
		description: 'Create a new Student',
		requires: ['student:view'],
	},
	'student:delete': {
		id: 'student:delete',
		name: 'Delete Student',
		description: 'Delete a Student',
		requires: ['student:view'],
	},
};
export const StudentPermissionsList = Object.keys(StudentPermissions) as StudentPermissionsIdsI[];
