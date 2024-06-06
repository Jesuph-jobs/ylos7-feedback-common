import { z } from '../defaultZod';
type Permissions = Readonly<[PermissionsIdEnum, ...PermissionsIdEnum[]]>;

export const permissionsMap: Record<PermissionsIdEnum, PermissionsIdEnum> = {
	'admin:super': 'admin:super',
	read: 'read',
	write: 'write',
};
export const permissions = Object.keys(permissionsMap) as unknown as Permissions;

export const permissionSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.enum<PermissionsIdEnum, Permissions>(permissions, {
			invalid_type_error: msg?.invalid || 'Invalid permission',
			required_error: msg?.required || 'Permission is required',
			description: msg?.description || 'The permission',
		})
		.openapi('Permission', {
			description: msg?.description || 'The permission',
			format: 'read | write | delete',
		});
