declare interface GetSessionShapeI {
	body: any;
	query: any;
	params: {
		id: string;
	};
}
declare interface UpdateSessionShapeI {
	body: Partial<BasicSessionNoParticipantI<string, string | Date>>;
	query: any;
	params: {
		id: string;
	};
}

declare interface CreateSessionShapeI {
	body: BasicSessionNoParticipantI<string | Date>;
	query: any;
	params: any;
}

declare interface UpdateSessionAddParticipantShapeI {
	body: any;
	query: any;
	params: {
		id: string;
		participant: string;
	};
}

declare type UpdateSessionRemoveParticipantShapeI = UpdateSessionAddParticipantShapeI;

declare type DeleteSessionShapeI = GetSessionShapeI;
