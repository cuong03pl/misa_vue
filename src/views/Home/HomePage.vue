<template>
  <div class="content p-6">
    <!-- head -->
    <div class="flex justify-between create-button">
      <div class=""><span class="text-2xl font-bold">Ứng viên</span></div>
      <Button btnTwoIcons btnPrimary large @click="hanleToggleModal">
        <template #left-icon>
          <span><i class="fa-solid fa-plus text-white"></i></span>
        </template>
        <span class="text-white text-btn">Thêm ứng viên</span>
        <template #right-icon>
          <div class="dropdown flex items-center justify-between">
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </template>
      </Button>
    </div>
    <!-- body -->
    <div class="data-section py-5 mt-5 rounded-md">
      <!-- filter -->
      <div class="filter flex justify-end px-5">
        <div class="flex gap-12">
          <Search />
          <Button isOnlyIcon>
            <i class="fa-solid fa-magnifying-glass"></i>
          </Button>
          <Button isOnlyIcon>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </Button>
          <Button isOnlyIcon>
            <i class="fa-regular fa-chart-bar"></i>
          </Button>
          <Button isOnlyIcon>
            <i class="fa-solid fa-gear"></i>
          </Button>
        </div>
      </div>

      <!-- table -->
      <div class="table mt-5">
        <Candidate />
      </div>
    </div>
  </div>
  <CandidateModal :isOpen="isOpen" @click="(e) => (isOpen = e)" />
</template>

<script setup>
import Button from '@/components/Button/Button.vue'
import Candidate from '@/components/Candidate/Candidate.vue'
import CandidateModal from '@/components/Modal/CandidateModal.vue'
import Search from '@/components/Search/Search.vue'
import { ref } from 'vue'
const isOpen = ref(false)
const hanleToggleModal = () => {
  isOpen.value = !isOpen.value
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
