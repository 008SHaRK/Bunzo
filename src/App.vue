<template>
  <GlobalLoader :loading="loading" />

  <div :style="{ display: loading ? 'none' : 'block' }">
    <Topbar />
    <LogoAndBanner />
    <Navbar />

    <router-view />
    <FooterSection />
    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Topbar from "./components/Topbar.vue";
import LogoAndBanner from "./components/LogoAdBanner.vue";
import Navbar from "./components/Navbar.vue";
import FooterSection from "./components/Footer.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
import GlobalLoader from "./components/GlobalLoader.vue";

const loading = ref(true);

onMounted(() => {
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    loading.value = false;
    document.body.style.overflow = 'auto';
  }, 1000);
});
</script>
