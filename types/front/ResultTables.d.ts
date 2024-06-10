declare interface DataRenderI {
	label: string;
	render: (answer: GlobalAnswersI) => string | number;
}
