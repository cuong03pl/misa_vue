<template>
  <div class="text-primary">{{ label }}</div>
  <select :value="modelValue ?? 'default'" @input="emit('update:modelValue', $event.target.value)">
    <slot />
  </select>
</template>

<script setup>
defineProps({
  label: String,
  modelValue: [String, Number],
})
const emit = defineEmits(['update:modelValue'])
</script>

<style></style>
