<script setup lang="ts">
import CardPost from '@/components/compounds/PostCard.vue'
import PostCreate from '@/components/compounds/PostCreate.vue'
import posts from '@/data/posts.json'

defineOptions({ name: 'HomePage' })
</script>

<template>
    <div class="flex flex-col h-screen w-full max-w-[748px] px-6 mx-auto py-[70px] gap-y-4">
        <div>
            <h3 class="text-2xl text-gray-500">Hello Jane</h3>
            <p class="text-base/6 text-gray-300 mt-3 max-w-[580px]">
                How are you doing today? Would you like to share something with the community 🤗
            </p>
        </div>
        <PostCreate class="mt-6" />
        <CardPost v-for="(post, index) in posts" :post="post" :key="index" />
    </div>
</template>
