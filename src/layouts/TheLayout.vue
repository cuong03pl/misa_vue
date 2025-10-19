<script setup>
import TheHeader from './header/TheHeader.vue'
import TheSidebar from './sidebar/TheSidebar.vue'
</script>
<template>
  <div class="container">
    <!-- Header -->
    <the-header />

    <div class="flex-1 flex justify-between">
      <!-- side bar -->
      <the-sidebar />
      <!-- content -->
      <router-view />
    </div>
  </div>
</template>
<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
