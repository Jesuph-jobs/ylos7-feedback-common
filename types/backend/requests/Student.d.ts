declare interface GetStudentShapeI {
	body: any;
	query: any;
	params: {
		id: string;
	};
}
declare interface UpdateStudentShapeI {
	body: Partial<BasicStudentI>;
	query: any;
	params: {
		id: string;
	};
}
declare interface CreateStudentShapeI {
	body: BasicStudentI;
	query: any;
	params: any;
}
declare type DeleteStudentShapeI = GetStudentShapeI;
