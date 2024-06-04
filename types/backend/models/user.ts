import {
	ApplySchemaOptions,
	FlatRecord,
	HydratedDocument,
	Model,
	ObtainDocumentType,
	/* QueryWithHelpers, */
	ResolveSchemaOptions,
} from 'mongoose';

import { TimeType } from './general';

export interface UserVirtuals {
	fullName: string;
}
export interface UserInstanceMethods {
	comparePassword: (this: UserHydratedDocument, password: string) => Promise<boolean>;
	comparePublicKey: (this: UserHydratedDocument, publicKey: string) => Promise<boolean>;
	generatePublicKey: (this: UserHydratedDocument) => Promise<string>;
	generateAuthToken: (this: UserHydratedDocument) => Promise<string>;
	toOptimizedObject: <T extends false | true = false>(
		this: UserHydratedDocument,
		convertDate?: T
	) => UserI<string, TimeType<T>>;
	toNecessaryUser: (this: UserHydratedDocument, replace?: boolean) => NecessaryUserI;
}
/* QueryWithHelpers<UserHydratedDocument | null, UserHydratedDocument, UserQueryHelpers, UserDocumentI<ValidationHydratedDocument>,'findOne' >; */
export interface UserQueryHelpers {}
export interface UserDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<UserDocument, UserDocumentI, ResolveSchemaOptions<UserSchemaOptions>>,
		ResolveSchemaOptions<UserSchemaOptions>
	> {}
export interface UserHydratedDocument
	extends HydratedDocument<FlatRecord<UserDocument>, UserInstanceMethods & UserVirtuals, UserQueryHelpers> {}

export interface UserStaticMethods {
	// custom static methods here
	createUser: (this: UserModel, basicUser: UserRegistrationI) => Promise<[UserHydratedDocument, string]>;
	findByCredentials: (this: UserModel, email: string, password: string) => Promise<UserHydratedDocument>;
	// registerGoogleUser: (this: UserModel, user: UserGoogleRegistrationI) => Promise<[UserHydratedDocument, boolean]>;
	findByUsername: (this: UserModel, username: string) => Promise<UserHydratedDocument | null>;
	findByEmail: (this: UserModel, email: string) => Promise<UserHydratedDocument | null>;
	// findUnique: (this: UserModel, username: string) => Promise<UserHydratedDocument>;
}
export interface UserSchemaOptions {
	timestamps: true;
}
export interface UserModel
	extends Model<UserDocumentI, UserQueryHelpers, UserInstanceMethods, UserVirtuals, UserHydratedDocument>,
		UserStaticMethods {}
