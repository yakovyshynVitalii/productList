<script setup lang="ts">
const props = defineProps({
    text:{
        type: String
    }
})
</script>

<template>
    <div class="products-not-found">
       <p>{{text}}</p>
    </div>
</template>

<style scoped lang="scss">
.products-not-found {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;

    @media (min-width: $breakpoint-md) {
        font-size: 28px;
    }

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
</style>