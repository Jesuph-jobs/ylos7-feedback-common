export const QuestionPermissions: Record<QuestionPermissionsIdsI, PermissionsI> = {
	'question:all': {
		id: 'question:all',
		name: 'All Question',
		description: 'All the question management permissions',
		requires: ['question:view', 'question:edit', /* 'question:create', 'question:delete', */ 'session:view'],
	},
	'question:view': {
		id: 'question:view',
		name: 'View Question',
		description: 'View Questions and their details',
		requires: ['session:view'],
	},
	'question:edit': {
		id: 'question:edit',
		name: 'Edit Question',
		description: 'Edit Question general information',
		requires: ['session:view', 'question:view'],
	},

	/* 'question:create': {
		id: 'question:create',
		name: 'Create Question',
		description: 'Create a new Question',
		requires: ['session:view', 'question:view'],
	},
	'question:delete': {
		id: 'question:delete',
		name: 'Delete Question',
		description: 'Delete a Question',
		requires: ['session:view', 'question:view'],
	}, */
};
export const QuestionPermissionsList = Object.keys(QuestionPermissions) as QuestionPermissionsIdsI[];
