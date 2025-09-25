<template>
  <nav
    class="navbar navbar-expand-lg custom-navbar shadow-sm"
    :class="{ scrolled: isScrolled }"
  >
    <div class="container">
      <!-- Mobile toggle -->
      <button
        class="navbar-toggler me-auto"
        type="button"
        @click="isNavCollapsed = !isNavCollapsed"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div :class="['collapse navbar-collapse', { show: !isNavCollapsed }]">
        <ul class="navbar-nav w-100">
          <li class="nav-item" v-for="link in mainLinks" :key="link.key">
            <router-link
              class="nav-link px-2"
              :to="link.to"
              @click="closeNav"
              >{{ $t(link.key) }}</router-link
            >
          </li>

     <!-- Categories Dropdown -->
<li
  class="nav-item dropdown"
  @mouseenter="openDropdown('categories')"
  @mouseleave="closeDropdown('categories')"
>
  <router-link
    class="nav-link dropdown-toggle px-2"
    :to="'/categories'"
    @click.prevent="toggleDropdown('categories')"
  >
    {{ $t("categories") }}
  </router-link>
  <ul
    class="dropdown-menu category-dropdown"
    :class="{ show: dropdowns.categories }"
  >
    <li v-for="item in categories" :key="item.name">
      <router-link
        class="dropdown-item"
        :to="item.to"
        @click="closeNav"
        >{{ item.name }}</router-link
      >
    </li>
  </ul>
</li>

          <!-- Pages Dropdown -->
          <li
            class="nav-item dropdown"
            @mouseenter="openDropdown('pages')"
            @mouseleave="closeDropdown('pages')"
          >
            <a
              class="nav-link dropdown-toggle px-2"
              href="#"
              @click.prevent="toggleDropdown('pages')"
            >
              {{ $t("pages") }}
            </a>
            <ul
              class="dropdown-menu category-dropdown"
              :class="{ show: dropdowns.pages }"
            >
              <li v-for="item in pages" :key="item.name">
                <router-link
                  class="dropdown-item"
                  :to="item.to"
                  @click="closeNav"
                  >{{ item.name }}</router-link
                >
              </li>
            </ul>
          </li>
        </ul>

        <!-- Right side -->
        <div class="d-flex align-items-center ms-auto mt-3 mt-lg-0">
          <!-- Language switch -->
          <select
            v-model="$i18n.locale"
            class="form-select form-select-sm me-3"
            style="width: auto"
          >
            <option value="az">AZ</option>
            <option value="en">EN</option>
          </select>

          <!-- User actions -->
          <template v-if="!user">
            <button class="btn btn-primary btn-sm me-2" @click="openRegister">
              {{ $t("register") }}
            </button>
            <button class="btn btn-outline-primary btn-sm" @click="openLogin">
              {{ $t("login") }}
            </button>
          </template>

          <template v-else>
            <span class="fw-semibold me-2">
              {{ $t("Salam") }} {{ user.name }}
            </span>
            <button class="btn btn-danger btn-sm" @click="logout">
              Logout
            </button>
          </template>
        </div>
      </div>
    </div>

    <!-- Modal (login/register) -->
    <div
      class="modal fade"
      :class="{ show: showModal }"
      :style="{ display: showModal ? 'block' : 'none' }"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ isRegister ? $t("register") : $t("login") }}
            </h5>
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
                {{ isRegister ? $t("register") : $t("login") }}
              </button>
            </form>

            <!-- Modern alert -->
            <div
              v-if="errorMessage"
              class="alert alert-danger mt-3"
              role="alert"
            >
              {{ errorMessage }}
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <span>
              {{
                isRegister
                  ? "Already have an account?"
                  : "Don't have an account?"
              }}
              <a href="#" @click.prevent="toggleForm">{{
                isRegister ? $t("login") : $t("register")
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
import { reactive, ref, onMounted, onUnmounted } from "vue";

const isNavCollapsed = ref(true);
const showModal = ref(false);
const isRegister = ref(true);
const user = ref(null);
const errorMessage = ref("");
const isScrolled = ref(false);

const form = reactive({ name: "", email: "", password: "" });

const mainLinks = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "blog", to: "/all-posts" },
  { key: "contact", to: "/contact" },
];

const categories = [
  { name: "Design", to: "/category/design" },
  { name: "Drupal", to: "/category/drupal" },
  { name: "Javascript", to: "/category/javascript" },
];

const pages = [
  { name: "FAQ", to: "/faq" },
  { name: "Privacy Policy", to: "/privacy" },
  { name: "Terms & Conditions", to: "/terms" },
];

const dropdowns = reactive({ categories: false, pages: false });

function toggleDropdown(key) {
  dropdowns[key] = !dropdowns[key];
}
function openDropdown(key) {
  dropdowns[key] = true;
}
function closeDropdown(key) {
  dropdowns[key] = false;
}
function closeNav() {
  isNavCollapsed.value = true;
}

function openRegister() {
  isRegister.value = true;
  resetForm();
  showModal.value = true;
}
function openLogin() {
  isRegister.value = false;
  resetForm();
  showModal.value = true;
}
function toggleForm() {
  isRegister.value = !isRegister.value;
  resetForm();
  errorMessage.value = "";
}
function resetForm() {
  form.name = form.email = form.password = "";
  errorMessage.value = "";
}
function closeModal() {
  showModal.value = false;
  errorMessage.value = "";
}

function submitForm() {
  if (isRegister.value) {
    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
    };
    localStorage.setItem("user", JSON.stringify(newUser));
    alert("Qeydiyyat tamamlandı! İndi login olun.");
    toggleForm();
  } else {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) {
      errorMessage.value = "Əvvəlcə register olun!";
      return;
    }
    if (
      form.email === savedUser.email &&
      form.password === savedUser.password
    ) {
      user.value = { name: savedUser.name };
      closeModal();
    } else {
      errorMessage.value = "Email və ya şifrə səhvdir!";
    }
  }
}

function logout() {
  user.value = null;
}

onMounted(() => {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  if (savedUser) {
    user.value = { name: savedUser.name };
  }
  // scroll effekti üçün
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  isScrolled.value = window.scrollY > 50;
}
</script>

<style scoped>
.custom-navbar {
  position: sticky;
  top: 0;
  z-index: 1050;
  background: transparent;
  padding: 0.8rem 1rem;
  transition: all 0.3s ease;
}
.custom-navbar.scrolled {
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
}

.navbar-nav .nav-link {
  color: #333 !important;
  transition: color 0.3s;
}
.navbar-nav .nav-link:hover {
  color: #5900ff !important;
}

/* Dropdown */
.category-dropdown {
  display: none;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  min-width: 180px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 0.5rem 0;
}
.category-dropdown.show {
  display: block;
  opacity: 1;
  transform: translateY(0);
}
.category-dropdown .dropdown-item {
  padding: 0.5rem 1.2rem;
  color: #333;
  border-radius: 6px;
  transition: all 0.25s;
}
.category-dropdown .dropdown-item:hover {
  background: linear-gradient(90deg, #5900ff, #9b00ff);
  color: #fff;
}

/* Modal */
.modal-content {
  border-radius: 12px;
}
.modal-header,
.modal-footer {
  border: none;
}
.modal-footer {
  font-size: 14px;
}
.modal-backdrop {
  z-index: 1040;
}
.modal {
  z-index: 1050;
  background: rgba(0, 0, 0, 0.5);
}
.alert {
  font-size: 14px;
  border-radius: 8px;
}
</style>
