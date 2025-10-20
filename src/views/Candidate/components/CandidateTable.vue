<template>
  <div class="table-container">
    <ms-table
      @dblclick="handleToggleModal"
      :hasCheckbox="true"
      :headers="Candidate_header"
      :rows="candidates"
      @getSelectRows="handleGetSelectedRows"
    >
      <template #cell-CandidateName="{ row, value }">
        <div class="avatar-cell">
          <div class="avatar flex items-center justify-center text-secondary yellow">
            {{ getAvatar(value) }}
          </div>
          <div :class="['user-info', row.isRecruited ? 'flex-col gap-2' : '']">
            <div class="user-name">{{ value }}</div>
            <div v-if="row.isRecruited" class="recruited flex items-center gap-6">
              <i class="fa-solid fa-check"></i> <span>Nhân viên</span>
            </div>
            <div v-if="row.hasMessage" class=""><i class="fa-regular fa-envelope"></i></div>
            <!-- <div v-if="row.isNew" class="new">Mới</div> -->
          </div>
        </div>
      </template>
      <template #cell-RecruitmentRoundName="{ value }">
        <span class="status">{{ value }}</span>
      </template>
    </ms-table>
    <CandidateModal
      mode="edit"
      @save="handleSave"
      :candidate="selectedCandidate"
      v-model:isOpen="isOpen"
    />
  </div>
  <!-- table footer -->
  <TableFooter />
</template>

<script setup>
import { Candidate_header } from '@/constants/header_data'
import { getAvatar } from '@/utils/getAvatar'
import { ref } from 'vue'
import CandidateModal from '@/views/Candidate/components/CandidateModal.vue'
import MsTable from '@/components/ms-table/MsTable.vue'
import TableFooter from '@/components/ms-table/TableFooter.vue'

//#region Props
defineProps({
  candidates: {
    type: Array,
    default: () => [],
  },
})
//#endregion Props

// #region Emits
const emit = defineEmits(['getSelectRows'])
//#endregion Emits

//#region State
const isOpen = ref(false)
const selectedCandidate = ref({})
//#endregion State

//#region Methods
/**
 * Hàm xử lý bật tắt modal
 * @param item - dữ liệu ứng viên được chọn
 * createdby: hkc
 */
const handleToggleModal = (item) => {
  selectedCandidate.value = { ...item }
  isOpen.value = !isOpen.value
}

/**
 * Hàm xử lý bật tắt modal
 * @param data - Dữ liệu ứng viên đã được chỉnh sửa
 * createdby: hkc
 */
const handleSave = (data) => {
  console.log(data)
}

const handleGetSelectedRows = (data) => {
  emit('getSelectRows', data)
}
//#endregion Methods
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

.recruited {
  color: green;
}
.new {
  background: blue;
  color: white;
  padding: 2px 4px;
}
input[type='checkbox'] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
</style>
