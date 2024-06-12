interface ModelSchemaI<T extends object> {
	name: string;
	type: string;
	model: T;
}
