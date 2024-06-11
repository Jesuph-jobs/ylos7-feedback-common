import { z } from '../../defaultZod';

import { AdminPermissions, AdminPermissionsListing } from './admin';
import { FileUploadPermissions, FileUploadPermissionsListing } from './file';
import { QuestionPermissions, QuestionPermissionsListing } from './question';
import { SessionPermissions, SessionPermissionsListing } from './session';
import { SettingsPermissions, SettingsPermissionsListing } from './settings';
import { StudentPermissions, StudentPermissionsListing } from './student';

export const generalPermissionsMap: Record<GeneralPermissionsIdsEnum, PermissionsI> = {
	...AdminPermissions,
	...StudentPermissions,
	...SessionPermissions,
	...QuestionPermissions,
	...FileUploadPermissions,
	...SettingsPermissions,
};
export const permissionsMap: Record<PermissionsIdEnum, PermissionsI> = {
	'super:admin': {
		id: 'super:admin',
		name: 'Super Admin',
		description:
			'Toutes les permissions, y compris la gestion des administrateurs et de leurs permissions (inclut : supprimer un administrateur)',
		requires: [],
	},
	...generalPermissionsMap,
};
export const generalPermissions = Object.keys(generalPermissionsMap) as unknown as MyEnum<GeneralPermissionsIdsEnum>;
export const permissions = Object.keys(permissionsMap) as unknown as MyEnum<PermissionsIdEnum>;

export const permissionsListings: PermissionsListingI[] = [
	AdminPermissionsListing,
	StudentPermissionsListing,
	SessionPermissionsListing,
	QuestionPermissionsListing,
	FileUploadPermissionsListing,
	SettingsPermissionsListing,
];

export const permissionSchema = (msg?: ErrorsSchemaMsgI) =>
	z
		.enum<PermissionsIdEnum, MyEnum<PermissionsIdEnum>>(permissions, {
			invalid_type_error: msg?.invalid || 'Permission invalide',
			required_error: msg?.required || 'La permission est requise',
			description: msg?.description || 'La permission',
		})
		.openapi('Permission', {
			description: msg?.description || 'La permission',
			format: 'lecture | écriture | suppression',
		});
