import * as yup from "yup";

export const UserLoginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup
    .string()
    .min(6, "Minimum 6 characters!")
    .max(50, "Too Long!")
    .required("Required"),
})

export const UserSchema = yup.object().shape({
    email: yup
    .string()
    .email("Invalid email")
    .required("Required"),
    name: yup
    .string()
    .required("Required"),
    lastName: yup
    .string()
    .required("Required"),
    password: yup
    .string()
    .min(8, "Minimum 8 characters!")
    .max(80, "Too Long!")
    .required("Required")
})