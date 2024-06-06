export const SessionPermissions: Record<SessionPermissionsIdsI, PermissionsI> = {
	'session:all': {
		id: 'session:all',
		name: 'All Session',
		description: 'All the session management permissions',
		requires: ['session:view', 'session:edit', 'session:create', 'session:delete'],
	},
	'session:view': {
		id: 'session:view',
		name: 'View Session',
		description: 'View Sessions and their details',
		requires: [],
	},
	'session:edit': {
		id: 'session:edit',
		name: 'Edit Session',
		description: 'Edit Session general information',
		requires: ['session:view'],
	},

	'session:create': {
		id: 'session:create',
		name: 'Create Session',
		description: 'Create a new Session',
		requires: ['session:view'],
	},
	'session:delete': {
		id: 'session:delete',
		name: 'Delete Session',
		description: 'Delete a Session',
		requires: ['session:view'],
	},
	'session:participants:add': {
		id: 'session:participants:add',
		name: 'Add Participants',
		description: 'Add participants to a session',
		requires: ['session:view'],
	},
	'session:participants:remove': {
		id: 'session:participants:remove',
		name: 'Remove Participants',
		description: 'Remove participants from a session',
		requires: ['session:view'],
	},
	'session:participants:view': {
		id: 'session:participants:view',
		name: 'View Participants',
		description: 'View participants of a session',
		requires: ['session:view'],
	},
	'session:participants:all': {
		id: 'session:participants:all',
		name: 'All Participants',
		description: 'All the participants management permissions',
		requires: ['session:participants:view', 'session:participants:add', 'session:participants:remove'],
	},
	'session:state:activate': {
		id: 'session:state:activate',
		name: 'Activate Session',
		description: 'Activate a session',
		requires: ['session:view'],
	},
	'session:state:complete': {
		id: 'session:state:complete',
		name: 'Complete Session',
		description: 'Complete a session',
		requires: ['session:view'],
	},
	'session:state:cancel': {
		id: 'session:state:cancel',
		name: 'Cancel Session',
		description: 'Cancel a session',
		requires: ['session:view'],
	},
	'session:state:reset': {
		id: 'session:state:reset',
		name: 'Reset Session',
		description: 'Reset a session',
		requires: ['session:view'],
	},
	'session:results:all': {
		id: 'session:results:all',
		name: 'All Results',
		description: 'All the results management permissions',
		requires: ['session:results:view', 'session:results:export'],
	},
	'session:results:view': {
		id: 'session:results:view',
		name: 'View Results',
		description: 'View results of a session',
		requires: ['session:view'],
	},
	'session:results:export': {
		id: 'session:results:export',
		name: 'Export Results',
		description: 'Export results of a session',
		requires: ['session:view'],
	},
	'session:state:all': {
		id: 'session:state:all',
		name: 'All State',
		description: 'All the state management permissions',
		requires: ['session:state:activate', 'session:state:complete', 'session:state:cancel', 'session:state:reset'],
	},
};
export const SessionPermissionsList = Object.keys(SessionPermissions) as SessionPermissionsIdsI[];
