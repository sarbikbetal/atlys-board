<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
    <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </RouterView>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.15s ease-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
