<template>
  <div class="custom-datepicker">
    <DatePicker
      ref="dp"
      v-model="date"
      showIcon
      icon="pi pi-calendar"
      placeholder="Chọn ngày"
      locale="vi"
      dateFormat="dd/mm/yy"
    >
      <template #header>
       
      </template>
      <template #footer>
        <div class="today">
          <span class="text-primary" @click="date = new Date()">Hôm nay</span>
        </div>
      </template>
    </DatePicker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DatePicker from 'primevue/datepicker'

const date = ref(null)
const dp = ref(null)


</script>

<style>
.p-datepicker-header {
  padding: 0 !important;
  border: none !important;
  padding-left: 12px !important;
}

/* Đưa title sang trái */
.p-datepicker-title {
  order: 0 !important;
  flex: 1 !important;
  text-align: left !important;
  justify-content: start !important;
  gap: 0 !important;
}

.p-datepicker-prev-button {
  order: 1 !important;
}

.p-datepicker-next-button {
  order: 2 !important;
}

.p-datepicker-panel {
  padding: 0 !important;
}

.today {
  height: 48px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #6b7280;
}
.today span {
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

span.p-datepicker-day.p-datepicker-day-selected {
  background: #50b83c !important;
}

button.p-datepicker-select-month,
button.p-datepicker-select-year {
  padding: 0 !important;
  font-weight: bold !important;
  font-size: 16px !important;
}
button.p-datepicker-select-year::before {
  content: ',\00a0';
}


</style>
