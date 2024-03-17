import {useFetch} from "@/shared/composable/useFetch";

export default {
  fetchProducts: async () => {
    let productsData = await useFetch('/products?limit=100')
    return productsData.products
  },
}