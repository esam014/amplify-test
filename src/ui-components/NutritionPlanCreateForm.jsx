/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { NutritionPlan } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function NutritionPlanCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    calorie_target: undefined,
    protein_target: undefined,
    carb_target: undefined,
    fat_target: undefined,
    end_date: undefined,
  };
  const [calorie_target, setCalorie_target] = React.useState(
    initialValues.calorie_target
  );
  const [protein_target, setProtein_target] = React.useState(
    initialValues.protein_target
  );
  const [carb_target, setCarb_target] = React.useState(
    initialValues.carb_target
  );
  const [fat_target, setFat_target] = React.useState(initialValues.fat_target);
  const [end_date, setEnd_date] = React.useState(initialValues.end_date);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCalorie_target(initialValues.calorie_target);
    setProtein_target(initialValues.protein_target);
    setCarb_target(initialValues.carb_target);
    setFat_target(initialValues.fat_target);
    setEnd_date(initialValues.end_date);
    setErrors({});
  };
  const validations = {
    calorie_target: [],
    protein_target: [],
    carb_target: [],
    fat_target: [],
    end_date: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          calorie_target,
          protein_target,
          carb_target,
          fat_target,
          end_date,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new NutritionPlan(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "NutritionPlanCreateForm")}
    >
      <TextField
        label="Calorie target"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              calorie_target: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              calorie_target: value,
              protein_target,
              carb_target,
              fat_target,
              end_date,
            };
            const result = onChange(modelFields);
            value = result?.calorie_target ?? value;
          }
          if (errors.calorie_target?.hasError) {
            runValidationTasks("calorie_target", value);
          }
          setCalorie_target(value);
        }}
        onBlur={() => runValidationTasks("calorie_target", calorie_target)}
        errorMessage={errors.calorie_target?.errorMessage}
        hasError={errors.calorie_target?.hasError}
        {...getOverrideProps(overrides, "calorie_target")}
      ></TextField>
      <TextField
        label="Protein target"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              protein_target: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              calorie_target,
              protein_target: value,
              carb_target,
              fat_target,
              end_date,
            };
            const result = onChange(modelFields);
            value = result?.protein_target ?? value;
          }
          if (errors.protein_target?.hasError) {
            runValidationTasks("protein_target", value);
          }
          setProtein_target(value);
        }}
        onBlur={() => runValidationTasks("protein_target", protein_target)}
        errorMessage={errors.protein_target?.errorMessage}
        hasError={errors.protein_target?.hasError}
        {...getOverrideProps(overrides, "protein_target")}
      ></TextField>
      <TextField
        label="Carb target"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              carb_target: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              calorie_target,
              protein_target,
              carb_target: value,
              fat_target,
              end_date,
            };
            const result = onChange(modelFields);
            value = result?.carb_target ?? value;
          }
          if (errors.carb_target?.hasError) {
            runValidationTasks("carb_target", value);
          }
          setCarb_target(value);
        }}
        onBlur={() => runValidationTasks("carb_target", carb_target)}
        errorMessage={errors.carb_target?.errorMessage}
        hasError={errors.carb_target?.hasError}
        {...getOverrideProps(overrides, "carb_target")}
      ></TextField>
      <TextField
        label="Fat target"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              fat_target: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              calorie_target,
              protein_target,
              carb_target,
              fat_target: value,
              end_date,
            };
            const result = onChange(modelFields);
            value = result?.fat_target ?? value;
          }
          if (errors.fat_target?.hasError) {
            runValidationTasks("fat_target", value);
          }
          setFat_target(value);
        }}
        onBlur={() => runValidationTasks("fat_target", fat_target)}
        errorMessage={errors.fat_target?.errorMessage}
        hasError={errors.fat_target?.hasError}
        {...getOverrideProps(overrides, "fat_target")}
      ></TextField>
      <TextField
        label="End date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              calorie_target,
              protein_target,
              carb_target,
              fat_target,
              end_date: value,
            };
            const result = onChange(modelFields);
            value = result?.end_date ?? value;
          }
          if (errors.end_date?.hasError) {
            runValidationTasks("end_date", value);
          }
          setEnd_date(value);
        }}
        onBlur={() => runValidationTasks("end_date", end_date)}
        errorMessage={errors.end_date?.errorMessage}
        hasError={errors.end_date?.hasError}
        {...getOverrideProps(overrides, "end_date")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
