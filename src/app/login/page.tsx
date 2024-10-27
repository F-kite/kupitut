"use client"
import styles from "./styles.module.scss";
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login() {
    const [data, setData] = useState<{
        email: string,
        password: string
    }>({
        email: "",
        password: ""
    })

    const router = useRouter();

    const login = async () => {
        try {
            let { data: dataUser, error } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password
            })

            if (dataUser) {
                console.log(dataUser);
                router.refresh();
            }

        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <div className={styles.body}>
            <div className={styles.form}>
                <input
                    className={styles.container}
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={data?.email}
                    onChange={handleChange}
                />
                <input
                    className={styles.container}
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={data?.password}
                    onChange={handleChange}
                />
                <button className={styles.button} onClick={login}>Войти</button>
            </div>
        </div>
    )
}