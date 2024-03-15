<script setup lang="ts">
import {computed, defineAsyncComponent, onMounted, ref} from "vue";
import type {Ref} from "vue";
import {type Product} from "@/modules/product/types";

import AppInput from "@/shared/ui/AppInput.vue";
import AppContentWrapper from "@/shared/ui/AppContentWrapper.vue";
const ProductsCard = defineAsyncComponent(() => import('@/modules/product/ui/ProductsCard.vue'))
const ProductCardSkeleton = defineAsyncComponent(() => import('@/modules/product/ui/ProductCardSkeleton.vue'))
const AppNotFound = defineAsyncComponent(() => import('@/shared/ui/AppNotFound.vue'))

import ProductServices from "@/modules/product/services/ProductServices";
import {useLoading} from "@/shared/composable/useLoading";
import {useFilter} from "@/shared/composable/useFilter";

const {fetchProducts} = ProductServices
const {loading, changeLoading} = useLoading()

const products: Ref<Product[]> = ref([])
const filteredText: Ref<string> = ref('')

const filteredProducts = computed(()=> useFilter(products.value, 'title', filteredText.value ))
const getProductsList = computed(() => filteredProducts.value.length ? filteredProducts.value : products.value)

async function getProducts() {
    try {
        changeLoading(true)
        products.value = await fetchProducts()
        changeLoading(false)
    } catch (e) {
        console.log(e)
    }
}

onMounted(() => {
    getProducts()
})
</script>

<template>
    <div class="product-list">
        <AppInput v-model="filteredText"/>
        <AppContentWrapper>
            <transition name="opacity" mode="out-in">
                <div class="product-list__inner" v-if="loading">
                    <ProductCardSkeleton v-for="item in 3" :key="item"/>
                </div>
                <div v-else-if="filteredText && !filteredProducts.length" class="product-list__inner">
                    <AppNotFound text="Products not found 😞"/>
                </div>
                <div  class="product-list__inner" v-else>
                    <transition-group name="list" >
                        <ProductsCard v-for="product in getProductsList" :key="product.id" :product="product"/>
                    </transition-group>
                </div>
            </transition>
        </AppContentWrapper>
    </div>
</template>

<style scoped lang="scss">
.product-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    position: relative;

    &__inner{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
        margin-right: 5px;
    }
}
</style>