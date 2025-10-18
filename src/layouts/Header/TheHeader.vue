<template>
  <div class="header flex justify-between items-center">
    <!-- Header left -->
    <div class="flex items-center h-full gap-24">
      <!-- menu  -->
      <div class="menu icon menu-icon"></div>
      <!-- logo -->
      <div class="logo flex items-center gap-24">
        <img class="image" src="@/assets/img/logo.png" alt="" />
        <span class="text text-primary">{{ t('header.title') }}</span>
      </div>
      <Search :placeholder="t('common.searchPlaceholder')" />
    </div>
    <!-- Header right -->
    <div class="flex gap-12 header-right items-center">
      <span class="icon"><i class="fa-solid fa-earth-americas"></i></span>
      <span class="text">{{ t('header.link') }}</span>
      <span class="icon notification-icon">
        <i class="fa-regular fa-bell"></i>
      </span>
      <span class="icon"><i class="fa-solid fa-question"></i></span>
      <span class="icon notification-icon">
        <i class="fa-regular fa-comment"></i>
      </span>
      <span class="icon"><i class="fa-regular fa-square-minus"></i></span>

      <div class="avatar">
        <img src="" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Search from '@/components/Search/Search.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style>
/* Header */
.header {
  height: var(--header-height);
  padding: 4px 12px;
}

/* left */
.menu {
  font-size: 20px;
  padding: 2px;
}

.logo .image {
  width: 40px;
  height: 40px;
}

.logo .text {
  font-size: 20px;
  font-weight: 700;
}

.search {
  background: #e2e2e5b4;
  width: var(--search-width);
  border-radius: 8px;
  height: var(--input-form-height);
}

.search_icon {
  font-size: 20px;
  color: var(--icon-color);
  padding: 2px;
}

.search_input {
  background: none;
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
}

/* right */
.header-right .text {
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
  line-height: 18px;
}

.header-right span i {
  font-size: 20px;
}

.avatar img {
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 100%;
}
</style>
