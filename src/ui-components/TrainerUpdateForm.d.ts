/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Trainer } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TrainerUpdateFormInputValues = {};
export declare type TrainerUpdateFormValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrainerUpdateFormOverridesProps = {
    TrainerUpdateFormGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type TrainerUpdateFormProps = React.PropsWithChildren<{
    overrides?: TrainerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    trainer?: Trainer;
    onSubmit?: (fields: TrainerUpdateFormInputValues) => TrainerUpdateFormInputValues;
    onSuccess?: (fields: TrainerUpdateFormInputValues) => void;
    onError?: (fields: TrainerUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TrainerUpdateFormInputValues) => TrainerUpdateFormInputValues;
    onValidate?: TrainerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TrainerUpdateForm(props: TrainerUpdateFormProps): React.ReactElement;
