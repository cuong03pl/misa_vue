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
              <TextInput
                :isRequired="true"
                label="Họ và tên"
                placeholder="Nhập họ và tên"
                type="text"
              />
            </div>
            <!-- ngày sinh, giới tính -->
            <div class="flex justify-between gap-12 mt-5">
              <div class="form-input flex flex-1 flex-col">
                <TextInput :isRequired="true" label="Ngày sinh" type="date" />
              </div>
              <div class="select-list flex flex-1 flex-col">
                <SelectList label="Chọn giới tính">
                  <option value="default">Chọn giới tính</option>
                  <option value="volvo">Nam</option>
                  <option value="saab">Nữ</option>
                </SelectList>
              </div>
            </div>
            <!-- khu vực  -->
            <div class="flex justify-between gap-12 mt-5">
              <div class="select-list flex flex-1 flex-col">
                <SelectList label="Khu vực">
                  <option value="default">Chọn giới tính</option>
                  <option value="volvo">Nam</option>
                  <option value="saab">Nữ</option>
                </SelectList>
              </div>
            </div>
            <!-- SDT, Email -->
            <div class="flex justify-between gap-12 mt-5">
              <div class="form-input flex flex-1 flex-col">
                <TextInput
                  :isRequired="true"
                  label="Số điện thoại"
                  placeholder="Nhập số điện thoại"
                  type="text"
                />
              </div>
              <div class="form-input flex flex-1 flex-col">
                <TextInput :isRequired="true" label="Email" placeholder="Nhập Email" type="text" />
              </div>
            </div>
            <!-- Địa chỉ -->
            <div class="flex justify-between gap-12 mt-5">
              <div class="form-input flex flex-1 flex-col">
                <TextInput label="Địa chỉ" placeholder="Nhập địa chỉ" type="text" />
              </div>
            </div>
            <!-- Học vấn -->
            <div class="education mt-5">
              <span class="text-primary">HỌC VẤN</span>
              <ul class="flex flex-col gap-12">
                <li>
                  <div class="flex items-center justify-between gap-12">
                    <TextInput label="Trình độ đào tạo" placeholder="Nhập địa chỉ" type="text" />
                  </div>
                </li>
                <li>
                  <div class="flex items-center justify-between gap-12">
                    <TextInput label="Trình độ đào tạo" placeholder="Nhập địa chỉ" type="text" />
                  </div>
                </li>
                <li>
                  <div class="flex items-center justify-between gap-12">
                    <TextInput label="Trình độ đào tạo" placeholder="Nhập địa chỉ" type="text" />
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
                <SelectList label="Nguồn ứng viên">
                  <option value="default">Chọn giới tính</option>
                  <option value="volvo">Nam</option>
                  <option value="saab">Nữ</option>
                </SelectList>
              </div>
            </div>
            <!-- CTV -->
            <div class="flex justify-between gap-12 mt-5">
              <div class="select-list flex flex-1 flex-col">
                <SelectList label="Nhân sự khai thác">
                  <option value="default">Chọn giới tính</option>
                  <option value="volvo">Nam</option>
                  <option value="saab">Nữ</option>
                </SelectList>
              </div>
              <div class="select-list flex flex-1 flex-col">
                <SelectList label="Cộng tác viên">
                  <option value="default">Chọn giới tính</option>
                  <option value="volvo">Nam</option>
                  <option value="saab">Nữ</option>
                </SelectList>
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
                <div class="flex justify-between gap-12">
                  <div class="flex-1">
                    <TextInput label="" type="date" />
                  </div>
                  <div class="flex-1">
                    <TextInput label="" type="date" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Vị trí công việc -->
            <div class="flex justify-between gap-12 mt-5">
              <div class="form-input flex flex-1 flex-col">
                <TextInput
                  :isRequired="true"
                  label="Vị trí công việc"
                  placeholder="Nhập vị trí công việc"
                  type="text"
                />
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
import SelectList from '../FormField/SelectList.vue'
import TextInput from '../FormField/TextInput.vue'
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
