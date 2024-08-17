<script setup lang="ts">
import Login from '@/components/compounds/Login.vue'
import Logo from '@/assets/icons/logo.svg'
defineOptions({ name: 'LoginPage' })
</script>

<template>
    <div class="flex flex-col items-center justify-center h-screen w-full">
        <Logo class="h-10 w-10 mb-12" />

        <div class="gradient-card px-6 py-10 bg-card w-[463px]">
            <Login @login="$router.push('/home')" />
        </div>
    </div>
</template>
