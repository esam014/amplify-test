/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Goal } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GoalUpdateFormInputValues = {
    short_term_goal?: string;
    long_term_goal?: string;
};
export declare type GoalUpdateFormValidationValues = {
    short_term_goal?: ValidationFunction<string>;
    long_term_goal?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GoalUpdateFormOverridesProps = {
    GoalUpdateFormGrid?: FormProps<GridProps>;
    short_term_goal?: FormProps<TextFieldProps>;
    long_term_goal?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GoalUpdateFormProps = React.PropsWithChildren<{
    overrides?: GoalUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    goal?: Goal;
    onSubmit?: (fields: GoalUpdateFormInputValues) => GoalUpdateFormInputValues;
    onSuccess?: (fields: GoalUpdateFormInputValues) => void;
    onError?: (fields: GoalUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: GoalUpdateFormInputValues) => GoalUpdateFormInputValues;
    onValidate?: GoalUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GoalUpdateForm(props: GoalUpdateFormProps): React.ReactElement;
