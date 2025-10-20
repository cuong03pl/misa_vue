<template>
  <button
    :type="type"
    @click="emit('click')"
    :class="[
      'text-btn gap-12 btn',
      isOnlyIcon && 'btn-only-icon',
      btnPrimary && 'btn-primary',
      btnDelete && 'btn-delete',
      btnCancel && 'btn-cancel',
      btnTwoIcons && 'btn-two-icons',
      btnToggle && 'btn-toggle',
      large && 'btn-large',
      medium && 'btn-medium',
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
  btnCancel: Boolean,
  btnTwoIcons: Boolean,
  btnToggle: Boolean,
  large: Boolean,
  medium: Boolean,
  type: String,
})
//#endregion Props

//#region Emits
const emit = defineEmits(['click'])
//#endregion Emits
</script>

<style>
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
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s ease;
  padding: 12px 16px;
}

/* --- Size  --- */
.btn-large {
  height: var(--btn-large);
}

.btn-medium {
  height: var(--btn-medium);
}

/* --- Color  --- */
.btn-primary,
.btn-two-icons {
  background: var(--btn-primary);
  color: #fff;
  min-width: 80px;
}

.btn-delete,
.btn-confirm-delete {
  background: #d32f2f;
  color: #fff;
  min-width: 80px;
}

.btn-delete:hover,
.btn-confirm-delete:hover {
  background: #c62828;
}

.btn-cancel,
.btn-cancel-confirm {
  background: #f5f5f5;
  color: #333;
  border: 1px solid #d9d9d9;
  min-width: 80px;
}

.btn-cancel-confirm:hover {
  background: #e8e8e8;
}
.btn-toggle {
  background: var(--btn-primary);
  color: #fff;
}
/* --- Special styles --- */
.btn-only-icon {
  border: 1px solid #cccccc87;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
}

.btn-two-icons div {
  border-left: 1px solid #ccc;
  padding-left: 12px;
}

.btn-two-icons i,
.btn-two-icons div i {
  color: #fff;
}

.btn-close {
  cursor: pointer;
}

.btn-close i {
  font-size: 20px;
}

.collapsed .btn-toggle-text {
  display: none;
}
</style>
