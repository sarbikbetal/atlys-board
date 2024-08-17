<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Label from '@/components/atoms/form/Label.vue'

const Text = defineAsyncComponent(() => import('@/components/atoms/form/Input.vue'))
const Password = defineAsyncComponent(() => import('@/components/atoms/form/Password.vue'))

const props = withDefaults(
    defineProps<{
        label: string
        name: string
        placeholder?: string
        type: 'Text' | 'Password'
    }>(),
    {
        type: 'Text'
    }
)

const componentMap = {
    Text,
    Password
}
</script>

<template>
    <div class="flex flex-col">
        <Label :for="props.name" class="flex">
            <span> {{ props.label }}</span>
            <div v-if="$slots.labelAction" class="ml-auto text-xs">
                <slot name="labelAction" />
            </div>
        </Label>
        <component
            :is="componentMap[props.type]"
            :name="props.name"
            :placeholder="props.placeholder"
        >
            <template #suffixIcon>
                <slot name="suffixIcon" />
            </template>
        </component>
    </div>
</template>
