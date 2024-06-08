export const FileUploadPermissions: Record<FileUploadPermissionsIdsI, PermissionsI> = {
	'file:upload': {
		id: 'file:upload',
		name: 'File Upload',
		description: 'Upload files',
		requires: [],
	},
};
export const FileUploadPermissionsList = Object.keys(FileUploadPermissions) as FileUploadPermissionsIdsI[];
export const FileUploadPermissionsListing: PermissionsListingI = {
	title: 'File Upload Permissions',
	description: 'Permissions related to File Uploads',
	permissions: FileUploadPermissionsList,
};
