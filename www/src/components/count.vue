<script setup lang="ts">
const props = defineProps<{
    count: number;
}>();
</script>

<template>
    <p>{{ props.count }}</p>
</template>
