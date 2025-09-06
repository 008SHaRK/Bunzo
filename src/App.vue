<template>
  <Topbar />
    <LogoAndBanner />
    <Navbar />
  <router-view />
</template>

<script setup>
import Topbar from "./components/Topbar.vue";
import LogoAndBanner from "./components/LogoAdBanner.vue";
import Navbar from "./components/Navbar.vue";

</script>
