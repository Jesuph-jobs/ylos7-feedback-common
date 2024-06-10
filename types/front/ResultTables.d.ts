declare interface DataRenderI<U = GlobalAnswersI> {
	label: string;
	render: (answer: U) => string | number;
	colSpan?: number;
}
declare interface ColSpanI {
	colSpan: number;
	label: string;
}
