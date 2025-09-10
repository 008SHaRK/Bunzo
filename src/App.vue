<template>
  <Topbar />
    <LogoAndBanner />
    <Navbar />
     
  <router-view />
   <FooterSection />
</template>

<script setup>
import Topbar from "./components/Topbar.vue";
import LogoAndBanner from "./components/LogoAdBanner.vue";
import Navbar from "./components/Navbar.vue";
import FooterSection from "./components/Footer.vue";

</script>
