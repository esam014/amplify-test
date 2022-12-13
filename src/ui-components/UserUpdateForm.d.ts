/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserUpdateFormInputValues = {
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
export declare type UserUpdateFormValidationValues = {
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
export declare type UserUpdateFormOverridesProps = {
    UserUpdateFormGrid?: FormProps<GridProps>;
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
export declare type UserUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    user?: User;
    onSubmit?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onSuccess?: (fields: UserUpdateFormInputValues) => void;
    onError?: (fields: UserUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onValidate?: UserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserUpdateForm(props: UserUpdateFormProps): React.ReactElement;
