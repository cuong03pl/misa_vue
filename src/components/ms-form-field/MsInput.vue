<template>
  <div class="form-input flex flex-1" :class="flexRow ? 'flex-row items-center' : 'flex-col'">
    <span class="text-primary">{{ label }} </span>
    <input
      :class="[large && 'input-large', medium && 'input-medium', small && 'input-small']"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <small v-if="isRequired" :class="['error-text', error_message && 'show']">{{
      error_message
    }}</small>
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
  large: Boolean,
  medium: Boolean,
  small: Boolean,
})
//#endregion Props

//#region Emits
const emit = defineEmits(['update:modelValue'])
//#endregion Emits
</script>

<style scoped>
/* --- Size  --- */
.input-large {
  height: var(--input-large);
}
.input-medium {
  height: var(--input-medium);
}
.input-small {
  height: var(--input-small);
}

.form-input {
  gap: 8px;
}
.form-input input {
  height: var(--input-form-height);
  padding: 0 8px 0 12px;
  display: flex;
  width: 100%;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  color: var(--text-color);
}

.form-input textarea {
  padding: 4px 8px;
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  color: var(--text-color);
}

.form-input input:focus {
  border: 1px solid var(--btn-primary);
  outline: none;
}

/* focus */
input:focus {
  border: 1px solid var(--btn-primary);
  outline: none;
}
input.readonly {
}

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
