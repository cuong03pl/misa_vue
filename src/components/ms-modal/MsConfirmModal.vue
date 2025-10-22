<template>
  <ms-modal :isOpen="isOpenConfirmModal" to="body">
    <div class="modal-content rounded-md">
            <div class="modal-head  flex justify-between items-center">
              
              <h3 class="text-2xl font-bold">{{ t('common.confirm_delete') }}</h3>
              <span @click="emit('update:isOpenConfirmModal', false)" class="btn-close"
                ><i class="fa-solid fa-xmark"></i
              ></span>
            </div>
            <div class="modal-body">
              <slot name="content"> </slot>
            </div>
            <div class="modal-footer flex justify-end ">
              <slot name="footer">
                <ms-button type="secondary" size="medium" @click="emit('update:isOpenConfirmModal', false)">{{
                  t('common.button.cancel')
                }}</ms-button>
                <ms-button type="delete" @click="emit('delete')" size="medium">{{
                  t('common.button.delete')
                }}</ms-button>
              </slot>
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

<style >
/* Modal xác nhận xóa */



</style>
