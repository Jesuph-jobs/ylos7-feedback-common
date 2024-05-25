declare interface ParticipantRatingI<T extends NecessaryUserI | string = NecessaryUserI> extends RatingParamsI {
	participant: T;
}
declare interface RatingsSubmissionI<T extends NecessaryUserI | string = NecessaryUserI> {
	rater: T | null;
	participants: ParticipantRatingI<T>[];
	timeTaken: number;
}
declare interface RatingParamsI {
	quality: number;
	importance: number;
	frequency: number;
}
declare interface FormSessionDataI {
	rater: NecessaryUserI;
	participants: NecessaryUserI[];
}
