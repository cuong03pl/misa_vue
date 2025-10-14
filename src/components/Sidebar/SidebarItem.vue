<template>
  <li class="flex gap-12 items-center px-4 py-3">
    <span class="icon" v-html="item.icon"></span>
    <span class="label text-white">{{ item.title }}</span>
  </li>
</template>

<script setup>
defineProps({
  item: Object,
})
</script>

<style></style>
