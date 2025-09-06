<template>
  <nav class="navbar navbar-expand-lg navbar-dark shadow-sm">
    <div class="container">

      <!-- Mobil toggle düyməsi -->
      <button
        class="navbar-toggler me-auto"
        type="button"
        @click="isNavCollapsed = !isNavCollapsed"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menyu -->
      <div :class="['collapse navbar-collapse', { show: !isNavCollapsed }]">
        <ul class="navbar-nav">
          <li class="nav-item"><router-link class="nav-link px-2" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link px-2" to="/about">About</router-link></li>
          <li class="nav-item"><router-link class="nav-link px-2" to="/blog">Blog</router-link></li>
          <li class="nav-item"><router-link class="nav-link px-2" to="/categories">Categories</router-link></li>

          <!-- Pages Dropdown -->
          <li
            class="nav-item dropdown"
            @mouseover="openDropdown('pages')"
            @mouseleave="closeDropdown('pages')"
          >
            <a class="nav-link dropdown-toggle px-2" href="#">Pages</a>
            <ul class="dropdown-menu" :class="{ show: dropdowns.pages }">
              <li><router-link class="dropdown-item" to="/faq">FAQ</router-link></li>
              <li><router-link class="dropdown-item" to="/privacy-policy">Privacy Policy</router-link></li>
              <li><router-link class="dropdown-item" to="/terms">Terms & Conditions</router-link></li>
            </ul>
          </li>

          <li class="nav-item"><router-link class="nav-link px-2" to="/contact">Contact</router-link></li>
        </ul>

        <!-- Login sağda -->
        <div class="d-flex align-items-center ms-auto">
          <button v-if="!user" class="btn btn-outline-dark btn-sm">Login</button>
          <span v-else class="text-light fw-semibold ms-2">Salam, {{ user.name }}</span>
        </div>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { reactive, ref } from 'vue'

const isNavCollapsed = ref(true)

const dropdowns = reactive({
  pages: false,
})

// Demo user
const user = ref(null)
// user.value = { name: 'Nazim' } // Login olduqda aktiv et

function openDropdown(name) {
  dropdowns[name] = true
}

function closeDropdown(name) {
  dropdowns[name] = false
}
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}

.navbar-dark .navbar-nav .nav-link {
  color: black;
}

.navbar-dark .navbar-nav .nav-link:hover {
  color: #5900ff;
}

.dropdown-menu {
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateY(10px);
}

.dropdown-menu.show {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

/* Menyu elementləri arası az məsafə */
.navbar-nav .nav-item + .nav-item {
  margin-left: 0.5rem;
}

/* Mobil üçün collapse */
.navbar-collapse.show {
  display: block !important;
}
</style>
