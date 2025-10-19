<script setup>
//#region Props
defineProps({
  to: String,
  isOpen: Boolean,
})
//#endregion Props
</script>
<template>
  <Teleport :to="to">
    <div v-if="isOpen" class="modal">
      <div class="overlay">
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style>
.modal {
  position: relative;
  display: flex;
  margin: auto;
}

.modal .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
