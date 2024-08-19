<script setup lang="ts">
import Arrow from '@/assets/icons/arrow.svg'
import FormItem from '@/components/elements/FormItem.vue'
import AtlysButton from '@/components/atoms/Button1.vue'

const emit = defineEmits<{ login: []; signupRedirect: [] }>()
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
            <AtlysButton label="Login now" class="w-full mt-5" @click="emit('login')" />
        </form>

        <button
            @click="emit('signupRedirect')"
            class="font-medium text-sm mt-3 inline-block text-gray-300 hover:underline"
        >
            <span> Not registered yet? </span>
            <span class="text-gray-500"> Register </span>
            <Arrow class="inline-block" />
        </button>
    </div>
</template>
