/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GeoCountCreateFormInputValues = {
    timezone?: string;
    count?: number;
};
export declare type GeoCountCreateFormValidationValues = {
    timezone?: ValidationFunction<string>;
    count?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GeoCountCreateFormOverridesProps = {
    GeoCountCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    timezone?: PrimitiveOverrideProps<TextFieldProps>;
    count?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GeoCountCreateFormProps = React.PropsWithChildren<{
    overrides?: GeoCountCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GeoCountCreateFormInputValues) => GeoCountCreateFormInputValues;
    onSuccess?: (fields: GeoCountCreateFormInputValues) => void;
    onError?: (fields: GeoCountCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GeoCountCreateFormInputValues) => GeoCountCreateFormInputValues;
    onValidate?: GeoCountCreateFormValidationValues;
} & React.CSSProperties>;
export default function GeoCountCreateForm(props: GeoCountCreateFormProps): React.ReactElement;
