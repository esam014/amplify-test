/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Workout } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function WorkoutCreateForm(props) {
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
    warm_up: undefined,
    cool_down: undefined,
    muscle_group: undefined,
  };
  const [warm_up, setWarm_up] = React.useState(initialValues.warm_up);
  const [cool_down, setCool_down] = React.useState(initialValues.cool_down);
  const [muscle_group, setMuscle_group] = React.useState(
    initialValues.muscle_group
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setWarm_up(initialValues.warm_up);
    setCool_down(initialValues.cool_down);
    setMuscle_group(initialValues.muscle_group);
    setErrors({});
  };
  const validations = {
    warm_up: [],
    cool_down: [],
    muscle_group: [],
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
          warm_up,
          cool_down,
          muscle_group,
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
          await DataStore.save(new Workout(modelFields));
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
      {...getOverrideProps(overrides, "WorkoutCreateForm")}
    >
      <TextField
        label="Warm up"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              warm_up: value,
              cool_down,
              muscle_group,
            };
            const result = onChange(modelFields);
            value = result?.warm_up ?? value;
          }
          if (errors.warm_up?.hasError) {
            runValidationTasks("warm_up", value);
          }
          setWarm_up(value);
        }}
        onBlur={() => runValidationTasks("warm_up", warm_up)}
        errorMessage={errors.warm_up?.errorMessage}
        hasError={errors.warm_up?.hasError}
        {...getOverrideProps(overrides, "warm_up")}
      ></TextField>
      <TextField
        label="Cool down"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              warm_up,
              cool_down: value,
              muscle_group,
            };
            const result = onChange(modelFields);
            value = result?.cool_down ?? value;
          }
          if (errors.cool_down?.hasError) {
            runValidationTasks("cool_down", value);
          }
          setCool_down(value);
        }}
        onBlur={() => runValidationTasks("cool_down", cool_down)}
        errorMessage={errors.cool_down?.errorMessage}
        hasError={errors.cool_down?.hasError}
        {...getOverrideProps(overrides, "cool_down")}
      ></TextField>
      <TextField
        label="Muscle group"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              warm_up,
              cool_down,
              muscle_group: value,
            };
            const result = onChange(modelFields);
            value = result?.muscle_group ?? value;
          }
          if (errors.muscle_group?.hasError) {
            runValidationTasks("muscle_group", value);
          }
          setMuscle_group(value);
        }}
        onBlur={() => runValidationTasks("muscle_group", muscle_group)}
        errorMessage={errors.muscle_group?.errorMessage}
        hasError={errors.muscle_group?.hasError}
        {...getOverrideProps(overrides, "muscle_group")}
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
