/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PlatformConfig } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlatformConfigUpdateFormInputValues = {
    logo_file?: string;
    favicon_file?: string;
    primary_color?: string;
    secondary_color?: string;
    custom_url?: string;
    personal_web_enabled?: boolean;
    platform_nutrition_enabled?: boolean;
    platform_trainer_enabled?: boolean;
};
export declare type PlatformConfigUpdateFormValidationValues = {
    logo_file?: ValidationFunction<string>;
    favicon_file?: ValidationFunction<string>;
    primary_color?: ValidationFunction<string>;
    secondary_color?: ValidationFunction<string>;
    custom_url?: ValidationFunction<string>;
    personal_web_enabled?: ValidationFunction<boolean>;
    platform_nutrition_enabled?: ValidationFunction<boolean>;
    platform_trainer_enabled?: ValidationFunction<boolean>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlatformConfigUpdateFormOverridesProps = {
    PlatformConfigUpdateFormGrid?: FormProps<GridProps>;
    logo_file?: FormProps<TextFieldProps>;
    favicon_file?: FormProps<TextFieldProps>;
    primary_color?: FormProps<TextFieldProps>;
    secondary_color?: FormProps<TextFieldProps>;
    custom_url?: FormProps<TextFieldProps>;
    personal_web_enabled?: FormProps<SwitchFieldProps>;
    platform_nutrition_enabled?: FormProps<SwitchFieldProps>;
    platform_trainer_enabled?: FormProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type PlatformConfigUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlatformConfigUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    platformConfig?: PlatformConfig;
    onSubmit?: (fields: PlatformConfigUpdateFormInputValues) => PlatformConfigUpdateFormInputValues;
    onSuccess?: (fields: PlatformConfigUpdateFormInputValues) => void;
    onError?: (fields: PlatformConfigUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PlatformConfigUpdateFormInputValues) => PlatformConfigUpdateFormInputValues;
    onValidate?: PlatformConfigUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlatformConfigUpdateForm(props: PlatformConfigUpdateFormProps): React.ReactElement;
