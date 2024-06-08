import { z } from '../../defaultZod';

import { AdminPermissions } from './admin';
import { FileUploadPermissions } from './file';
import { QuestionPermissions } from './question';
import { SessionPermissions } from './session';
import { StudentPermissions } from './student';

export const generalPermissionsMap: Record<GeneralPermissionsIdsEnum, PermissionsI> = {
	...AdminPermissions,
	...StudentPermissions,
	...SessionPermissions,
	...QuestionPermissions,
	...FileUploadPermissions,
};
export const permissionsMap: Record<PermissionsIdEnum, PermissionsI> = {
	'super:admin': {
		id: 'super:admin',
		name: 'Super Admin',
		description: 'All the permissions, including managing admins and their permissions(includes: delete admin)',
		requires: [],
	},
	...generalPermissionsMap,
};
export const generalPermissions = Object.keys(generalPermissionsMap) as unknown as GeneralPermissionsEnums;
export const permissions = Object.keys(permissionsMap) as unknown as PermissionsEnums;

export const permissionSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.enum<PermissionsIdEnum, PermissionsEnums>(permissions, {
			invalid_type_error: msg?.invalid || 'Invalid permission',
			required_error: msg?.required || 'Permission is required',
			description: msg?.description || 'The permission',
		})
		.openapi('Permission', {
			description: msg?.description || 'The permission',
			format: 'read | write | delete',
		});
