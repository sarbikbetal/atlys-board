<script setup lang="ts">
import Arrow from '@/assets/icons/arrow.svg'
import FormItem from '@/components/elements/FormItem.vue'
import AtlysButton from '@/components/atoms/Button.vue'

const emit = defineEmits<{ signup: []; loginRedirect: [] }>()
</script>

<template>
    <div>
        <p class="text-gray-200 font-medium text-sm text-center">SIGNUP</p>
        <p class="mt-2 font-semibold text-lg text-center">Create an account to continue</p>

        <form @submit.stop.prevent="" class="mt-[45px] space-y-4">
            <FormItem name="email" label="Email" placeholder="Enter your email" />
            <FormItem name="username" label="Username" placeholder="Choose a preferred username" />
            <FormItem
                name="password"
                label="Password"
                type="Password"
                placeholder="Choose a strong password"
            />
            <AtlysButton label="Continue" class="w-full mt-5" @click="emit('signup')" />
        </form>

        <button
            @click="emit('loginRedirect')"
            class="font-medium text-sm mt-3 inline-block text-gray-300 hover:underline"
        >
            <span> Already have an account? </span>
            <span class="text-gray-500"> Login </span>
            <Arrow class="inline-block" />
        </button>
    </div>
</template>
