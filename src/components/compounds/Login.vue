<script setup lang="ts">
import { ref } from 'vue'
import FormItem from '@/components/elements/FormItem.vue'
</script>

<template>
    <div>
        <p class="text-gray-200 font-medium text-sm text-center">WELCOME BACK</p>
        <p class="mt-2 font-semibold text-lg text-center">Log into your account</p>

        <form @submit.stop.prevent="" class="mt-[45px]">
            <FormItem
                name="user"
                label="Email or Username"
                placeholder="Enter your email or username"
            />
            <FormItem
                name="password"
                label="Password"
                type="Password"
                placeholder="Enter your password"
                class="mt-4"
            >
                <template #labelAction>
                    <button class="hover:underline text-gray-500">Forgot password?</button>
                </template>
            </FormItem>
        </form>
    </div>
</template>
