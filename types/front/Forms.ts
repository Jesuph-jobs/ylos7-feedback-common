import { Message, Schema } from 'yup';

interface SelectOptionI {
	value: string | number;
	label: string;
}
export interface TextFieldProps<T extends object | null = null> {
	autoComplete?: string;
	className?: string;
	autoFocus?: boolean;
	disabled?: boolean;
	error?: boolean;
	fullWidth?: boolean;
	helperText?: React.ReactNode;
	id?: string;
	step?: number;
	label?: string;
	name: T extends object ? keyof T : string;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	placeholder: string;
	readOnly?: boolean;
	required?: boolean;
	type: string;
	value?: string;
	enums?: SelectOptionI[];
	labelClassName?: string;
	inputClassName?: string;
	prefixClassName?: string;
	suffixClassName?: string;
	prefix?: JSX.Element | string;
	suffix?: JSX.Element | string;
}

export type AuthI<T extends UserAuthI = UserAuthI> = {
	useMutation: UserLogInI;
	validationSchema: Schema;
	initialValues: T;
	inputs: TextFieldProps<T>[];
	message?: Message;
	children?: React.ReactNode;
	rememberMe?: boolean;
};
