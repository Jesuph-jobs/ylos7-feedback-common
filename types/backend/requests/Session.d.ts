declare interface GetSessionShapeI {
	body: any;
	query: any;
	params: {
		id: string;
	};
}
declare interface UpdateSessionShapeI {
	body: Partial<Omit<BasicSessionI<string, string | Date>, 'participants'>>;
	query: any;
	params: {
		id: string;
	};
}

declare interface CreateSessionShapeI {
	body: Omit<BasicSessionI<string, string | Date>, 'participants'>;
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
