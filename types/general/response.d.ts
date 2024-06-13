declare interface ResponseI<T = null, S = boolean> {
	success: S;
	message: string;
	data: T;
	statusCode: number;
}
