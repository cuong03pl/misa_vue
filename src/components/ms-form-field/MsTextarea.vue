<template>
  <div class="form-textarea flex flex-1 flex-col">
    <span class="text-primary">{{ label }}</span>
    <textarea
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      rows="3"
      :type="{ type }"
      :placeholder="placeholder"
    ></textarea>
  </div>
</template>

<script setup>
//#region Props
defineProps({
  label: String,
  type: String,
  name: String,
  placeholder: String,
  isRequired: Boolean,
  modelValue: String,
  error_message: String,
  flexRow: Boolean,
})
//#endregion Props

const emit = defineEmits(['update:modelValue'])
</script>

<style>
.form-textarea {
  gap: 8px;
}

.form-textarea textarea {
  padding: 4px 8px;
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  color: var(--text-color);
}

.form-textarea textarea:focus {
  border: 1px solid var(--btn-primary);
  outline: none;
}
</style>
