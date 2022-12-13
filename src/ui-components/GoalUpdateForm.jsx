/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Goal } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function GoalUpdateForm(props) {
  const {
    id,
    goal,
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
    short_term_goal: undefined,
    long_term_goal: undefined,
  };
  const [short_term_goal, setShort_term_goal] = React.useState(
    initialValues.short_term_goal
  );
  const [long_term_goal, setLong_term_goal] = React.useState(
    initialValues.long_term_goal
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...goalRecord };
    setShort_term_goal(cleanValues.short_term_goal);
    setLong_term_goal(cleanValues.long_term_goal);
    setErrors({});
  };
  const [goalRecord, setGoalRecord] = React.useState(goal);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Goal, id) : goal;
      setGoalRecord(record);
    };
    queryData();
  }, [id, goal]);
  React.useEffect(resetStateValues, [goalRecord]);
  const validations = {
    short_term_goal: [],
    long_term_goal: [],
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
          short_term_goal,
          long_term_goal,
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
          await DataStore.save(
            Goal.copyOf(goalRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "GoalUpdateForm")}
    >
      <TextField
        label="Short term goal"
        isRequired={false}
        isReadOnly={false}
        defaultValue={short_term_goal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              short_term_goal: value,
              long_term_goal,
            };
            const result = onChange(modelFields);
            value = result?.short_term_goal ?? value;
          }
          if (errors.short_term_goal?.hasError) {
            runValidationTasks("short_term_goal", value);
          }
          setShort_term_goal(value);
        }}
        onBlur={() => runValidationTasks("short_term_goal", short_term_goal)}
        errorMessage={errors.short_term_goal?.errorMessage}
        hasError={errors.short_term_goal?.hasError}
        {...getOverrideProps(overrides, "short_term_goal")}
      ></TextField>
      <TextField
        label="Long term goal"
        isRequired={false}
        isReadOnly={false}
        defaultValue={long_term_goal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              short_term_goal,
              long_term_goal: value,
            };
            const result = onChange(modelFields);
            value = result?.long_term_goal ?? value;
          }
          if (errors.long_term_goal?.hasError) {
            runValidationTasks("long_term_goal", value);
          }
          setLong_term_goal(value);
        }}
        onBlur={() => runValidationTasks("long_term_goal", long_term_goal)}
        errorMessage={errors.long_term_goal?.errorMessage}
        hasError={errors.long_term_goal?.hasError}
        {...getOverrideProps(overrides, "long_term_goal")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
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
