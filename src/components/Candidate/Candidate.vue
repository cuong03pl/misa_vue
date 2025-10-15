<template>
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
      <tbody>
        <candidate-item />
        <candidate-item />
        <candidate-item />
        <candidate-item />
      </tbody>
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
</template>

<script>
import CandidateItem from './CandidateItem.vue'
export default {
  components: { CandidateItem },
}
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
