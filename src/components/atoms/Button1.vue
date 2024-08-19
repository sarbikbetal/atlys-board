<template>
    <button :class="[props.color]" class="atlys-btn">
        <slot name="prefixIcon" />

        <span v-if="props.label" class="text-base">
            {{ props.label }}
        </span>

        <slot />

        <slot name="suffixIcon" />
    </button>
</template>

<script lang="ts" setup>
const props = withDefaults(
    defineProps<{
        color?: 'primary' | 'secondary' | 'link' | 'danger' | 'minimal'
        disabled?: boolean
        label?: string
    }>(),
    {
        color: 'primary'
    }
)
</script>

<style scoped>
.atlys-btn {
    @apply rounded flex items-center justify-center flex-none gap-x-1 transition-colors outline-none px-4 py-3;
    min-width: 112px;
}

.atlys-btn.primary {
    @apply bg-primary text-white;
}

.atlys-btn.primary:hover:not(:disabled) {
    @apply bg-opacity-90;
}

.atlys-btn:disabled {
    @apply opacity-75 cursor-not-allowed;
    box-shadow: none !important;
}
.atlys-btn:focus-visible {
    @apply ring-2 ring-primary ring-opacity-50;
}
.atlys-btn:active {
    box-shadow: 0px 3px 4px 0px #00000033 inset;
}
</style>
