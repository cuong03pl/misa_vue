<template>
  <div class="side-bar flex flex-col justify-between">
    <ul class="flex flex-col gap-12">
      <li class="flex gap-12 items-center px-4 py-3">
        <span class="icon"><i class="fa-regular fa-file-text"></i></span>
        <span class="label text-white">Tin tuyển dụng</span>
      </li>
      <li class="flex gap-12 items-center px-4 py-3 active">
        <span class="icon"><i class="fa-regular fa-user"></i></span>
        <span class="label text-white">Ứng viên</span>
      </li>
      <li class="flex gap-12 items-center px-4 py-3">
        <span class="icon"><i class="fa-regular fa-calendar"></i></span>
        <span class="label text-white">Lịch</span>
      </li>
      <li class="flex gap-12 items-center px-4 py-3">
        <span class="icon"><i class="fa-solid fa-arrows-turn-right"></i></span>
        <span class="label text-white">Kho tiềm năng</span>
      </li>
      <li class="flex gap-12 items-center px-4 py-3">
        <span class="icon"><i class="fa-solid fa-chart-bar"></i></span>
        <span class="label text-white">Chiến dịch tuyển dụng</span>
      </li>
      <li class="flex gap-12 items-center px-4 py-3">
        <span class="icon"><i class="fa-solid fa-check-circle"></i></span>
        <span class="label text-white">Công việc</span>
      </li>
      <li class="flex gap-12 items-center px-4 py-3">
        <span class="icon"><i class="fa-regular fa-envelope"></i></span>
        <span class="label text-white">aiMarketing</span>
      </li>
      <li class="flex gap-12 items-center px-4 py-3">
        <span class="icon"><i class="fa-regular fa-comments"></i></span>
        <span class="label text-white">Trao đổi với ứng viên</span>
      </li>
      <!-- <li class="flex gap-12 items-center px-4 py-3">
            <span class="icon"><i class="fa-regular fa-clock"></i></span>
            <span class="label text-white">Báo cáo</span>
          </li> -->
    </ul>

    <button class="btn-toggle flex gap-24 items-center px-4 py-3 rounded-md text-btn text-white">
      <span class="btn-toggle-icon"><i class="fa-solid fa-chevron-left"></i></span>
      <span class="btn-toggle-text"> Thu gọn </span>
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style>
.side-bar {
  background: linear-gradient(to bottom, var(--side-bar-from), var(--side-bar-to));

  width: 250px;
  padding: 20px 8px;
  transition: all 0.3s ease;
}

.side-bar ul {
  border-radius: 8px;
}

.side-bar ul li {
  border-radius: 8px;
}

.side-bar ul li .icon {
  width: 24px;
}

.side-bar ul li .icon i {
  font-size: 24px;
  color: white;
}

.side-bar ul li .label {
  min-width: 100px;
}

.side-bar ul li:hover {
  background: var(--btn-primary);
  cursor: pointer;
}

.side-bar.collapsed {
  width: 56px;
  transition: all 0.3s ease;
}

.side-bar.collapsed .label {
  display: none;
  transition: all 0.3s ease;
}

.side-bar.collapsed ul {
  align-items: center;
}

.side-bar.collapsed ul li {
  align-items: center;
}
</style>
