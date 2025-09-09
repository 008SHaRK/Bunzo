<template>
  <nav
    :class="['navbar navbar-expand-lg custom-navbar shadow-sm', { 'fixed-top scrolled': isSticky }]"
  >
    <div class="container">

      <!-- Mobil toggle -->
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

          <!-- Dropdown -->
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

        <!-- Sağ tərəf: Login -->
        <div class="d-flex align-items-center ms-auto">
          <button v-if="!user" class="btn btn-outline-dark btn-sm">Login</button>
          <span v-else class="fw-semibold ms-2">Salam, {{ user.name }}</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onBeforeUnmount, reactive, ref } from 'vue'

const isNavCollapsed = ref(true)
const isSticky = ref(false)

const dropdowns = reactive({
  pages: false,
})

// Demo user
const user = ref(null)
// user.value = { name: 'Nazim' }

function openDropdown(name) {
  dropdowns[name] = true
}

function closeDropdown(name) {
  dropdowns[name] = false
}

function handleScroll() {
  isSticky.value = window.scrollY > 100 // 100px-dən sonra fixed olsun
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Normal navbar */
.custom-navbar {
  background: white;
  transition: all 0.3s ease;
}

/* Linklər */
.navbar-nav .nav-link {
  color: black !important;
  transition: color 0.3s;
}
.navbar-nav .nav-link:hover {
  color: #5900ff !important;
}

/* Dropdown */
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

/* Scroll olanda fixed olsun */
.scrolled {
  animation: slideDown 0.7s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
