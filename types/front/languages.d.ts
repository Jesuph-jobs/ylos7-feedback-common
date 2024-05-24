type MainLanguagesI = 'EN';
type SecondaryLanguagesI = 'FR' | 'AR';

type LanguagesI = MainLanguagesI | SecondaryLanguagesI;
declare type LanguagesContentI = {
	[key in MainLanguagesI]: string;
} & {
	[key in SecondaryLanguagesI]?: string;
};
