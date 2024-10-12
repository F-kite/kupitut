import { supabase } from "@/lib/supabase"
import { useState } from "react"

export const useProducts = () => {
    const [products, setProducts] = useState<any[]>([])

    const getProducts = async () => {
        const { data } = await supabase
            .from("products")
            .select("*")

        if (data) {
            setProducts(data)
        }
    }

    return {
        products,
        getProducts
    }
}