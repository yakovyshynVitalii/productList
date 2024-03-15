<script setup lang="ts">
</script>

<template>
    <div class="product-skeleton">
        <div class="product-skeleton__img"></div>
        <div class="product-skeleton__info">
            <div class="product-skeleton__header">
                <h4 class="product-skeleton__title"></h4>
                <div class="product-skeleton__tag"></div>
            </div>
            <div class="product-skeleton__body">
                <p class="product-skeleton__description"></p>
            </div>
            <div class="product-skeleton__footer">
                <p class="product-skeleton__brand"></p>
                <p class="product-skeleton__ratting"></p>
                <p class="product-skeleton__price"></p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@keyframes pulse-bg {
    0% {
        background-color: $color-gray;
    }
    50% {
        background-color: $color-light-gray;
    }
    100% {
        background-color: $color-gray;
    }
}

.product-skeleton {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    width: 100%;
    border: 2px solid $color-gray;
    border-radius: 12px;

    @media (min-width: $breakpoint-md) {
        flex-direction: row;
        padding: 16px;
    }

    &__img {
        width: 100%;
        height: 25vw;
        margin-bottom: 16px;
        animation: pulse-bg 1s infinite;
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

    &__tag {
        width: 20%;
        animation: pulse-bg 1s infinite;
        height: 35px;
        border-radius: 12px;
    }

    &__title {
        width: 60%;
        animation: pulse-bg 1s infinite;
        height: 35px;
        border-radius: 12px;
    }


    &__description {
        width: 100%;
        height: 35px;
        border-radius: 12px;
        animation: pulse-bg 1s infinite;
    }


    &__brand,
    &__ratting,
    &__price {
        width: 25%;
        height: 35px;
        border-radius: 12px;
        animation: pulse-bg 1s infinite;
    }
}
</style>