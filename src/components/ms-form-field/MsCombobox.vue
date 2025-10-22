<template>
  <div class="select-list flex flex-1 flex-col">
    <div class="text-primary">{{ label }}</div>
    <AutoComplete
      v-model="value"
      dropdown
      :suggestions="items"
      @complete="search"
      class="p-autocomplete-empty-message"
    />
  </div>
</template>

<script setup>
import { AutoComplete } from 'primevue'
import { ref } from 'vue'

const value = ref(null)
const items = ref([])

const search = (event) => {
  let _items = [...Array(10).keys()]

  items.value = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items
}
</script>

<style scoped>
.select-list {
  gap: 8px;
}
.select-list select {
  height: var(--input-form-height);
  padding: 0 8px 0 12px;

  display: block;
  width: 100%;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  color: var(--text-color);
}
</style>
