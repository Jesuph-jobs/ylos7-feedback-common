declare interface ModalI<BodyTypeT extends string = 'DEFAULT', ExtraObjectT extends object | null = null> {
	title?: string;
	bodyType: BodyTypeT;
	size?: string;
	shake?: boolean;
	extraObject: ExtraObjectT;
}
declare interface OpenableModalI<BodyTypeT extends string = 'DEFAULT', ExtraObjectT extends object | null = null>
	extends ModalI<BodyTypeT, ExtraObjectT> {
	isOpen: boolean;
}
