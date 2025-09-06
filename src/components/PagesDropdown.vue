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
      <li><router-link class="dropdown-item" to="/faq">FAQ</router-link></li>
      <li><router-link class="dropdown-item" to="/privacy-policy">Privacy Policy</router-link></li>
      <li><router-link class="dropdown-item" to="/terms">Terms & Conditions</router-link></li>
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
