<template>
  <BaseModal to="body" :isOpen="isOpen">
    <div class="modal-content rounded-md">
      <!-- head -->
      <div class="modal-head px-4 py-4 flex justify-between items-center">
        <span class="text-3xl font-bold">Thêm ứng viên</span>
        <span @click="emit('click', false)" class="icon"><i class="fa-solid fa-xmark"></i></span>
      </div>
      <div class="scroll px-4 py-4">
        <!-- upload -->
        <div class="upload flex flex-col items-center justify-center gap-12 mt-5 rounded-md">
          <p class="upload-drag">Kéo thả hoặc bấm vào để tải CV</p>
          <p class="sub">Chấp nhận jpge, png, pdf, ....</p>
        </div>
        <!-- body -->
        <div id="candidateForm" class="flex gap-12 mt-5 mb-3" data-id="">
          <div class="upload-avt flex items-center justify-center text-xs">
            <span>Ảnh</span>
          </div>
          <div class="flex-1">
            <!-- name -->
            <div class="form-input flex flex-col">
              <span class="text-primary">Họ và tên </span>
              <input type="text" name="fullname" placeholder="Nhập họ và tên" />
              <small class="error-text"></small>
            </div>
            <!-- ngày sinh, giới tính -->
            <div class="flex justify-between gap-12 mt-5">
              <div class="form-input flex flex-1 flex-col">
                <span class="text-primary">Ngày sinh </span>
                <input name="birthday" type="date" placeholder="" />
                <small class="error-text"></small>
              </div>
              <div class="select-list flex flex-1 flex-col">
                <span class="text-primary">Chọn giới tính</span>
                <select name="sex" id="sex">
                  <option value="default">Chọn giới tính</option>
                  <option value="volvo">Nam</option>
                  <option value="saab">Nữ</option>
                </select>
              </div>
            </div>
            <!-- khu vực  -->
            <div class="flex justify-between gap-12 mt-5">
              <div class="select-list flex flex-1 flex-col">
                <span class="text-primary">Khu vực</span>
                <select name="sex" id="sex">
                  <option value="default">Chọn giá trị</option>
                  <option value="volvo">Nam</option>
                  <option value="saab">Nữ</option>
                </select>
              </div>
            </div>
            <!-- SDT, Email -->
            <div class="flex justify-between gap-12 mt-5">
              <div class="form-input flex flex-1 flex-col">
                <span class="text-primary">Số điện thoại </span>
                <input name="phone" type="text" placeholder="Nhập số điện thoại" />
                <small class="error-text"></small>
              </div>
              <div class="form-input flex flex-1 flex-col">
                <span class="text-primary">Email </span>
                <input name="email" type="text" placeholder="Nhập Email" />
                <small class="error-text"></small>
              </div>
            </div>
            <!-- Địa chỉ -->
            <div class="flex justify-between gap-12 mt-5">
              <div class="form-input flex flex-1 flex-col">
                <span class="text-primary">Địa chỉ </span>
                <input name="address" type="text" placeholder="Nhập địa chỉ" />
                <small class="error-text"></small>
              </div>
            </div>
            <!-- Học vấn -->
            <div class="education mt-5">
              <span class="text-primary">HỌC VẤN</span>
              <ul class="flex flex-col gap-12">
                <li>
                  <div class="flex items-center justify-between gap-12">
                    <span>Trình độ đào tạo</span>
                    <input class="flex flex-1" type="text" placeholder="Nhập địa chỉ" />
                  </div>
                </li>
                <li>
                  <div class="flex items-center justify-between gap-12">
                    <span>Trình độ đào tạo</span>
                    <input class="flex flex-1" type="text" placeholder="Nhập địa chỉ" />
                  </div>
                </li>
                <li>
                  <div class="flex items-center justify-between gap-12">
                    <span>Trình độ đào tạo</span>
                    <input class="flex flex-1" type="text" placeholder="Nhập địa chỉ" />
                  </div>
                </li>
              </ul>
            </div>

            <!-- apply date -->
            <div class="flex justify-between gap-12 mt-5">
              <div class="form-input flex flex-1 flex-col">
                <span class="text-primary">Ngày ứng tuyển </span>
                <input type="date" placeholder="" />
              </div>
              <div class="select-list flex flex-1 flex-col">
                <span class="text-primary">Nguồn ứng viên</span>
                <select name="sex" id="sex">
                  <option value="default">Chọn giới tính</option>
                  <option value="volvo">Nam</option>
                  <option value="saab">Nữ</option>
                </select>
              </div>
            </div>
            <!-- CTV -->
            <div class="flex justify-between gap-12 mt-5">
              <div class="select-list flex flex-1 flex-col">
                <span class="text-primary">Nhân sự khai thác</span>
                <select name="sex" id="sex">
                  <option value="default">Chọn giới tính</option>
                  <option value="volvo">Nam</option>
                  <option value="saab">Nữ</option>
                </select>
              </div>
              <div class="select-list flex flex-1 flex-col">
                <span class="text-primary">Cộng tác viên</span>
                <select name="sex" id="sex">
                  <option value="default">Chọn cộng tác viên</option>
                  <option value="volvo">Nam</option>
                  <option value="saab">Nữ</option>
                </select>
              </div>
            </div>
            <!-- Nơi làm việc gần đây -->
            <div class="flex justify-between gap-12 mt-5">
              <div class="form-input flex flex-1 flex-col">
                <span class="text-primary">Nơi làm việc gần đây </span>
                <input type="text" placeholder="Nhập nơi làm việc gần đây" />
              </div>
            </div>
            <!-- Thời gian  -->
            <div class="flex justify-between gap-12 mt-5">
              <div class="form-input flex flex-1 flex-col">
                <span class="text-primary">Thời gian </span>
                <div class="flex gap-12 items-center">
                  <input type="date" placeholder="" />
                  <span>-</span>
                  <input type="date" placeholder="" />
                </div>
              </div>
            </div>

            <!-- Vị trí công việc -->
            <div class="flex justify-between gap-12 mt-5">
              <div class="form-input flex flex-1 flex-col">
                <span class="text-primary">Vị trí công việc</span>
                <input name="job_position" type="text" placeholder="Nhập vị trí công việc" />
                <small class="error-text"></small>
              </div>
            </div>
            <!-- Vị trí công việc -->
            <div class="flex justify-between gap-12 mt-5">
              <div class="form-input flex flex-1 flex-col">
                <span class="text-primary">Mô tả công việc</span>
                <textarea rows="3" type="text" placeholder="Nhập mô tả công việc"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer flex justify-end px-4 py-4 gap-12">
        <Button btnCancel @click="emit('click', false)">Hủy</Button>
        <Button btnPrimary>Lưu</Button>
      </div>
    </div>
  </BaseModal>
</template>

<script setup>
import Button from '../Button/Button.vue'
import BaseModal from './BaseModal.vue'
defineProps({
  isOpen: Boolean,
})
const emit = defineEmits(['click'])
</script>

<style>
.modal-content {
  position: absolute;
  width: 35%;
  max-height: 90vh;
  background: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
}

.upload {
  padding: 32px 24px;
  border: 1px dashed #ccc;
}

.upload-drag {
  color: var(--btn-primary);
  font-size: 14px;
}

.sub {
  color: #ccc;
  font-size: 14px;
}

.scroll {
  overflow-y: auto;
  flex: 1;
  min-height: 0;
}

.upload-avt {
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: 1px dashed #ccc;
}

.upload-avt span {
  color: #ccc;
}

.form-input,
.select-list {
  gap: 6px;
}
.form-input input {
  height: var(--input-form-height);
  padding: 4px 8px;
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  color: var(--text-color);
}

.form-input textarea {
  padding: 4px 8px;
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  color: var(--text-color);
}

.form-input input:focus {
  border: 1px solid var(--btn-primary);
  outline: none;
}

.select-list select {
  height: var(--input-form-height);
  padding: 4px 8px;
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  color: var(--text-color);
}

.education ul {
  list-style-type: disc;
}

.education ul li div input {
  height: var(--input-form-height);
  padding: 4px 8px;
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  color: var(--text-color);
}

.education ul li div input:focus {
  border: 1px solid var(--btn-primary);
}

.footer button {
  width: 50px;
}
</style>
