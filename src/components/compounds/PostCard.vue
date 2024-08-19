<script setup lang="ts">
import Card from '@/components/elements/Card.vue'
import Comment from '@/assets/icons/chat.svg'
import MenuIcon from '@/assets/icons/kebab.svg'
import type { Post } from '@/data/interfaces'

const props = defineProps<{ post: Post }>()
</script>

<template>
    <Card>
        <div class="flex items-center cursor-default">
            <img :src="props.post.user.avatarUrl" class="h-11 w-11 rounded-full" />
            <div class="ml-4">
                <p class="text-base text-gray-500">{{ props.post.user.name }}</p>
                <p class="text-sm text-gray-300 mt-1">
                    {{ props.post.user.timestamp }} {{ props.post.post.isEdited ? '• Edited' : '' }}
                </p>
            </div>
            <button class="ml-auto">
                <MenuIcon />
            </button>
        </div>
        <div class="bg-dark py-4 pl-4 pr-[30px] rounded-lg mt-5 flex gap-x-4 cursor-default">
            <div
                class="flex items-center justify-center flex-none bg-card rounded-full text-lg/none h-12 w-12"
            >
                {{ props.post.post.emoji }}
            </div>
            <span class="text-base/6 text-gray-300 flex-grow">
                {{ props.post.post.content }}
            </span>
        </div>
        <button class="flex items-center gap-x-2 mt-3">
            <Comment class="h-5 w-5" />
            <span class="font-medium text-sm text-gray-300">
                {{ props.post.post.commentCount }} comments
            </span>
        </button>
    </Card>
</template>
