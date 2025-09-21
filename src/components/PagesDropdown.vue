<template>
  <li 
    class="nav-item dropdown" 
    @mouseover="isDropdownOpen = true" 
    @mouseleave="isDropdownOpen = false"
  >
    <a class="nav-link dropdown-toggle" href="#">
      Pages
    </a>
    <ul class="dropdown-menu" :class="{ show: isDropdownOpen }">
      <li><router-link class="dropdown-item" to="/faq">{{ $t("customer_support") }}</router-link></li>
      <li><router-link class="dropdown-item" to="/privacy-policy">{{ $t("privacy_policy") }}</router-link></li>
      <li><router-link class="dropdown-item" to="/terms">{{ $t("terms_conditions") }}</router-link></li>
   
    </ul>
  </li>
</template>

<script setup>
import { ref } from 'vue';
const isDropdownOpen = ref(false);
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}

.dropdown-menu {
  transition: all 0.2s ease-in-out;
  margin-top: 0.5rem;
}
</style>
