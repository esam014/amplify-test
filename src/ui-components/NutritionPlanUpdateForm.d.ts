/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NutritionPlan } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NutritionPlanUpdateFormInputValues = {
    calorie_target?: number;
    protein_target?: number;
    carb_target?: number;
    fat_target?: number;
    end_date?: string;
};
export declare type NutritionPlanUpdateFormValidationValues = {
    calorie_target?: ValidationFunction<number>;
    protein_target?: ValidationFunction<number>;
    carb_target?: ValidationFunction<number>;
    fat_target?: ValidationFunction<number>;
    end_date?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NutritionPlanUpdateFormOverridesProps = {
    NutritionPlanUpdateFormGrid?: FormProps<GridProps>;
    calorie_target?: FormProps<TextFieldProps>;
    protein_target?: FormProps<TextFieldProps>;
    carb_target?: FormProps<TextFieldProps>;
    fat_target?: FormProps<TextFieldProps>;
    end_date?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NutritionPlanUpdateFormProps = React.PropsWithChildren<{
    overrides?: NutritionPlanUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    nutritionPlan?: NutritionPlan;
    onSubmit?: (fields: NutritionPlanUpdateFormInputValues) => NutritionPlanUpdateFormInputValues;
    onSuccess?: (fields: NutritionPlanUpdateFormInputValues) => void;
    onError?: (fields: NutritionPlanUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NutritionPlanUpdateFormInputValues) => NutritionPlanUpdateFormInputValues;
    onValidate?: NutritionPlanUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NutritionPlanUpdateForm(props: NutritionPlanUpdateFormProps): React.ReactElement;
