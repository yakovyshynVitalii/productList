import {useFetch} from "@/shared/composable/useFetch";

const apiUrl = import.meta.env.VITE_API_URL

export default {
  fetchProducts: async () => {
    let productsData = await useFetch(`${apiUrl}/products?limit=100`)
    return productsData.products
  },
}