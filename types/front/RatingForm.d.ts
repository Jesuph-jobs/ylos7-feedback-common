declare interface FormContextState {
	form: RatingsSubmissionI;
	currentIndex: number;
}
type RatingsSetter = (rating: number) => void;
declare interface RateActionI {
	rating: number;
	type: keyof RatingParamsI;
}
