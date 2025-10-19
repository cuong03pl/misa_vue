<template>
  <li class="flex gap-12 items-center px-4 py-2">
    <span class="icon" v-html="item.icon"></span>
    <span class="label text-white">{{ item.title }}</span>
  </li>
</template>

<script setup>
////#region Props
defineProps({
  item: Object,
})
//#endregion Props
</script>

<style></style>
