"use client";
import *  as z from "zod"
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../../../schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormError from "@/components/auth/FormError";
import FormSuccess from "@/components/auth/FormSuccess";
import CardWrapper from "@/components/auth/CardWrapper";
import { supabase } from "@/lib/supabase";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"


async function register(values: z.infer<typeof RegisterSchema>) {
    const validatedFields = RegisterSchema.safeParse(values);
    if (!validatedFields.success)
        return { error: "Неверный формат эл. почты или пароля" };
    if (validatedFields.data.password != validatedFields.data.reppassword)
        return { error: "Пароли не совпадают" };
    try {
        const { data: dataUser, error } = await supabase.auth.signUp({
            email: validatedFields.data.email,
            password: validatedFields.data.password
        })

        if (error) {
            console.error("Ошибка при регистрации:", error);
            return { error: "Ошибка при регистрации! Проверьте данные." };
        }

        console.log("dataUser", dataUser);
        if (dataUser.user) {
            const { data: dataUser } = await supabase.auth.getUser()
            console.debug("dataUser", dataUser);
            return { success: "Успешно" }
        }

    } catch (error) {
        console.error("Необработанная ошибка:", error);
    }
    return { error: "Ошибка!" };
}


export function RegisterForm() {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            reppassword: "",
        },
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");
        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error)
                })
        });

    }
    return (
        <CardWrapper
            headerLabel="Пройдите регистрацию"
            backButtonLabel="Уже есть аккаунт"
            backButtonHref="/login"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Эл. почта</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="user@kuzstu.ru"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Пароль</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="******"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="reppassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Подтвердите пароль</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="******"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                        disabled={isPending}
                        type="submit"
                        className="w-full"
                        size="lg">
                        Зарегистрироваться
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}