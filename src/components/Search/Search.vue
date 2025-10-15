<template>
  <div class="filter-search flex items-center gap-12 px-3 py-2">
    <span class="search_icon">
      <i class="fa-solid fa-magnifying-glass"></i>
    </span>
    <input class="search_input" type="text" placeholder="Tìm kiếm và tuyển dụng" />
  </div>
</template>

<script>
export default {}
</script>

<style>
/* filter */
.filter-search {
  width: var(--search-width);
  border-radius: 8px;
  border: 1px solid #cccccc87;
  height: var(--input-form-height);
}

.filter-search .search_icon {
  font-size: 20px;
  color: var(--icon-color);
  padding: 2px;
}

.filter-search .search_input {
  background: none;
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
}
</style>
