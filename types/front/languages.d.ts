type MainLanguagesI = 'FR';
type SecondaryLanguagesI = 'EN' | 'AR';

type LanguagesI = MainLanguagesI /* | SecondaryLanguagesI */;
declare type LanguagesContentI = {
	[key in MainLanguagesI]: string;
} /* & {
	[key in SecondaryLanguagesI]?: string;
} */;
