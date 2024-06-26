declare type GeneralPermissionsIdsEnum =
	| AdminPermissionsIdsI
	| StudentPermissionsIdsI
	| SessionPermissionsIdsI
	| QuestionPermissionsIdsI
	| FileUploadPermissionsIdsI
	| SettingsPermissionsIdsI;
declare type PermissionsIdEnum = 'super:admin' | GeneralPermissionsIdsEnum;

declare interface PermissionsI {
	id: PermissionsIdEnum;
	name: string;
	description: string;
	requires: PermissionsIdEnum[];
}

declare interface PermissionsListingI {
	title: string;
	description: string;
	permissions: PermissionsIdEnum[];
}
