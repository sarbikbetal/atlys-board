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
        showMask: false
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
                :class="{ 'backdrop-blur': props.showMask }"
            >
                <div class="modal-container gradient-card" v-bind="$attrs">
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
.gradient-card {
    display: flex;
    align-items: center;
    margin: auto;
    position: relative;
    padding: 30% 2em;
    box-sizing: border-box;
    color: #fff;
    background: #000;
    background-clip: padding-box;
    border: solid 2px transparent;
    border-radius: 8px;
}
.gradient-card:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -2px;
    border-radius: inherit;
    background: linear-gradient(140deg, #969696, #343434);
}

.modal-mask {
    @apply h-full w-full flex top-0 left-0 z-50 fixed;
    transition: opacity 0.3s ease;
}

.modal-container {
    @apply m-auto min-w-80 px-6 py-10 bg-card;
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

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
