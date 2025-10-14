<template>
  <div class="content p-6">
    <!-- head -->
    <div class="flex justify-between create-button">
      <div class=""><span class="text-2xl font-bold">Ứng viên</span></div>
      <button class="btn-icon flex justify-between items-center px-3 py-3 gap-12">
        <span><i class="fa-solid fa-plus text-white"></i></span>
        <span class="text-white text-btn">Thêm ứng viên</span>
        <div class="dropdown flex items-center justify-between">
          <i class="fa-solid fa-chevron-down"></i>
        </div>
      </button>
    </div>
    <!-- body -->
    <div class="data-section py-5 mt-5 rounded-md">
      <!-- filter -->
      <div class="filter flex justify-end px-5">
        <div class="flex gap-12">
          <div class="filter-search flex items-center gap-12 px-3 py-2">
            <span class="search_icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <input class="search_input" type="text" placeholder="Tìm kiếm và tuyển dụng" />
          </div>
          <button class="btn-only-icon flex items-center justify-center px-3 py-2 rounded-md">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <button class="btn-only-icon flex items-center justify-center px-3 py-2 rounded-md">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
          <button class="btn-only-icon flex items-center justify-center px-3 py-2 rounded-md">
            <i class="fa-regular fa-chart-bar"></i>
          </button>
          <button class="btn-only-icon flex items-center justify-center px-3 py-2 rounded-md">
            <i class="fa-solid fa-gear"></i>
          </button>
        </div>
      </div>

      <!-- table -->
      <div class="table mt-5">
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th style="width: 48px">
                  <input type="checkbox" id="selectAll" />
                </th>
                <th></th>
                <th>Họ và tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Chiến dịch tuyển dụng</th>
                <th>Vị trí tuyển dụng</th>
                <th>Tin tuyển dụng</th>
                <th>Vòng tuyển dụng</th>
                <th>Đánh giá</th>
                <th>Ngày ứng tuyển</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <!-- table footer -->
        <div class="footer px-5 pt-5">
          <div class="footer-left">Tổng: <span>5381</span> bản ghi</div>
          <div class="footer-right">
            <div class="page-size">
              <span>Số bản ghi/trang</span>
              <select>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
            </div>
            <div class="page-size">
              <span>1 - 25 bản ghi</span>
            </div>
            <div class="pagination">
              <button disabled>
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              <button><i class="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.content {
  width: 80%;
  flex: 1;
  background: #ecebf0;
  transition: all 0.3s ease;
}

.content.collapsed {
  /* width: 100%; */
  background: #ecebf0;
  transition: all 0.3s ease;
}

.data-section {
  background: #fff;
}

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

/* table */
.table-container {
  flex: 1;
  overflow-y: auto;
  overflow-x: auto;
  background: white;
  max-height: calc(100vh - 310px);
  height: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
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

/* Avatar */
.avatar-cell {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  flex-shrink: 0;
}

.avatar.blue {
  background: var(--btn-primary);
}

.avatar.yellow {
  background: #fbbf24;
}

.avatar.green {
  background: #4ade80;
}

.avatar.pink {
  background: #f472b6;
}

.avatar.orange {
  background: #fb923c;
}

.user-info {
  display: flex;
  gap: 4px;
}

.user-name {
  font-weight: 500;
  color: var(--text-color);
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
}

.user-role {
  font-size: 12px;
  color: #10b981;
  display: flex;
  align-items: center;
  gap: 4px;
}

.badge {
  background: var(--btn-primary);
  color: white;
  padding: 4px 12px;
  font-weight: 500;
}

.status {
  display: inline-block;
  border-radius: 16px;
  font-weight: 500;
}

.rating {
  display: flex;
  gap: 2px;
}

.star {
  width: 16px;
  height: 16px;
  color: var(--border-secondary);
}

.star.filled {
  color: #fbbf24;
  fill: #fbbf24;
}

input[type='checkbox'] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

/* footer table*/
.table .footer {
  background: white;
  border-top: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-left {
  font-size: 14px;
  color: var(--text-color);
}

.footer-left span {
  font-weight: 600;
  color: var(--text-color);
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.page-size {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-color);
}

.page-size select {
  padding: 4px 8px;
  border: 1px solid var(--border-secondary);
  border-radius: 4px;
  font-size: 14px;
}

.pagination {
  display: flex;
  gap: 8px;
}

.pagination button {
  padding: 4px 12px;
  border: 1px solid var(--border-secondary);
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.pagination button:hover {
  background: #f9fafb;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
