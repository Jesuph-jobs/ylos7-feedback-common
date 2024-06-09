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

declare type GeneralPermissionsEnums = Readonly<[GeneralPermissionsIdsEnum, ...GeneralPermissionsIdsEnum[]]>;
declare type PermissionsEnums = Readonly<[PermissionsIdEnum, ...PermissionsIdEnum[]]>;
declare interface PermissionsListingI {
	title: string;
	description: string;
	permissions: PermissionsIdEnum[];
}
