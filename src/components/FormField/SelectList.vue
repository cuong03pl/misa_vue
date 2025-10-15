<template>
  <div class="text-primary">{{ label }}</div>
  <select>
    <slot />
  </select>
</template>

<script setup>
defineProps({
  label: String,
})
</script>

<style></style>
