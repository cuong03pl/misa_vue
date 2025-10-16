<template>
  <table>
    <TableHeader hasCheckbox :data="headers" />
    <tbody>
      <tr @dblclick="emit('dblclick', row)" v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td v-if="hasCheckbox">
          <input type="checkbox" class="row-checkbox" />
        </td>
        <td class="line-clamp-1" v-for="header in headers" :key="header.field">
          <slot :name="`cell-${header.field}`" :row="row" :value="row[header.field]">
            {{ row[header.field] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import TableHeader from './TableHeader.vue'

defineProps({
  headers: {
    type: Array,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
  hasCheckbox: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['dblclick'])
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

input[type='checkbox'] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
</style>
