<template>
  <span class="text-primary">{{ label }} </span>
  <input :type="type" :placeholder="placeholder" />
  <small v-if="isRequired" class="error-text"></small>
</template>

<script setup>
defineProps({
  label: String,
  type: String,
  placeholder: String,
  isRequired: Boolean,
})
</script>

<style></style>
