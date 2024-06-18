declare type SessionGlobalPermissionsIdsI = 'session:all' | 'session:view';
declare type SessionManagementPermissionsIdsI = 'session:create' | 'session:edit' | 'session:delete';
declare type SessionResultManagementPermissionsIdsI =
	| 'session:results:all'
	| 'session:results:view'
	| 'session:results:export';
declare type SessionParticipantsManagementPermissionsIdsI =
	| 'session:participants:all'
	| 'session:participants:view'
	| 'session:participants:reset'
	| 'session:participants:add'
	| 'session:participants:remove';

declare type SessionStateManagementPermissionsIdsI =
	| 'session:state:all'
	| 'session:state:activate'
	| 'session:state:complete'
	| 'session:state:cancel'
	| 'session:state:reset';

// declare type SessionActivitiesPermissionsIdsI = 'session:activity_logs';
declare type SessionPermissionsIdsI =
	/* session */
	| SessionGlobalPermissionsIdsI
	| SessionManagementPermissionsIdsI
	| SessionStateManagementPermissionsIdsI
	| SessionResultManagementPermissionsIdsI
	| SessionParticipantsManagementPermissionsIdsI;
//| SessionActivitiesPermissionsIdsI;
