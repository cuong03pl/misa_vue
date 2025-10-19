<template>
  <span class="text-primary">{{ label }} </span>
  <input
    :name="name"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
  <small v-if="isRequired" :class="['error-text', error_message && 'show']">{{
    error_message
  }}</small>
</template>

<script setup>
defineProps({
  label: String,
  type: String,
  name: String,
  placeholder: String,
  isRequired: Boolean,
  modelValue: String,
  error_message: String,
})
const emit = defineEmits(['update:modelValue'])
</script>

<style>
.error-text {
  color: red;
  font-size: 13px;
  margin-top: 2px;
  min-height: 16px;
  display: none;
}
.error-text.show {
  display: block;
}
</style>
