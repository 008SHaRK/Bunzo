<template>
  <nav
    :class="[
      'navbar navbar-expand-lg custom-navbar shadow-sm',
      { 'fixed-top scrolled': isSticky },
    ]"
  >
    <div class="container">
      <button
        class="navbar-toggler me-auto"
        type="button"
        @click="isNavCollapsed = !isNavCollapsed"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div :class="['collapse navbar-collapse', { show: !isNavCollapsed }]">
        <ul class="navbar-nav w-100">
          <li class="nav-item" v-for="link in mainLinks" :key="link.name">
            <router-link
              class="nav-link px-2"
              :to="link.to"
              @click="closeNav"
              >{{ $t(link.key) }}</router-link
            >
          </li>

          <li
            v-for="dropdown in dropdownLinks"
            :key="dropdown.name"
            class="nav-item dropdown"
            :class="{ show: dropdowns[dropdown.key] }"
            @mouseover="isDesktop && openDropdown(dropdown.key)"
            @mouseleave="isDesktop && closeDropdown(dropdown.key)"
          >
            <a
              class="nav-link dropdown-toggle px-2"
              href="#"
              @click.prevent="toggleDropdown(dropdown.key)"
            >
              {{ $t(dropdown.key) }}
            </a>
            <ul
              class="dropdown-menu category-dropdown"
              :class="{ show: dropdowns[dropdown.key] }"
            >
              <li v-for="item in dropdown.items" :key="item.name">
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

        <!-- Sağ tərəf: Dil və Login -->
        <div class="d-flex align-items-center ms-auto mt-3 mt-lg-0">
          <select
            v-model="$i18n.locale"
            class="form-select form-select-sm me-3"
            style="width: auto"
          >
            <option value="az">AZ</option>
            <option value="en">EN</option>
          </select>

          <button
            v-if="!user"
            class="btn btn-primary btn-sm"
            @click="showModal = true"
          >
            {{ $t("login") }}
          </button>
          <span v-else class="fw-semibold ms-2">Salam, {{ user.name }}</span>
        </div>
      </div>
    </div>

    <!-- Modal -->
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
import { reactive, ref, onMounted, onBeforeUnmount } from "vue";

const isNavCollapsed = ref(true);
const isSticky = ref(false);
const isDesktop = ref(window.innerWidth >= 992);

const dropdowns = reactive({ categories: false, pages: false });
const showModal = ref(false);
const isRegister = ref(false);
const user = ref(null);
const form = reactive({ name: "", email: "", password: "" });

const mainLinks = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "blog", to: "/all-posts" },
  { key: "contact", to: "/contact" },
];

const dropdownLinks = [
  {
    key: "categories",
    items: [
      { name: "Design", to: "/category/design" },
      { name: "Drupal", to: "/category/drupal" },
      { name: "Javascript", to: "/category/javascript" },
    ],
  },
  {
    key: "pages",
    items: [
      { name: "FAQ", to: "/faq" },
      { name: "Privacy Policy", to: "/privacy" },
      { name: "Terms & Conditions", to: "/terms" },
    ],
  },
];

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
  Object.keys(dropdowns).forEach((k) => (dropdowns[k] = false));
}
function toggleForm() {
  isRegister.value = !isRegister.value;
  form.name = form.email = form.password = "";
}
function closeModal() {
  showModal.value = false;
}
function submitForm() {
  user.value = { name: isRegister.value ? form.name : "User" };
  closeModal();
  toggleForm();
}

function handleScroll() {
  isSticky.value = window.scrollY > 100;
}
function handleResize() {
  isDesktop.value = window.innerWidth >= 992;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.custom-navbar {
  background: #fff;
  transition: all 0.3s ease;
}
.navbar-nav .nav-link {
  color: #333 !important;
  transition: color 0.3s;
}
.navbar-nav .nav-link:hover {
  color: #5900ff !important;
}
.category-dropdown {
  display: none;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  min-width: 160px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  background: #fff;
  padding: 0.5rem 0;
}
.category-dropdown.show {
  display: block;
  opacity: 1;
  transform: translateY(0);
}
.category-dropdown .dropdown-item {
  padding: 0.5rem 1rem;
  color: #333;
  transition: all 0.25s;
}
.category-dropdown .dropdown-item:hover {
  background: linear-gradient(90deg, #5900ff, #9b00ff);
  color: #fff;
  border-radius: 6px;
}
.scrolled {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: slideDown 0.5s ease;
}
@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
.modal-content {
  border-radius: 12px;
  overflow: hidden;
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
</style>
