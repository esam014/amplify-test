/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserCreateFormInputValues = {
    username?: string;
    first_name?: string;
    last_name?: string;
    role?: string;
    email?: string;
    sub?: string;
    state?: string;
    phone?: string;
    address?: string;
    city?: string;
    addr_state?: string;
    zip?: string;
};
export declare type UserCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    sub?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    addr_state?: ValidationFunction<string>;
    zip?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserCreateFormOverridesProps = {
    UserCreateFormGrid?: FormProps<GridProps>;
    username?: FormProps<TextFieldProps>;
    first_name?: FormProps<TextFieldProps>;
    last_name?: FormProps<TextFieldProps>;
    role?: FormProps<SelectFieldProps>;
    email?: FormProps<TextFieldProps>;
    sub?: FormProps<TextFieldProps>;
    state?: FormProps<SelectFieldProps>;
    phone?: FormProps<TextFieldProps>;
    address?: FormProps<TextFieldProps>;
    city?: FormProps<TextFieldProps>;
    addr_state?: FormProps<TextFieldProps>;
    zip?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserCreateFormProps = React.PropsWithChildren<{
    overrides?: UserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onSuccess?: (fields: UserCreateFormInputValues) => void;
    onError?: (fields: UserCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onValidate?: UserCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserCreateForm(props: UserCreateFormProps): React.ReactElement;
