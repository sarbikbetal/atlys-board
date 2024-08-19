<template>
    <div class="input-wrapper">
        <textarea v-bind="$attrs" class="flex-grow" />
    </div>
</template>

<style scoped>
.input-wrapper {
    @apply flex rounded transition-colors duration-200;
}
.input-wrapper.bordered {
    border-width: 1.5px;
    @apply border-gray-100 mt-2.5 pl-3 pr-2.5;
}
.input-wrapper:focus-within {
    @apply border-gray-200;
}
textarea {
    @apply bg-transparent box-content text-base pt-4;
    field-sizing: normal;
}
textarea.bordered {
    @apply py-3;
}
textarea:focus {
    @apply outline-none;
}
textarea::placeholder {
    @apply text-gray-300;
}
</style>
