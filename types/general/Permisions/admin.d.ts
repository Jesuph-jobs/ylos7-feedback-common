declare type AdminGlobalPermissionsIdsI = 'admin:all' | 'admin:view';
declare type AdminManagementPermissionsIdsI = 'admin:create' | 'admin:edit';

//declare type AdminActivitiesPermissionsIdsI = 'admin:activity_logs';
declare type AdminPermissionsIdsI =
	/* admin */
	AdminGlobalPermissionsIdsI | AdminManagementPermissionsIdsI;
//	| AdminActivitiesPermissionsIdsI;
