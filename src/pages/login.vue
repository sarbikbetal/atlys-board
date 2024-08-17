<script setup lang="ts">
import { ref } from 'vue'
import Modal from '@/components/elements/Modal.vue'
import Login from '@/components/compounds/Login.vue'
defineOptions({ name: 'LoginPage' })
</script>

<template>
    <Modal visible :closable="false" :showMask="false" class="w-[463px]">
        <Login> </Login>
    </Modal>
</template>
