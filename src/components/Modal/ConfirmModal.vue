<template>
  <BaseModal :isOpen="isOpenConfirmModal" to="body">
    <div class="modal-confirm">
      <div class="overlay">
        <div class="content rounded-md">
          <div class="modal-confirm-body px-5 py-5">
            <div class="flex justify-between items-center">
              <h3 class="text-center">Xác nhận xóa</h3>
              <span @click="emit('update:isOpenConfirmModal', false)" class="btn-close"
                ><i class="fa-solid fa-xmark"></i
              ></span>
            </div>
            <slot name="content"> </slot>
          </div>
          <div class="modal-confirm-footer flex justify-end gap-12 px-5 py-4">
            <slot name="footer">
              <Button btnCancel @click="emit('update:isOpenConfirmModal', false)">Hủy</Button>
              <Button btnDelete>Xóa</Button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup>
import Button from '../Button/Button.vue'
import BaseModal from './BaseModal.vue'
defineProps({
  isOpenConfirmModal: Boolean,
})
const emit = defineEmits(['update:isOpenConfirmModal'])
</script>

<style scoped>
/* Modal xác nhận xóa */


.modal-confirm .content {
  background: white;
  max-width: 450px;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-confirm-body .icon-warning {
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border-radius: 50%;
  background: #fff3cd;
  color: #ff9800;
  font-size: 32px;
}

.modal-confirm-body h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-color);
}

.modal-confirm-body p {
  font-size: 14px;
  color: #666;
}

.modal-confirm-footer {
  border-top: 1px solid #e5e5e5;
}
</style>
