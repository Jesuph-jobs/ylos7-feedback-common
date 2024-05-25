declare interface CardI {
	id: keyof RatingParamsI;
	title: string;
	description: string;
}

declare interface RatingCardI extends CardI {
	rating: number;
	participantId: string;
	setRating: (rating: number) => void;
}
