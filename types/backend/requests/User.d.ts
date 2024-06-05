declare interface GetUserShapeI {
	body: any;
	query: any;
	params: {
		id: string;
	};
}
declare interface UpdateUserShapeI {
	body: Partial<BasicUserI>;
	query: any;
	params: {
		id: string;
	};
}

declare type DeleteUserShapeI = GetUserShapeI;
