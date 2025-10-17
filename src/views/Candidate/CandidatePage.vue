<template>
  <div class="content p-6">
    <!-- head -->
    <div class="flex justify-between create-button">
      <div class="">
        <span class="text-2xl font-bold">{{ t('candidate.title') }}</span>
      </div>
      <BaseButton btnTwoIcons btnPrimary large @click="hanleToggleModal">
        <template #left-icon>
          <span><i class="fa-solid fa-plus text-white"></i></span>
        </template>
        <span class="text-white text-btn">{{ t('common.button.add', { msg: 'ứng viên' }) }}</span>
        <template #right-icon>
          <div class="dropdown flex items-center justify-between">
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </template>
      </BaseButton>
    </div>
    <!-- body -->
    <div class="data-section py-5 mt-5 rounded-md">
      <!-- filter -->
      <div class="filter flex justify-end px-5">
        <div class="flex gap-12">
          <Search :placeholder="t('common.searchPlaceholder')" />
          <BaseButton isOnlyIcon>
            <i class="fa-solid fa-magnifying-glass"></i>
          </BaseButton>
          <BaseButton isOnlyIcon>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </BaseButton>
          <BaseButton isOnlyIcon>
            <i class="fa-regular fa-chart-bar"></i>
          </BaseButton>
          <BaseButton isOnlyIcon>
            <i class="fa-solid fa-gear"></i>
          </BaseButton>
        </div>
      </div>

      <!-- table -->
      <div class="table mt-5">
        <MSCandidateTable />
      </div>
    </div>
  </div>
  <CandidateModal v-model:isOpen="isOpen" @save="handleSave" />
</template>

<script setup>
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import CandidateModal from '@/components/Modal/CandidateModal.vue'
import Search from '@/components/Search/Search.vue'
import { ref } from 'vue'
import MSCandidateTable from './components/MSCandidateTable.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const isOpen = ref(false)
const hanleToggleModal = () => {
  isOpen.value = !isOpen.value
}
const handleSave = (data) => {
  console.log(data)
}
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
