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
export declare type ExercisesCreateFormInputValues = {
    name?: string;
    video?: string;
};
export declare type ExercisesCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    video?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExercisesCreateFormOverridesProps = {
    ExercisesCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    video?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExercisesCreateFormProps = React.PropsWithChildren<{
    overrides?: ExercisesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ExercisesCreateFormInputValues) => ExercisesCreateFormInputValues;
    onSuccess?: (fields: ExercisesCreateFormInputValues) => void;
    onError?: (fields: ExercisesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ExercisesCreateFormInputValues) => ExercisesCreateFormInputValues;
    onValidate?: ExercisesCreateFormValidationValues;
} & React.CSSProperties>;
export default function ExercisesCreateForm(props: ExercisesCreateFormProps): React.ReactElement;
