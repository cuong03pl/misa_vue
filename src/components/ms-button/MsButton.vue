<template>
  <button
    :type="type"
    @click="emit('click')"
    :class="[
      'text-btn btn',
      isOnlyIcon && 'btn-only-icon',
      btnPrimary && 'btn-primary',
      btnDelete && 'btn-delete',
      btnSecondary && 'btn-secondary',
      btnCombo && 'btn-combo',
      btnToggle && 'btn-toggle',
      large && 'btn-large',
      medium && 'btn-medium',
      small && 'btn-small',
      disabled && 'disabled',
    ]"
  >
    <slot name="left-icon" />
    <slot />
    <slot name="right-icon" />
  </button>
</template>

<script setup>
//#region Props
defineProps({
  isOnlyIcon: Boolean,
  btnPrimary: Boolean,
  btnDelete: Boolean,
  btnSecondary: Boolean,
  btnCombo: Boolean,
  btnToggle: Boolean,
  large: Boolean,
  medium: Boolean,
  small: Boolean,
  disabled: Boolean,
  type: String,
})
//#endregion Props

//#region Emits
const emit = defineEmits(['click'])
//#endregion Emits
</script>

<style>
/* base */
.text-btn {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.014em;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s ease;
}

/* --- Size  --- */
.btn-large {
  height: var(--btn-large);
}
.btn-medium {
  height: var(--btn-medium);
}
.btn-small {
  height: var(--btn-small);
}

/* --- Color  --- */
.btn-primary {
  background: var(--btn-primary);
  color: #fff;
  min-width: 80px;
  padding: 0 16px;
}

.btn-secondary {
  background: #f5f5f5;
  color: #333;
  border: 1px solid #d9d9d9;
  min-width: 80px;
  padding: 0 16px;
}

.btn-delete,
.btn-confirm-delete {
  background: #d32f2f;
  color: #fff;
  min-width: 80px;
}

.btn-toggle {
  background: var(--btn-primary);
  color: #fff;
  gap: 4px;
  padding: 12px 16px;
}

/* --- Special styles --- */
.btn-only-icon {
  border: 1px solid #cccccc87;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: 36px;
  width: 36px;
}

/* combo button */
.btn-combo {
  background: var(--btn-primary);
  color: #fff;
  padding-left: 12px;
}
.btn-combo div {
  border-left: 1px solid #ccc;
  padding: 0 12px;
  height: 100%;
}
.btn-combo span {
  padding: 0 16px 0 4px;
}
.btn-combo i {
  /* font-size: 20px; */
}

/* new */
.link-btn {
  color: #fff;
}
.btn-one-icon {
  gap: 4px;
  padding: 0 16px 0 12px;
  min-width: 80px;
}

.disabled {
  cursor: not-allowed;
  opacity: 0.56;
}
</style>
