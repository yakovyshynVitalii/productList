<script setup lang="ts">
const props = defineProps({
    modelValue:{
        type: String
    }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <label class="app-input">
        <input type="text" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)">
    </label>
</template>

<style lang="scss" scoped>
.app-input{
    width: 100%;
    max-width: 480px;

    & input{
        width: 100%;
        height: 48px;
        padding: 8px 12px;
        border-radius: 24px;
        color: $color-dark;
        border: 2px solid transparent;
        font-size: 18px;
        font-weight: 600;
        transition: 0.4s ease-in-out;

        @media (min-width: $breakpoint-md) {
            height: 64px;
            padding: 16px 24px;
            font-size: 24px;
        }

        @media (any-hover: hover) {
            &:hover{
                border: 2px solid $color-violet;
            }
        }

        &:focus{
            border: 2px solid $color-violet;
            outline: none;
        }
    }
}
</style>