<template>
    <div class="input-wrapper border-[1.5px] mt-2.5 pl-3 pr-2.5">
        <input v-bind="$attrs" class="flex-grow" />
        <slot name="suffixIcon" class="flex-none" />
    </div>
</template>

<style scoped>
.input-wrapper {
    @apply flex rounded border-gray-100 transition-colors duration-200;
}
.input-wrapper:focus-within {
    @apply border-gray-200;
}
input {
    @apply bg-transparent py-3 box-content text-base;
}
input:focus {
    @apply outline-none;
}
input::placeholder {
    @apply text-gray-300;
}
</style>
