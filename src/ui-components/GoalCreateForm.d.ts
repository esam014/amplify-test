/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GoalCreateFormInputValues = {
    short_term_goal?: string;
    long_term_goal?: string;
};
export declare type GoalCreateFormValidationValues = {
    short_term_goal?: ValidationFunction<string>;
    long_term_goal?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GoalCreateFormOverridesProps = {
    GoalCreateFormGrid?: FormProps<GridProps>;
    short_term_goal?: FormProps<TextFieldProps>;
    long_term_goal?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GoalCreateFormProps = React.PropsWithChildren<{
    overrides?: GoalCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GoalCreateFormInputValues) => GoalCreateFormInputValues;
    onSuccess?: (fields: GoalCreateFormInputValues) => void;
    onError?: (fields: GoalCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: GoalCreateFormInputValues) => GoalCreateFormInputValues;
    onValidate?: GoalCreateFormValidationValues;
} & React.CSSProperties>;
export default function GoalCreateForm(props: GoalCreateFormProps): React.ReactElement;
