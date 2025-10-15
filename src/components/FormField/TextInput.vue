<template>
  <span class="text-primary">{{ label }} </span>
  <input
    :name="name"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
  <small v-if="isRequired" class="error-text"></small>
</template>

<script setup>
defineProps({
  label: String,
  type: String,
  name: String,
  placeholder: String,
  isRequired: Boolean,
  modelValue: String,
})
const emit = defineEmits(['update:modelValue'])
</script>

<style></style>
