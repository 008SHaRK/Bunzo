<template>
  <nav
    :class="[
      'navbar navbar-expand-lg custom-navbar shadow-sm',
      { 'fixed-top scrolled': isSticky },
    ]"
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
          <li class="nav-item">
            <router-link class="nav-link px-2" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-2" to="/about">About</router-link>
          </li>

          <!-- Categories Dropdown -->
          <li
            class="nav-item dropdown"
            @mouseover="openDropdown('categories')"
            @mouseleave="closeDropdown('categories')"
          >
            <router-link class="nav-link px-2" to="/categories"
              >Categories</router-link
            >
          </li>

          <!-- Pages Dropdown -->
          <li
            class="nav-item dropdown"
            @mouseover="openDropdown('pages')"
            @mouseleave="closeDropdown('pages')"
          >
            <a class="nav-link dropdown-toggle px-2" href="#">Pages</a>
            <ul class="dropdown-menu" :class="{ show: dropdowns.pages }">
              <li>
                <router-link class="dropdown-item" to="/faq">FAQ</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/privacy"
                  >Privacy Policy</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/terms"
                  >Terms & Conditions</router-link
                >
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link class="nav-link px-2" to="/all-posts"
              >Blog</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-2" to="/contact"
              >Contact</router-link
            >
          </li>
        </ul>

        <!-- Sağ tərəf: Login -->
        <div class="d-flex align-items-center ms-auto">
          <button
            v-if="!user"
            class="btn btn-primary btn-sm"
            @click="showModal = true"
          >
            Login
          </button>
          <span v-else class="fw-semibold ms-2">Salam, {{ user.name }}</span>
        </div>
      </div>
    </div>

    <!-- Login/Register Modal -->
    <div
      class="modal fade"
      :class="{ show: showModal }"
      style="display: block"
      tabindex="-1"
      v-if="showModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ isRegister ? "Register" : "Login" }}</h5>
            <button
              type="button"
              class="btn-close"
              @click="closeModal"
            ></button>
          </div>

          <div class="modal-body">
            <form @submit.prevent="submitForm">
              <div v-if="isRegister" class="mb-3">
                <label class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.name"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="form.email"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="form.password"
                  required
                />
              </div>

              <button class="btn btn-primary w-100">
                {{ isRegister ? "Register" : "Login" }}
              </button>
            </form>
          </div>

          <div class="modal-footer justify-content-center">
            <span>
              {{
                isRegister
                  ? "Already have an account?"
                  : "Don't have an account?"
              }}
              <a href="#" @click.prevent="toggleForm">{{
                isRegister ? "Login" : "Register"
              }}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show" v-if="showModal"></div>
  </nav>
</template>

<script setup>
import { reactive, ref, onMounted, onBeforeUnmount } from "vue";

const isNavCollapsed = ref(true);
const isSticky = ref(false);

const dropdowns = reactive({ pages: false, categories: false });
const showModal = ref(false);
const isRegister = ref(false);
const user = ref(null);

const form = reactive({ name: "", email: "", password: "" });

function openDropdown(name) {
  dropdowns[name] = true;
}
function closeDropdown(name) {
  dropdowns[name] = false;
}

function handleScroll() {
  isSticky.value = window.scrollY > 100;
}
onMounted(() => window.addEventListener("scroll", handleScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));

function toggleForm() {
  isRegister.value = !isRegister.value;
  form.name = "";
  form.email = "";
  form.password = "";
}
function closeModal() {
  showModal.value = false;
}
function submitForm() {
  alert(`${isRegister.value ? "Registered" : "Logged in"} as: ${form.email}`);
  user.value = { name: isRegister.value ? form.name : "User" };
  closeModal();
  toggleForm(); // reset to login for next time
}
</script>

<style scoped>
/* Navbar styles */
.custom-navbar {
  background: white;
  transition: all 0.3s ease;
}
.navbar-nav .nav-link {
  color: black !important;
  transition: color 0.3s;
}
.navbar-nav .nav-link:hover {
  color: #5900ff !important;
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

/* Modal styles */
.modal-content {
  border-radius: 10px;
  overflow: hidden;
}
.modal-header {
  border-bottom: none;
}
.modal-footer {
  border-top: none;
  font-size: 14px;
}
.modal-backdrop {
  z-index: 1040;
}
.modal {
  z-index: 1050;
  background: rgba(0, 0, 0, 0.5);
}
</style>
