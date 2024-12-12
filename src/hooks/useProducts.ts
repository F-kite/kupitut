import { Product } from "@/types/product"
import { supabase } from "@/lib/supabase"
import { useState } from "react"

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([])

    const getProducts = async (query: string) => {
        const searchQuery = query

        const { data, error } = await supabase
            .from("products")
            .select("*")
            .ilike("name", `%${searchQuery}%`)
            .order("id")


        if (data) {
            setProducts(data)
        }
    }

    return {
        products,
        getProducts
    }
}