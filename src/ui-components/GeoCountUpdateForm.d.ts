/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GeoCount } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GeoCountUpdateFormInputValues = {
    timezone?: string;
    count?: number;
};
export declare type GeoCountUpdateFormValidationValues = {
    timezone?: ValidationFunction<string>;
    count?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GeoCountUpdateFormOverridesProps = {
    GeoCountUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    timezone?: PrimitiveOverrideProps<TextFieldProps>;
    count?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GeoCountUpdateFormProps = React.PropsWithChildren<{
    overrides?: GeoCountUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    geoCount?: GeoCount;
    onSubmit?: (fields: GeoCountUpdateFormInputValues) => GeoCountUpdateFormInputValues;
    onSuccess?: (fields: GeoCountUpdateFormInputValues) => void;
    onError?: (fields: GeoCountUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GeoCountUpdateFormInputValues) => GeoCountUpdateFormInputValues;
    onValidate?: GeoCountUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GeoCountUpdateForm(props: GeoCountUpdateFormProps): React.ReactElement;
