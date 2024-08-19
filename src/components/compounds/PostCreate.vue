<script setup lang="ts">
import { nextTick, ref } from 'vue'
import Card from '@/components/elements/Card.vue'
import AtlysButton from '@/components/atoms/Button.vue'
const emit = defineEmits<{ create: [] }>()

const isEditMode = ref(false)

const handleEditClick = async (e) => {
    isEditMode.value = true
    await nextTick()
    e.target.focus()
}
</script>

<template>
    <Card>
        <p class="text-lg text-gray-500">Create post</p>
        <div class="bg-post py-4 pl-4 pr-[30px] rounded-lg mt-4 flex gap-x-4 items-center">
            <div
                class="flex items-center justify-center flex-none bg-card rounded-full text-lg/none h-12 w-12"
            >
                💬
            </div>
            <span
                class="text-base/6 text-gray-300 flex-grow focus:outline-none"
                :class="{ 'text-gray-500': isEditMode }"
                @click="handleEditClick"
                @keyup.esc="isEditMode = false"
                :contenteditable="isEditMode"
            >
                How are you feeling today?
            </span>
        </div>
        <div class="flex justify-end mt-4">
            <AtlysButton label="Post" @click="emit('create')" />
        </div>
    </Card>
</template>
