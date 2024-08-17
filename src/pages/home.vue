<script setup lang="ts">
import CardPost from '@/components/compounds/PostCard.vue'
import PostCreate from '@/components/compounds/PostCreate.vue'
import Login from '@/components/compounds/Login.vue'
import Signup from '@/components/compounds/Signup.vue'
import Modal from '@/components/elements/Modal.vue'

import posts from '@/data/posts.json'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

defineOptions({ name: 'HomePage' })

const route = useRoute()
const router = useRouter()

const isLoginModalVisible = computed({
    get: () => route.query.action === 'login',
    set: (val) => {
        if (val) router.push({ query: { action: 'login' } })
        else router.replace({ query: {} })
    }
})

const isSignupModalVisible = computed({
    get: () => route.query.action === 'signup',
    set: (val) => {
        if (val) router.push({ query: { action: 'signup' } })
        else router.replace({ query: {} })
    }
})
</script>

<template>
    <Modal v-model:visible="isLoginModalVisible" class="w-[463px]">
        <Login
            @login="() => (isLoginModalVisible = false)"
            @signupRedirect="() => (isSignupModalVisible = true)"
        />
    </Modal>
    <Modal v-model:visible="isSignupModalVisible" class="w-[463px]">
        <Signup
            @signup="() => (isSignupModalVisible = false)"
            @loginRedirect="() => (isLoginModalVisible = true)"
        />
    </Modal>
    <div class="flex flex-col h-screen w-full max-w-[748px] px-6 mx-auto py-[70px] gap-y-4">
        <div>
            <h3 class="text-2xl text-gray-500">Hello Jane</h3>
            <p class="text-base/6 text-gray-300 mt-3 max-w-[580px]">
                How are you doing today? Would you like to share something with the community 🤗
            </p>
        </div>
        <PostCreate class="mt-6" @create="() => (isLoginModalVisible = true)" />
        <CardPost v-for="(post, index) in posts" :post="post" :key="index" />
    </div>
</template>
