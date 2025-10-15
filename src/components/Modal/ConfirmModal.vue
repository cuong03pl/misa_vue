<template>
  <BaseModal :isOpen="isOpenConfimModal" to="body">
    <div class="modal-confirm">
      <div class="overlay">
        <div class="content rounded-md">
          <div class="modal-confirm-body px-5 py-5">
            <div class="flex justify-between items-center">
              <h3 class="text-center">Xác nhận xóa</h3>
              <span @click="emit('click', false)" class="btn-close"
                ><i class="fa-solid fa-xmark"></i
              ></span>
            </div>
            <p class="text-center mt-2">Bạn có chắc chắn muốn xóa ứng viên này?</p>
          </div>
          <div class="modal-confirm-footer flex justify-end gap-12 px-5 py-4">
            <Button btnCancel @click="emit('click', false)">Hủy</Button>
            <Button btnDelete>Xóa</Button>
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
  isOpenConfimModal: Boolean,
})
const emit = defineEmits(['click'])
</script>

<style scoped>
/* Modal xác nhận xóa */
.modal-confirm {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.modal-confirm .overlay {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

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
