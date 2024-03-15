<script setup lang="ts">

</script>

<template>
    <div class="content-wrapper">
       <div class="content-wrapper__inner">
           <slot></slot>
       </div>
    </div>
</template>

<style scoped lang="scss">
.content-wrapper {
    width: 100%;
    background: $color-light;
    border-radius: 16px;
    overflow: hidden;
    padding: 8px;

    @media (min-width: $breakpoint-md) {
        padding: 16px;
        border-radius: 32px;
    }

    &__inner{
        position: relative;
        height: 625px;
        overflow-x: hidden;
        overflow-y: auto;
    }
}
</style>