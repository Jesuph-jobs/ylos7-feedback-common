declare type GeneralPermissionsIdsEnum =
	| AdminPermissionsIdsI
	| StudentPermissionsIdsI
	| SessionPermissionsIdsI
	| QuestionPermissionsIdsI
	| FileUploadPermissionsIdsI;
declare type PermissionsIdEnum = 'super:admin' | GeneralPermissionsIdsEnum;

declare interface PermissionsI {
	id: PermissionsIdEnum;
	name: string;
	description: string;
	requires: PermissionsIdEnum[];
}

declare type GeneralPermissionsEnums = Readonly<[GeneralPermissionsIdsEnum, ...GeneralPermissionsIdsEnum[]]>;
declare type PermissionsEnums = Readonly<[PermissionsIdEnum, ...PermissionsIdEnum[]]>;
