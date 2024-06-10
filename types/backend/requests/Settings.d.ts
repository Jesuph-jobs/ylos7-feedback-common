declare interface UpdateSettingsShapeI {
	body: {
		value: SettingsMapI[SettingsKeys];
	};
	query: any;
	params: {
		key: SettingsKeys;
	};
}
declare interface GetSettingByKeyShapeI {
	body: any;
	query: any;
	params: {
		key: SettingsKeys;
	};
}
