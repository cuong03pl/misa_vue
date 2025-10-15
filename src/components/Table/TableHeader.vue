<template>
  <thead>
    <tr>
      <th v-show="hasCheckbox" style="width: 48px">
        <input type="checkbox" id="selectAll" />
      </th>
      <th v-for="(item, index) in data" :key="index">{{ item }}</th>
    </tr>
  </thead>
</template>

<script setup>
defineProps({
  hasCheckbox: Boolean,
  data: Array,
})
</script>

<style scoped>
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
input[type='checkbox'] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
</style>
