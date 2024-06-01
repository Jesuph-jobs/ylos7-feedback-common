declare interface ParticipantRatingI<T extends StudentI | string = StudentI> extends RatingParamsI {
	participant: T;
}
declare interface RatingsSubmissionI<T extends StudentI | string = StudentI> {
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
	rater: StudentI;
	participants: StudentI[];
}
