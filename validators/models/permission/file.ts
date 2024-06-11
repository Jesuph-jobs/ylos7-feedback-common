export const FileUploadPermissions: Record<FileUploadPermissionsIdsI, PermissionsI> = {
	'file:upload': {
		id: 'file:upload',
		name: 'Téléchargement de fichiers',
		description: 'Télécharger des fichiers',
		requires: [],
	},
};
export const FileUploadPermissionsList = Object.keys(FileUploadPermissions) as FileUploadPermissionsIdsI[];
export const FileUploadPermissionsListing: PermissionsListingI = {
	title: 'Permissions de téléchargement de fichiers',
	description: 'Permissions liées au téléchargement de fichiers',
	permissions: FileUploadPermissionsList,
};
