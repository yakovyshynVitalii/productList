<script setup lang="ts">
const props = defineProps({
    tag:{
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="tag">
        {{tag}}
    </div>
</template>

<style scoped lang="scss">
.tag{
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
</style>