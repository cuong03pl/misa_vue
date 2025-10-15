<template>
  <div class="table-container">
    <table>
      <TableHeader hasCheckbox :data="Candidate_header" />
      <tbody>
        <candidate-item v-for="item in Candidate_data" :item="item" :key="item?.CandidateID" />
      </tbody>
    </table>
  </div>
  <!-- table footer -->
  <TableFooter />
</template>

<script setup>
import { Candidate_header } from '@/config/header_data'
import TableFooter from '../Table/TableFooter.vue'
import TableHeader from '../Table/TableHeader.vue'
import CandidateItem from './CandidateItem.vue'
import { Candidate_data } from '@/config/data_example'
</script>

<style scoped>
.table-container {
  flex: 1;
  overflow-y: auto;
  overflow-x: auto;
  background: white;
  max-height: calc(100vh - 310px);
  height: auto;
}

.empty-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  user-select: none;
}
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
</style>
