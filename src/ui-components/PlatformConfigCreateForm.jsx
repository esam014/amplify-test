/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { PlatformConfig } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function PlatformConfigCreateForm(props) {
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
    logo_file: undefined,
    favicon_file: undefined,
    primary_color: undefined,
    secondary_color: undefined,
    custom_url: undefined,
    personal_web_enabled: false,
    platform_nutrition_enabled: false,
    platform_trainer_enabled: false,
  };
  const [logo_file, setLogo_file] = React.useState(initialValues.logo_file);
  const [favicon_file, setFavicon_file] = React.useState(
    initialValues.favicon_file
  );
  const [primary_color, setPrimary_color] = React.useState(
    initialValues.primary_color
  );
  const [secondary_color, setSecondary_color] = React.useState(
    initialValues.secondary_color
  );
  const [custom_url, setCustom_url] = React.useState(initialValues.custom_url);
  const [personal_web_enabled, setPersonal_web_enabled] = React.useState(
    initialValues.personal_web_enabled
  );
  const [platform_nutrition_enabled, setPlatform_nutrition_enabled] =
    React.useState(initialValues.platform_nutrition_enabled);
  const [platform_trainer_enabled, setPlatform_trainer_enabled] =
    React.useState(initialValues.platform_trainer_enabled);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setLogo_file(initialValues.logo_file);
    setFavicon_file(initialValues.favicon_file);
    setPrimary_color(initialValues.primary_color);
    setSecondary_color(initialValues.secondary_color);
    setCustom_url(initialValues.custom_url);
    setPersonal_web_enabled(initialValues.personal_web_enabled);
    setPlatform_nutrition_enabled(initialValues.platform_nutrition_enabled);
    setPlatform_trainer_enabled(initialValues.platform_trainer_enabled);
    setErrors({});
  };
  const validations = {
    logo_file: [],
    favicon_file: [],
    primary_color: [],
    secondary_color: [],
    custom_url: [],
    personal_web_enabled: [],
    platform_nutrition_enabled: [],
    platform_trainer_enabled: [],
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
          logo_file,
          favicon_file,
          primary_color,
          secondary_color,
          custom_url,
          personal_web_enabled,
          platform_nutrition_enabled,
          platform_trainer_enabled,
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
          await DataStore.save(new PlatformConfig(modelFields));
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
      {...getOverrideProps(overrides, "PlatformConfigCreateForm")}
    >
      <TextField
        label="Logo file"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              logo_file: value,
              favicon_file,
              primary_color,
              secondary_color,
              custom_url,
              personal_web_enabled,
              platform_nutrition_enabled,
              platform_trainer_enabled,
            };
            const result = onChange(modelFields);
            value = result?.logo_file ?? value;
          }
          if (errors.logo_file?.hasError) {
            runValidationTasks("logo_file", value);
          }
          setLogo_file(value);
        }}
        onBlur={() => runValidationTasks("logo_file", logo_file)}
        errorMessage={errors.logo_file?.errorMessage}
        hasError={errors.logo_file?.hasError}
        {...getOverrideProps(overrides, "logo_file")}
      ></TextField>
      <TextField
        label="Favicon file"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              logo_file,
              favicon_file: value,
              primary_color,
              secondary_color,
              custom_url,
              personal_web_enabled,
              platform_nutrition_enabled,
              platform_trainer_enabled,
            };
            const result = onChange(modelFields);
            value = result?.favicon_file ?? value;
          }
          if (errors.favicon_file?.hasError) {
            runValidationTasks("favicon_file", value);
          }
          setFavicon_file(value);
        }}
        onBlur={() => runValidationTasks("favicon_file", favicon_file)}
        errorMessage={errors.favicon_file?.errorMessage}
        hasError={errors.favicon_file?.hasError}
        {...getOverrideProps(overrides, "favicon_file")}
      ></TextField>
      <TextField
        label="Primary color"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              logo_file,
              favicon_file,
              primary_color: value,
              secondary_color,
              custom_url,
              personal_web_enabled,
              platform_nutrition_enabled,
              platform_trainer_enabled,
            };
            const result = onChange(modelFields);
            value = result?.primary_color ?? value;
          }
          if (errors.primary_color?.hasError) {
            runValidationTasks("primary_color", value);
          }
          setPrimary_color(value);
        }}
        onBlur={() => runValidationTasks("primary_color", primary_color)}
        errorMessage={errors.primary_color?.errorMessage}
        hasError={errors.primary_color?.hasError}
        {...getOverrideProps(overrides, "primary_color")}
      ></TextField>
      <TextField
        label="Secondary color"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              logo_file,
              favicon_file,
              primary_color,
              secondary_color: value,
              custom_url,
              personal_web_enabled,
              platform_nutrition_enabled,
              platform_trainer_enabled,
            };
            const result = onChange(modelFields);
            value = result?.secondary_color ?? value;
          }
          if (errors.secondary_color?.hasError) {
            runValidationTasks("secondary_color", value);
          }
          setSecondary_color(value);
        }}
        onBlur={() => runValidationTasks("secondary_color", secondary_color)}
        errorMessage={errors.secondary_color?.errorMessage}
        hasError={errors.secondary_color?.hasError}
        {...getOverrideProps(overrides, "secondary_color")}
      ></TextField>
      <TextField
        label="Custom url"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              logo_file,
              favicon_file,
              primary_color,
              secondary_color,
              custom_url: value,
              personal_web_enabled,
              platform_nutrition_enabled,
              platform_trainer_enabled,
            };
            const result = onChange(modelFields);
            value = result?.custom_url ?? value;
          }
          if (errors.custom_url?.hasError) {
            runValidationTasks("custom_url", value);
          }
          setCustom_url(value);
        }}
        onBlur={() => runValidationTasks("custom_url", custom_url)}
        errorMessage={errors.custom_url?.errorMessage}
        hasError={errors.custom_url?.hasError}
        {...getOverrideProps(overrides, "custom_url")}
      ></TextField>
      <SwitchField
        label="Personal web enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={personal_web_enabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              logo_file,
              favicon_file,
              primary_color,
              secondary_color,
              custom_url,
              personal_web_enabled: value,
              platform_nutrition_enabled,
              platform_trainer_enabled,
            };
            const result = onChange(modelFields);
            value = result?.personal_web_enabled ?? value;
          }
          if (errors.personal_web_enabled?.hasError) {
            runValidationTasks("personal_web_enabled", value);
          }
          setPersonal_web_enabled(value);
        }}
        onBlur={() =>
          runValidationTasks("personal_web_enabled", personal_web_enabled)
        }
        errorMessage={errors.personal_web_enabled?.errorMessage}
        hasError={errors.personal_web_enabled?.hasError}
        {...getOverrideProps(overrides, "personal_web_enabled")}
      ></SwitchField>
      <SwitchField
        label="Platform nutrition enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={platform_nutrition_enabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              logo_file,
              favicon_file,
              primary_color,
              secondary_color,
              custom_url,
              personal_web_enabled,
              platform_nutrition_enabled: value,
              platform_trainer_enabled,
            };
            const result = onChange(modelFields);
            value = result?.platform_nutrition_enabled ?? value;
          }
          if (errors.platform_nutrition_enabled?.hasError) {
            runValidationTasks("platform_nutrition_enabled", value);
          }
          setPlatform_nutrition_enabled(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "platform_nutrition_enabled",
            platform_nutrition_enabled
          )
        }
        errorMessage={errors.platform_nutrition_enabled?.errorMessage}
        hasError={errors.platform_nutrition_enabled?.hasError}
        {...getOverrideProps(overrides, "platform_nutrition_enabled")}
      ></SwitchField>
      <SwitchField
        label="Platform trainer enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={platform_trainer_enabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              logo_file,
              favicon_file,
              primary_color,
              secondary_color,
              custom_url,
              personal_web_enabled,
              platform_nutrition_enabled,
              platform_trainer_enabled: value,
            };
            const result = onChange(modelFields);
            value = result?.platform_trainer_enabled ?? value;
          }
          if (errors.platform_trainer_enabled?.hasError) {
            runValidationTasks("platform_trainer_enabled", value);
          }
          setPlatform_trainer_enabled(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "platform_trainer_enabled",
            platform_trainer_enabled
          )
        }
        errorMessage={errors.platform_trainer_enabled?.errorMessage}
        hasError={errors.platform_trainer_enabled?.hasError}
        {...getOverrideProps(overrides, "platform_trainer_enabled")}
      ></SwitchField>
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
