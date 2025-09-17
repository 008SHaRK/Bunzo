<template>
  <transition name="fade">
    <button
      v-show="isVisible"
      class="scroll-to-top btn btn-primary"
      @click="scrollToTop"
    >
      ⬆
    </button>
  </transition>
</template>

<script>
export default {
  name: "ScrollToTop",
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.checkScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkScroll);
  },
  methods: {
    checkScroll() {
      this.isVisible = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  font-size: 20px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}

/* Fade animasiya */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
