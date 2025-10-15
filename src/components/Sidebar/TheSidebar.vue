<template>
  <div :class="['side-bar flex flex-col justify-between', isShow && 'collapsed']">
    <ul class="flex flex-col gap-12">
      <SidebarItem v-for="item in MENU_ITEMS" :item="item" :key="item.id" />
    </ul>
    <Button large btnPrimary @click="handleToggle">
      <template #left-icon>
        <i class="fa-solid fa-chevron-left"></i>
      </template>
      <span class="btn-toggle-text">Thu gọn</span>
    </Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SidebarItem from './SidebarItem.vue'
import Button from '../Button/Button.vue'

const MENU_ITEMS = [
  {
    id: 0,
    title: 'Tin tuyển dụng',
    icon: '<i class="fa-regular fa-file-text"></i>',
  },
  {
    id: 1,
    title: 'Ứng viên',
    icon: '<i class="fa-regular fa-user"></i>',
    active: true,
  },
  {
    id: 2,
    title: 'Lịch',
    icon: '<i class="fa-regular fa-calendar"></i>',
  },
  {
    id: 3,
    title: 'Kho tiềm năng',
    icon: '<i class="fa-solid fa-arrows-turn-right"></i>',
  },
  {
    id: 4,
    title: 'Chiến dịch tuyển dụng',
    icon: '<i class="fa-solid fa-chart-bar"></i>',
  },
  {
    id: 5,
    title: 'Công việc',
    icon: '<i class="fa-solid fa-check-circle"></i>',
  },
  {
    id: 6,
    title: 'aiMarketing',
    icon: '<i class="fa-regular fa-envelope"></i>',
  },
  {
    id: 7,
    title: 'Trao đổi với ứng viên',
    icon: '<i class="fa-regular fa-comments"></i>',
  },
]

const isShow = ref(true)

const handleToggle = () => {
  isShow.value = !isShow.value
}
</script>

<style>
.side-bar {
  background: linear-gradient(to bottom, var(--side-bar-from), var(--side-bar-to));

  width: 250px;
  padding: 20px 8px;
  transition: all 0.3s ease;
}

.side-bar ul {
  border-radius: 8px;
}

.side-bar ul li {
  border-radius: 8px;
}

.side-bar ul li .icon {
  width: 24px;
}

.side-bar ul li .icon i {
  font-size: 24px;
  color: white;
}

.side-bar ul li .label {
  min-width: 100px;
}

.side-bar ul li:hover {
  background: var(--btn-primary);
  cursor: pointer;
}

.side-bar.collapsed {
  width: 56px;
  transition: all 0.3s ease;
}

.side-bar.collapsed .label {
  display: none;
  transition: all 0.3s ease;
}

.side-bar.collapsed ul {
  align-items: center;
}

.side-bar.collapsed ul li {
  align-items: center;
}
</style>
