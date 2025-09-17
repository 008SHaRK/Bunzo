<template>
  <transition name="fade">
    <div v-show="loading" class="loader-wrapper">
      <img src="@/assets/img/logo.png" alt="Logo" class="loader-logo" />
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    loading: { type: Boolean, default: true }
  }
};
</script>

<style scoped>
.loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
}

/* Logo ölçüsü və pulsasiya */
.loader-logo {
  width: 120px;
  height: auto;
  animation: blink 1s infinite; /* ← burada yanıb-sönmə animasiyası */
}

/* Fade animasiya */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Yanıb-sönmə (pulsasiya) */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
</style>
