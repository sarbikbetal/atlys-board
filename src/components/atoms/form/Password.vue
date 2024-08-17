<script setup lang="ts">
import { ref } from 'vue'
import Input from './Input.vue'
import Eye from '@/assets/icons/eye.svg'
import EyeClosed from '@/assets/icons/eyeClosed.svg'

const isPasswordShown = ref(false)
</script>

<template>
    <Input :type="isPasswordShown ? 'text' : 'password'">
        <template #suffixIcon>
            <button @click="() => (isPasswordShown = !isPasswordShown)">
                <EyeClosed v-if="isPasswordShown" class="h-5 w-5" />
                <Eye v-else class="h-5 w-5" />
            </button>
        </template>
    </Input>
</template>
