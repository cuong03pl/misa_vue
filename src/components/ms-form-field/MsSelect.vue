<template>
  <div class="text-primary">{{ label }}</div>
  <select :value="modelValue ?? 'default'" @input="emit('update:modelValue', $event.target.value)">
    <slot />
  </select>
</template>

<script setup>
//#region Props
defineProps({
  label: String,
  modelValue: [String, Number],
})
//#endregion Props

//#region Emits
const emit = defineEmits(['update:modelValue'])
//#endregion Emits
</script>

<style></style>
