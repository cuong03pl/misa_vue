<script setup>
import TheHeader from '@/components/Header/TheHeader.vue'
import TheSidebar from '@/components/Sidebar/TheSidebar.vue'
</script>
<template>
  <div class="container">
    <!-- Header -->
    <TheHeader />

    <div class="flex-1 flex justify-between">
      <!-- side bar -->
      <TheSidebar />
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
