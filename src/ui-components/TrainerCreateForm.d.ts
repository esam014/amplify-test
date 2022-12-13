/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TrainerCreateFormInputValues = {};
export declare type TrainerCreateFormValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrainerCreateFormOverridesProps = {
    TrainerCreateFormGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type TrainerCreateFormProps = React.PropsWithChildren<{
    overrides?: TrainerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TrainerCreateFormInputValues) => TrainerCreateFormInputValues;
    onSuccess?: (fields: TrainerCreateFormInputValues) => void;
    onError?: (fields: TrainerCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TrainerCreateFormInputValues) => TrainerCreateFormInputValues;
    onValidate?: TrainerCreateFormValidationValues;
} & React.CSSProperties>;
export default function TrainerCreateForm(props: TrainerCreateFormProps): React.ReactElement;
