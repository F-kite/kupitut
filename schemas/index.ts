import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({ message: "" }),
    password: z.string().min(1, { message: "" })
})

export const RegisterSchema = z.object({
    email: z.string().email({ message: "Неверный формат адреса почты" }),
    password: z.string().min(6, { message: "Пароль должен состоять минимум из 6 символов" }),
    reppassword: z.string().min(6, { message: "Пароль должен состоять минимум из 6 символов" }),
})