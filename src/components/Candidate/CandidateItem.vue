<template>
  <tr @dblclick="handleToggleModal(item)">
    <td><input type="checkbox" class="row-checkbox" /></td>
    <td>
      <Button @click="handleToggleConfirmModal" isOnlyIcon btnDelete>
        <i class="fa-solid fa-trash-can"></i>
      </Button>
    </td>
    <td>
      <div class="avatar-cell">
        <div class="avatar flex items-center justify-center text-secondary yellow">
          {{ getAvatar(item.CandidateName) }}
        </div>
        <div class="user-info">
          <div class="user-name">{{ item.CandidateName }}</div>
        </div>
      </div>
    </td>
    <td class="line-clamp-1">{{ item.Mobile }}</td>
    <td class="line-clamp-1">{{ item.Email }}</td>
    <td>--</td>
    <td class="line-clamp-1">{{ item.JobPositionName }}</td>
    <td class="line-clamp-1">{{ item.RecruitmentName }}</td>
    <td>
      <span class="status">{{ item.RecruitmentRoundName }}</span>
    </td>
    <td>
      <div class="rating">
        <svg class="star" viewBox="0 0 24 24">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
        <svg class="star" viewBox="0 0 24 24">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
        <svg class="star" viewBox="0 0 24 24">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
        <svg class="star" viewBox="0 0 24 24">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
        <svg class="star" viewBox="0 0 24 24">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
      </div>
    </td>
    <td>{{ item?.applyDate }}</td>
  </tr>
  <ConfirmModal v-model:isOpenConfirmModal="isOpenConfirmModal">
    <template #content>
      <p class="text-center mt-2">Bạn có chắc chắn muốn xóa ứng viên này?</p>
    </template>
  </ConfirmModal>
  <CandidateModal @save="handleSave" :candidate="selectedCandidate" v-model:isOpen="isOpen">
    <template #head>
      <span class="text-3xl font-bold">Sửa ứng viên</span>
      <span @click="handleToggleModal" class="icon"><i class="fa-solid fa-xmark"></i></span>
    </template>
  </CandidateModal>
</template>

<script setup>
import { ref } from 'vue'
import Button from '../Button/Button.vue'
import ConfirmModal from '../Modal/ConfirmModal.vue'
import CandidateModal from '../Modal/CandidateModal.vue'
import { getAvatar } from '@/utils/getAvatar'
defineProps({
  item: Object,
})
const isOpenConfirmModal = ref(false)
const isOpen = ref(false)
const selectedCandidate = ref({})

const handleToggleConfirmModal = () => {
  isOpenConfirmModal.value = !isOpenConfirmModal.value
}
const handleToggleModal = (item) => {
  selectedCandidate.value = { ...item }
  isOpen.value = !isOpen.value
}
const handleSave = (data) => {
  console.log(data)
}
</script>

<style scoped>
td {
  padding: 12px 16px;
  font-size: 14px;
  color: var(--text-color);
  border-bottom: 1px solid #d5d6d9;
}
tbody tr {
  transition: background-color 0.15s;
  cursor: pointer;
}

tbody tr:hover {
  background-color: var(--table-item-hover);
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
