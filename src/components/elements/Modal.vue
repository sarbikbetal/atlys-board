<script setup lang="ts">
import Cross from '@/assets/icons/cross.svg'

defineOptions({ inheritAttrs: false })

const props = withDefaults(
    defineProps<{
        visible: boolean
        closable: boolean
        showMask: boolean
    }>(),
    {
        visible: false,
        closable: true,
        showMask: true
    }
)

const emit = defineEmits<{
    close: []
    'update:visible': [isVisible: boolean]
}>()

const handleClose = () => {
    emit('update:visible', false)
    emit('close')
}
</script>

<template>
    <Teleport to="body">
        <Transition name="modal">
            <div
                v-if="props.visible"
                class="modal-mask"
                :class="{ 'backdrop-blur-[2px]': props.showMask }"
            >
                <div class="modal-container gradient-border" v-bind="$attrs">
                    <button v-if="props.closable" class="modal-close-btn" @click="handleClose">
                        <Cross class="h-4 w-4" />
                    </button>
                    <div class="modal-body">
                        <slot />
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style>
@charset "UTF-8";
.modal-mask {
    @apply h-full w-full flex top-0 left-0 z-50 fixed bg-black/50;
    transition: opacity 0.3s ease;
}

.modal-container {
    @apply m-auto min-w-80 px-6 py-10 bg-card rounded-lg relative;
    transition: all 0.3s ease;
}

.modal-body {
    @apply w-full;
}

.modal-close-btn {
    @apply absolute right-4 top-4 rounded-full bg-dark flex items-center justify-center p-2;
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}
</style>
