<template>
  <div class="select-list flex flex-1 flex-col">
    <div class="text-primary">{{ label }}</div>
    <select
      :class="[!!size && size]"
      :value="modelValue ?? 'default'"
      @input="emit('update:modelValue', $event.target.value)"
    >
      <slot />
    </select>
    <small v-if="isRequired" :class="['error-text', !error_message && 'show']">tét nè </small>
  </div>
</template>

<script setup>
//#region Props
defineProps({
  label: String,
  size: String,
  isRequired: Boolean,
  error_message: String,
  modelValue: [String, Number],
})
//#endregion Props

//#region Emits
const emit = defineEmits(['update:modelValue'])
//#endregion Emits
</script>

<style>
.select-list {
  gap: 8px;
}
.select-list select {
  height: var(--input-form-height);
  padding: 0 8px 0 12px;

  display: block;
  width: 100%;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  color: var(--text-color);
}

select:focus {
  border: 1px solid var(--toast-success);
}

.error-text {
  color: red;
  font-size: 13px;
  min-height: 16px;
  display: none;
}
.error-text.show {
  display: block;
}
</style>
