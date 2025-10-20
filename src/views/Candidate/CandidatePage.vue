<template>
  <div class="content p-6">
    <!-- head -->
    <div class="flex justify-between create-button items-center">
      <div class="">
        <span class="text-2xl font-bold">{{ t('candidate.title') }}</span>
      </div>
      <div class="flex items-center gap-12">
        <ms-button
          v-if="selectedRows.length > 0"
          btnDelete
          btnOnlyIcon
          large
          @click="hanleToggleModalConfirm"
        >
          <i class="fa-solid fa-trash-can"></i>
        </ms-button>
        <ms-button btnTwoIcons btnPrimary large @click="hanleToggleModal">
          <template #left-icon>
            <span><i class="fa-solid fa-plus text-white"></i></span>
          </template>
          <span class="text-white text-btn">{{ t('common.button.add', { msg: 'ứng viên' }) }}</span>
          <template #right-icon>
            <div class="dropdown flex items-center justify-between">
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </template>
        </ms-button>
      </div>
    </div>
    <!-- body -->
    <div class="data-section py-5 mt-5 rounded-md">
      <!-- filter -->
      <div class="filter flex justify-end px-5">
        <div class="flex gap-12">
          <ms-search v-model="q" :placeholder="t('common.searchPlaceholder')" />
          <ms-button isOnlyIcon>
            <i class="fa-solid fa-magnifying-glass"></i>
          </ms-button>
          <ms-button isOnlyIcon>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </ms-button>
          <ms-button isOnlyIcon>
            <i class="fa-regular fa-chart-bar"></i>
          </ms-button>
          <ms-button isOnlyIcon>
            <i class="fa-solid fa-gear"></i>
          </ms-button>
        </div>
      </div>

      <!-- table -->
      <div class="table mt-5">
        <candidate-table :candidates="candidates" @getSelectRows="handleGetSelectedRows" />
      </div>
    </div>
  </div>
  <candidate-modal v-model:isOpen="isOpen" @save="handleSave" />
  <ms-confirm-modal v-model:isOpenConfirmModal="isOpenConfirm">
    <template #content>
      <p class="text-center mt-2">
        Bạn có chắc chắn muốn xóa {{ selectedRows.length }} ứng viên này?
      </p>
    </template>
  </ms-confirm-modal>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { Candidate_data } from '@/constants/data_example'
import _ from 'lodash'
import MsSearch from '@/components/ms-search/MsSearch.vue'
import CandidateTable from './components/CandidateTable.vue'
import CandidateModal from './components/CandidateModal.vue'
import MsConfirmModal from '@/components/ms-modal/MsConfirmModal.vue'

const { t } = useI18n()

//#region Methods
const fetchData = (newVal) => {
  candidates.value = Candidate_data.filter((item) =>
    item.CandidateName.toLowerCase().includes(newVal.toLowerCase()),
  )
}

const hanleToggleModal = () => {
  isOpen.value = !isOpen.value
}
const hanleToggleModalConfirm = () => {
  isOpenConfirm.value = !isOpenConfirm.value
}
const handleSave = (data) => {
  console.log(data)
}
const handleGetSelectedRows = (data) => {
  selectedRows.value = data
}
//#endregion Methods
//#region State
const isOpen = ref(false)
const isOpenConfirm = ref(false)
const selectedRows = ref([])
const candidates = ref([...Candidate_data])
const q = ref('')
const debouncedFetch = _.debounce(fetchData, 500)
//#endregion State

//#region Watchers
watch(q, (newVal) => {
  debouncedFetch(newVal)
})
//#endregion Watchers
</script>

<style scoped>
.content {
  width: 80%;
  flex: 1;
  background: #ecebf0;
  transition: all 0.3s ease;
}

.content.collapsed {
  /* width: 100%; */
  background: #ecebf0;
  transition: all 0.3s ease;
}

.data-section {
  background: #fff;
}

/* table */

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}
</style>
