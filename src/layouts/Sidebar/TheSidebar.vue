<template>
  <div :class="['side-bar flex flex-col justify-between', !isShow && 'collapsed']">
    <ul class="flex flex-col gap-6">
      <SidebarItem v-for="item in sidebar_data" :item="item" :key="item.id" />
    </ul>
    <ms-button large btnPrimary @click="handleToggle">
      <template #left-icon>
        <i class="fa-solid fa-chevron-left"></i>
      </template>
      <span class="btn-toggle-text">{{ t('common.collapse') }}</span>
    </ms-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { sidebar_data } from '@/constants/sidebar_data'
import { useI18n } from 'vue-i18n'
import SidebarItem from './SidebarItem.vue'
const { t } = useI18n()

//#region State
const isShow = ref(true)
//#endregion State

//#region Methods
/**
 * Hàm xử lý thu gọn sidebar
 * createdby: hkc
 */
const handleToggle = () => {
  isShow.value = !isShow.value
}
//#endregion Methods
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
