declare type QuestionGlobalPermissionsIdsI = 'question:all' | 'question:view';
declare type QuestionManagementPermissionsIdsI = 'question:create' | 'question:edit' | 'question:delete';

// declare type QuestionActivitiesPermissionsIdsI = 'question:activity_logs';
declare type QuestionPermissionsIdsI =
	/* question */
	QuestionGlobalPermissionsIdsI | QuestionManagementPermissionsIdsI;
//| QuestionActivitiesPermissionsIdsI;
