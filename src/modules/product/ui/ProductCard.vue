<script setup lang="ts">
import {computed} from "vue";
import type {Product} from '@/modules/product/types';

const props = defineProps<{
    product: Product
}>()

const productImage = computed(() => props.product.images[0])
</script>

<template>
    <div class="product">
        <div class="product__img-wrapper">
            <div class="product__discount">-{{ product.discountPercentage }}%</div>
            <img class="product__img" :src="productImage" :alt="`product ${product.id}`" width="150" height="150"
                 loading="lazy"/>
        </div>
        <div class="product__info">
            <div class="product__header">
                <h4 class="product__title">{{ product.title }}</h4>
                <p class="product__tag">{{ product.category }}</p>
            </div>
            <div class="product__body">
                <p class="product__description">{{ product.description }}</p>
            </div>
            <div class="product__footer">
                <p class="product__brand">{{ product.brand }}</p>
                <p class="product__ratting"><img src="@/assets/icons/star.svg" alt="product start">
                    {{product.rating}}
                </p>
                <p class="product__price"> {{ product.price }}$</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 8px;
    width: 100%;
    border: 2px solid $color-dark-blue;
    border-radius: 12px;

    @media (min-width: $breakpoint-md) {
        flex-direction: row;
        padding: 16px;
    }

    &__img-wrapper {
        width: 100%;
        position: relative;

        @media (min-width: $breakpoint-md) {
            width: fit-content;
        }
    }

    &__discount {
        position: absolute;
        left: 0;
        top: 0;
        background: $color-yellow;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 800;
        padding: 4px;
    }

    &__img {
        width: 100%;
        height: 25vw;
        margin-bottom: 16px;
        object-fit: contain;
        border-radius: 12px;

        @media (min-width: $breakpoint-md) {
            width: 150px;
            height: 150px;
            margin-right: 16px;
            margin-bottom: 0;
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        gap: 16px;
    }

    &__header,
    &__body,
    &__footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__title {
        font-size: 18px;
        color: $color-dark;
        font-weight: 600;
        width: 60%;

        @media (min-width: $breakpoint-md) {
            font-size: 24px;
        }
    }

    &__description {
        width: 100%;
        display: block;
        font-size: 14px;
        color: $color-dark;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (min-width: $breakpoint-md) {
            font-size: 18px;
        }
    }


    &__brand {
        width: 33.3%;
        font-size: 16px;
        font-weight: 800;
        color: $color-violet;

        @media (min-width: $breakpoint-md) {
            width: 20%;
            font-size: 24px;
            white-space: nowrap;
        }
    }

    &__ratting {
        width: 33.3%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: $color-dark;

        @media (min-width: $breakpoint-md) {
            width: 20%;
            font-size: 18px;
        }

        & img {
            margin-right: 5px;
        }
    }

    &__tag {
        width: fit-content;
        padding: 8px;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        border-radius: 12px;
        color: $color-light;
        background: $color-violet;

        @media (min-width: $breakpoint-md) {
            font-size: 18px;
        }
    }

    &__price {
        width: 33.3%;
        text-align: end;
        font-size: 16px;
        font-weight: 800;
        color: $color-violet;

        @media (min-width: $breakpoint-md) {
            width: 20%;
            font-size: 24px;
        }
    }
}
</style>