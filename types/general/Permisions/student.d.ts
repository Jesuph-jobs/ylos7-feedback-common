declare type StudentGlobalPermissionsIdsI = 'student:all' | 'student:view';
declare type StudentManagementPermissionsIdsI = 'student:create' | 'student:edit' | 'student:delete';

// declare type StudentActivitiesPermissionsIdsI = 'student:activity_logs';
declare type StudentPermissionsIdsI =
	/* student */
	StudentGlobalPermissionsIdsI | StudentManagementPermissionsIdsI;
//| StudentActivitiesPermissionsIdsI;
