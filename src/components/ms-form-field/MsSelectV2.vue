<template>
  <div class="select-list flex flex-1 flex-col">
    <div class="text-primary">{{ label }}</div>
    <Select
      :value="modelValue ?? 'default'"
      @input="emit('update:modelValue', $event.target.value)"
      editable
      showClear
      :options="cities"
      optionLabel="name"
      placeholder="Select a City"
      :class="[large && 'large', medium && 'medium', small && 'small']"
    />
    <small v-if="isRequired" :class="['error-text', !error_message && 'show']">tét nè </small>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Select from 'primevue/select'
import { Dropdown } from 'primevue'

//#region Props
defineProps({
  label: String,
  large: Boolean,
  medium: Boolean,
  small: Boolean,
  isRequired: Boolean,
  error_message: String,
  modelValue: [String, Number],
})
//#endregion Props

//#region Emits
const emit = defineEmits(['update:modelValue'])
//#endregion Emits
const selectedCity = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
  { name: 'Paris', code: 'PRS' },
  { name: 'Paris', code: 'PRS' },
  { name: 'Paris', code: 'PRS' },
])
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
::v-deep(.p-select-list-container) {
  padding: 0 !important;
}

/* select:focus {
  border: 1px solid var(--toast-success);
} */

.error-text {
  color: red;
  font-size: 13px;
  min-height: 16px;
  display: none;
}
.error-text.show {
  display: block;
}
/* custom */
.p-select-list-container {
  max-height: 200px !important;
  padding-right: 0 !important;
}
.p-select-option {
  height: 36px;
}

.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
  background-color: #edf8eb !important;
}
</style>
