<script setup lang="ts">
import Card from '@/components/elements/Card.vue'
import AtlysButton from '@/components/atoms/button.vue'
</script>

<template>
    <Card>
        <p class="text-lg text-gray-500">Create post</p>
        <div class="bg-dark py-4 pl-4 pr-[30px] rounded-lg mt-4 flex gap-x-4 items-center">
            <div
                class="flex items-center justify-center flex-none bg-card rounded-full text-lg/none h-12 w-12"
            >
                💬
            </div>
            <span class="text-base/6 text-gray-300 flex-grow"> How are you feeling today? </span>
        </div>
        <div class="flex justify-end mt-4">
            <AtlysButton label="Post" />
        </div>
    </Card>
</template>
