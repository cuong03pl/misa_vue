<template>
  <ms-modal :isOpen="isOpenConfirmModal" to="body">
    <div class="modal-confirm">
      <div class="overlay">
        <div class="content rounded-md p-6">
          <div class="modal-confirm-body">
            <div class="head flex justify-between items-center">
              <h3 class="text-center">{{ t('common.confirm_delete') }}</h3>
              <span @click="emit('update:isOpenConfirmModal', false)" class="btn-close"
                ><i class="fa-solid fa-xmark"></i
              ></span>
            </div>
            <div class="content my-6">
              <slot name="content"> </slot>
            </div>
          </div>
          <div class="modal-confirm-footer flex justify-end gap-8">
            <slot name="footer">
              <ms-button btnSecondary medium @click="emit('update:isOpenConfirmModal', false)">{{
                t('common.button.cancel')
              }}</ms-button>
              <ms-button @click="emit('delete')" btnDelete medium>{{
                t('common.button.delete')
              }}</ms-button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </ms-modal>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import MsModal from './MsModal.vue'

const { t } = useI18n()

//#region Props
defineProps({
  isOpenConfirmModal: Boolean,
})
//#endregion Props

//#region Emits
const emit = defineEmits(['update:isOpenConfirmModal', 'delete'])
//#endregion Emits
</script>

<style scoped>
/* Modal xác nhận xóa */

.modal-confirm .content {
  background: white;
  max-width: 450px;
  width: 90%;
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
  font-weight: bold;
  color: var(--text-color);
}

.modal-confirm-body .content {
  font-weight: 400;
  font-size: 14px;
}
</style>
