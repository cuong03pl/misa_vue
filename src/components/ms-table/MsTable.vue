<template>
  <table>
    <TableHeader
      :checked="isAllSelected"
      @toggleSelectAll="toggleSelectAll"
      hasCheckbox
      :data="headers"
    />
    <tbody>
      <tr @dblclick="emit('dblclick', row)" v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td v-if="hasCheckbox">
          <!-- Vmodel tự động checked nếu trong selectedRows có value -->
          <input
            :value="row.CandidateID"
            v-model="selectedRows"
            type="checkbox"
            class="row-checkbox"
          />
        </td>
        <td class="line-clamp-1" v-for="header in headers" :key="header.field">
          <slot
            :name="`cell-${header.field}`"
            :row="row"
            :value="formatter[header.type](row[header.field])"
          >
            <!-- Xử lý format theo type -->
            {{ formatter[header.type](row[header.field]) }}
            <!-- {{ row[header.field] }} -->
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { formatter } from '@/utils/formatter'
import TableHeader from './TableHeader.vue'
import { ref, watch } from 'vue'

//#region Props
const props = defineProps({
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
//#endregion Props

//#region Emits
const emit = defineEmits(['dblclick'])
//#endregion Emits

//#region State
const selectedRows = ref([])
const isAllSelected = ref(false)
//#endregion State

//#region Watchers
watch(selectedRows, (newVal) => {
  console.log(selectedRows)

  isAllSelected.value = props.rows.length > 0 && selectedRows.value.length === props.rows.length
})
//#endregion Watchers

//#region Methods
/**
 * Hàm xử lý chọn tất cả checkbox
 * createdby: hkc
 */
const toggleSelectAll = () => {
  if (isAllSelected.value) {
    selectedRows.value = []
  } else {
    selectedRows.value = props.rows.map((r) => r.CandidateID)
  }
}
//#endregion Methods
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
