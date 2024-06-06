export const QuestionPermissions: Record<QuestionPermissionsIdsI, PermissionsI> = {
	'question:all': {
		id: 'question:all',
		name: 'All Question',
		description: 'All the question management permissions',
		requires: ['question:view', 'question:edit', 'question:create'],
	},
	'question:view': {
		id: 'question:view',
		name: 'View Question',
		description: 'View Questions and their details',
		requires: [],
	},
	'question:edit': {
		id: 'question:edit',
		name: 'Edit Question',
		description: 'Edit Question general information',
		requires: ['question:view'],
	},

	'question:create': {
		id: 'question:create',
		name: 'Create Question',
		description: 'Create a new Question',
		requires: ['question:view'],
	},
	'question:delete': {
		id: 'question:delete',
		name: 'Delete Question',
		description: 'Delete a Question',
		requires: ['question:view'],
	},
};
export const QuestionPermissionsList = Object.keys(QuestionPermissions) as unknown as QuestionPermissionsIdsI;
