<script setup lang="ts">
import { RouterView } from 'vue-router'
import Arrow from '@/assets/icons/arrow.svg'
</script>

<template>
    <img class="logo" src="@/assets/icons/logo.svg?url" width="125" height="125" />
    <span class="text-white font-medium">Not registered yet? Register</span>
    <Arrow class="inline-block" />
    <RouterView />
</template>
