interface RatingI {
	fromStudent: StudentI;
	toStudent: StudentI;
	importance: number;
	frequency: number;
	quality: number;
}

interface ChartI {
	Student: StudentI;
	moyImportance: number;
	moyFrequency: number;
	moyQuality: number;
}
