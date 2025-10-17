<template>
  <div class="table-container">
    <ms-table
      @dblclick="handleToggleModal"
      :hasCheckbox="true"
      :headers="Candidate_header"
      :rows="candidates"
    >
      <template #cell-CandidateName="{ row }">
        <div class="avatar-cell">
          <div class="avatar flex items-center justify-center text-secondary yellow">
            {{ getAvatar(row.CandidateName) }}
          </div>
          <div class="user-info">
            <div class="user-name">{{ row.CandidateName }}</div>
          </div>
        </div>
      </template>
      <template #cell-RecruitmentRoundName="{ row }">
        <span class="status">{{ row.RecruitmentRoundName }}</span>
      </template>
    </ms-table>
    <CandidateModal @save="handleSave" :candidate="selectedCandidate" v-model:isOpen="isOpen">
      <template #head>
        <span class="text-3xl font-bold">{{ t('common.button.edit', { msg: 'ứng viên' }) }}</span>
        <span @click="handleToggleModal" class="icon"><i class="fa-solid fa-xmark"></i></span>
      </template>
    </CandidateModal>
  </div>
  <!-- table footer -->
  <TableFooter />
</template>

<script setup>
import { Candidate_header } from '@/constants/header_data'
import { Candidate_data } from '@/constants/data_example'
import { getAvatar } from '@/utils/getAvatar'
import { ref } from 'vue'
import CandidateModal from '@/components/Modal/CandidateModal.vue'
import TableFooter from '@/components/Table/TableFooter.vue'
import MsTable from '@/components/Table/MsTable.vue'
import { useI18n } from 'vue-i18n'

defineProps({
  candidates: {
    type: Array,
    default: () => [],
  },
})

const { t } = useI18n()
const isOpen = ref(false)
const selectedCandidate = ref({})
const handleToggleModal = (item) => {
  selectedCandidate.value = { ...item }
  isOpen.value = !isOpen.value
}
const handleSave = (data) => {
  console.log(data)
}
</script>

<style scoped>
.table-container {
  flex: 1;
  overflow-y: auto;
  overflow-x: auto;
  background: white;
  max-height: calc(100vh - 310px);
  height: auto;
}

.empty-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  user-select: none;
}
thead {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  position: sticky;
  top: -5px;
  z-index: 10;
}

th {
  padding: 12px 16px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-color);
  white-space: nowrap;
}

td {
  padding: 12px 16px;
  font-size: 14px;
  color: var(--text-color);
  border-bottom: 1px solid #d5d6d9;
}
/* Avatar */
.avatar-cell {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  flex-shrink: 0;
}

.avatar.blue {
  background: var(--btn-primary);
}

.avatar.yellow {
  background: #fbbf24;
}

.avatar.green {
  background: #4ade80;
}

.avatar.pink {
  background: #f472b6;
}

.avatar.orange {
  background: #fb923c;
}

.user-info {
  display: flex;
  gap: 4px;
}

.user-name {
  font-weight: 500;
  color: var(--text-color);
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
}

.user-role {
  font-size: 12px;
  color: #10b981;
  display: flex;
  align-items: center;
  gap: 4px;
}

.badge {
  background: var(--btn-primary);
  color: white;
  padding: 4px 12px;
  font-weight: 500;
}

.status {
  display: inline-block;
  border-radius: 16px;
  font-weight: 500;
}

.rating {
  display: flex;
  gap: 2px;
}

.star {
  width: 16px;
  height: 16px;
  color: var(--border-secondary);
}

.star.filled {
  color: #fbbf24;
  fill: #fbbf24;
}

input[type='checkbox'] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
</style>
