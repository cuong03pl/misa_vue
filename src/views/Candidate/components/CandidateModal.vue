<template>
  <BaseModal to="body" :isOpen="isOpen">
    <form @submit="onSubmit" class="modal-content rounded-md">
      <!-- head -->
      <div class="modal-head px-4 py-4 flex justify-between items-center">
        <slot name="head">
          <span class="text-2xl font-bold">{{
            mode !== 'edit'
              ? t('common.button.add', { msg: 'ứng viên' })
              : t('common.button.edit', { msg: 'ứng viên' })
          }}</span>
          <span @click="emit('update:isOpen', false)" class="icon"
            ><i class="fa-solid fa-xmark"></i
          ></span>
        </slot>
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
                name="fullname"
                v-bind="fullnameAttrs"
                v-model="fullname"
                :error_message="errors.fullname"
              />
            </div>
            <!-- ngày sinh, giới tính -->
            <div class="flex justify-between gap-12 mt-5">
              <div class="form-input flex flex-1 flex-col">
                <TextInput label="Ngày sinh" type="date" />
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
                  name="phone"
                  v-model="phone"
                  v-bind="phoneAttrs"
                  :error_message="errors.phone"
                />
              </div>
              <div class="form-input flex flex-1 flex-col">
                <TextInput
                  name="email"
                  :isRequired="true"
                  label="Email"
                  placeholder="Nhập Email"
                  type="text"
                  v-model="email"
                  v-bind="emailAttrs"
                  :error_message="errors.email"
                />
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
                <TextInput label="Ngày ứng tuyển" type="date" />
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
                <TextInput
                  label="Nơi làm việc gần đây"
                  placeholder="Nhập nơi làm việc gần đây"
                  type="text"
                />
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
                  name="position"
                  v-model="position"
                  v-bind="positionAttrs"
                  :error_message="errors.position"
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
        <slot name="footer">
          <BaseButton btnCancel medium @click="emit('update:isOpen', false)">{{
            t('common.button.cancel')
          }}</BaseButton>
          <BaseButton type="submit" btnPrimary medium>{{ t('common.button.save') }}</BaseButton>
        </slot>
      </div>
    </form>
  </BaseModal>
</template>

<script setup>
import { candidateSchema } from '@/schemas/candidate.schema'
import SelectList from '../../../components/FormField/SelectList.vue'
import TextInput from '../../../components/FormField/TextInput.vue'
import BaseModal from '../../../components/Modal/BaseModal.vue'
import { useForm } from 'vee-validate'
import { watch } from 'vue'
import BaseButton from '../../../components/BaseButton/BaseButton.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps({
  isOpen: Boolean,
  candidate: Object,
  mode: String,
})

watch(
  () => props.candidate,
  (newVal) => {
    fullname.value = newVal?.CandidateName || ''
    phone.value = newVal?.Mobile || ''
    email.value = newVal?.Email || ''
    position.value = newVal?.JobPositionName || ''
  },
)

const emit = defineEmits(['update:isOpen', 'save'])

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: candidateSchema(t),
})

const [fullname, fullnameAttrs] = defineField('fullname')
const [phone, phoneAttrs] = defineField('phone')
const [email, emailAttrs] = defineField('email')
const [position, positionAttrs] = defineField('position')

const onSubmit = handleSubmit((values) => {
  emit('save', values)
})
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
