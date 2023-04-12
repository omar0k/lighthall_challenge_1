/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { GeoCount } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function GeoCountUpdateForm(props) {
  const {
    id: idProp,
    geoCount: geoCountModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    timezone: "",
    count: "",
  };
  const [timezone, setTimezone] = React.useState(initialValues.timezone);
  const [count, setCount] = React.useState(initialValues.count);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = geoCountRecord
      ? { ...initialValues, ...geoCountRecord }
      : initialValues;
    setTimezone(cleanValues.timezone);
    setCount(cleanValues.count);
    setErrors({});
  };
  const [geoCountRecord, setGeoCountRecord] = React.useState(geoCountModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(GeoCount, idProp)
        : geoCountModelProp;
      setGeoCountRecord(record);
    };
    queryData();
  }, [idProp, geoCountModelProp]);
  React.useEffect(resetStateValues, [geoCountRecord]);
  const validations = {
    timezone: [{ type: "Required" }],
    count: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
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
          timezone,
          count,
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
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            GeoCount.copyOf(geoCountRecord, (updated) => {
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
      {...getOverrideProps(overrides, "GeoCountUpdateForm")}
      {...rest}
    >
      <TextField
        label="Timezone"
        isRequired={true}
        isReadOnly={false}
        value={timezone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timezone: value,
              count,
            };
            const result = onChange(modelFields);
            value = result?.timezone ?? value;
          }
          if (errors.timezone?.hasError) {
            runValidationTasks("timezone", value);
          }
          setTimezone(value);
        }}
        onBlur={() => runValidationTasks("timezone", timezone)}
        errorMessage={errors.timezone?.errorMessage}
        hasError={errors.timezone?.hasError}
        {...getOverrideProps(overrides, "timezone")}
      ></TextField>
      <TextField
        label="Count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={count}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              timezone,
              count: value,
            };
            const result = onChange(modelFields);
            value = result?.count ?? value;
          }
          if (errors.count?.hasError) {
            runValidationTasks("count", value);
          }
          setCount(value);
        }}
        onBlur={() => runValidationTasks("count", count)}
        errorMessage={errors.count?.errorMessage}
        hasError={errors.count?.hasError}
        {...getOverrideProps(overrides, "count")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || geoCountModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || geoCountModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
