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
              <router-link class="nav-link px-2" :to="link.to" @click="closeNav">
                {{ $t(link.key) }}
              </router-link>
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
                <li v-for="item in categories" :key="item.key">
                  <router-link
                    class="dropdown-item"
                    :to="item.to"
                    @click="closeNav"
                  >
                    {{ $t(item.key) }}
                  </router-link>
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
                <li v-for="item in pages" :key="item.key">
                  <router-link
                    class="dropdown-item"
                    :to="item.to"
                    @click="closeNav"
                  >
                    {{ $t(item.key) }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>

          <!-- Right side -->
          <div class="d-flex align-items-center ms-auto mt-3 mt-lg-0">
            <select
              v-model="$i18n.locale"
              class="form-select form-select-sm me-3"
              style="width: auto"
            >
              <option value="az">AZ</option>
              <option value="en">EN</option>
            </select>

            <template v-if="!user">
              <button class="btn btn-primary btn-sm me-2" @click="openRegister">
                {{ $t("register") }}
              </button>
              <button class="btn btn-outline-primary btn-sm" @click="openLogin">
                {{ $t("login") }}
              </button>
            </template>

            <template v-else>
              <li class="nav-item dropdown list-unstyled">
                <a
                  class="nav-link dropdown-toggle d-flex align-items-center fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <i class="bi bi-person-circle me-2" style="font-size: 18px"></i
                  >{{ user.name }}
                </a>
                <ul class="dropdown-menu dropdown-menu-end shadow rounded-3">
                  <li>
                    <a class="dropdown-item text-danger" href="#" @click="logout">
                      <i class="bi bi-box-arrow-right me-2"></i>{{ $t("logout") }}
                    </a>
                  </li>
                </ul>
              </li>
            </template>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <transition name="fade-slide">
        <div
          v-if="showModal"
          class="modal d-block custom-backdrop"
          tabindex="-1"
          @click.self="closeModal"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 shadow-lg rounded-4">
              <div class="modal-header border-0">
                <h5 class="modal-title fw-bold">
                  {{
                    isRegister
                      ? $t("register")
                      : forgotMode
                      ? $t("newPassword")
                      : $t("login")
                  }}
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
                    <label class="form-label">{{ $t("name") }}</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.name"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">{{ $t("email") }}</label>
                    <input
                      type="email"
                      class="form-control"
                      v-model="form.email"
                      required
                    />
                  </div>
                  <div v-if="!forgotMode" class="mb-3 position-relative">
                    <label class="form-label">{{ $t("password") }}</label>
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      class="form-control pe-5"
                      v-model="form.password"
                      required
                    />
                    <i
                      class="bi"
                      :class="showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'"
                      @click="showPassword = !showPassword"
                      style="
                        position: absolute;
                        right: 10px;
                        top: 38px;
                        cursor: pointer;
                        font-size: 18px;
                        color: #666;
                      "
                    ></i>
                  </div>
                  <div
                    v-if="isRegister || forgotMode"
                    class="mb-3 position-relative"
                  >
                    <label class="form-label">{{
                      isRegister ? $t("confirmPassword") : $t("newPassword")
                    }}</label>
                    <input
                      :type="showConfirmPassword ? 'text' : 'password'"
                      class="form-control pe-5"
                      v-model="form.confirmPassword"
                      required
                    />
                    <i
                      class="bi"
                      :class="
                        showConfirmPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'
                      "
                      @click="showConfirmPassword = !showConfirmPassword"
                      style="
                        position: absolute;
                        right: 10px;
                        top: 38px;
                        cursor: pointer;
                        font-size: 18px;
                        color: #666;
                      "
                    ></i>
                  </div>
                  <div v-if="!isRegister && !forgotMode" class="text-end mb-3">
                    <a
                      href="#"
                      @click.prevent="forgotPassword"
                      class="small fw-semibold text-primary"
                      >{{ $t("forgotPassword") }}</a
                    >
                  </div>
                  <button class="btn btn-primary w-100 rounded-">
                    {{
                      isRegister
                        ? $t("register")
                        : forgotMode
                        ? $t("newPassword")
                        : $t("login")
                    }}
                  </button>
                </form>
                <div
                  v-if="errorMessage"
                  class="alert mt-3"
                  :class="
                    errorType === 'success' ? 'alert-success' : 'alert-danger'
                  "
                  role="alert"
                >
                  {{ errorMessage }}
                </div>
              </div>
              <div class="modal-footer justify-content-center border-0">
                <span
                  >{{
                    isRegister ? $t("alreadyHaveAccount") : $t("dontHaveAccount")
                  }}
                  <a href="#" @click.prevent="toggleForm" class="fw-semibold">{{
                    isRegister ? $t("login") : $t("register")
                  }}</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </nav>
  </template>

  <script setup>
  import { ref, reactive, onMounted, onUnmounted, watch } from "vue";
  import { useI18n, createI18n } from "vue-i18n";

  // İ18n mesajları
  const messages = {
    az: {
      home: "Ana səhifə",
      about: "Haqqımızda",
      blog: "Bloq",
      contact: "Əlaqə",
      categories: "Kateqoriyalar",
      pages: "Səhifələr",
      login: "Daxil ol",
      logout: "Çıxış",
      register: "Qeydiyyat",
      alreadyHaveAccount: "Artıq hesabınız var?",
      dontHaveAccount: "Hesabınız yoxdur?",
      name: "Ad",
      email: "E-poçt",
      password: "Şifrə",
      confirmPassword: "Şifrəni təsdiqlə",
      newPassword: "Yeni şifrə",
      forgotPassword: "Şifrəni unutdum",
    },
    en: {
      home: "Home",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      categories: "Categories",
      pages: "Pages",
      login: "Login",
      logout: "Logout",
      register: "Register",
      alreadyHaveAccount: "Already have an account?",
      dontHaveAccount: "Don't have an account?",
      name: "Name",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      newPassword: "New Password",
      forgotPassword: "Forgot Password",
    },
  };

  const i18n = createI18n({
    legacy: false,
    locale: "az",
    fallbackLocale: "en",
    messages,
  });
  const { t } = useI18n({ useScope: "global" });

  // State
  const isNavCollapsed = ref(true);
  const showModal = ref(false);
  const isRegister = ref(true);
  const forgotMode = ref(false);
  const user = ref(null);
  const isScrolled = ref(false);
  const showPassword = ref(false);
  const showConfirmPassword = ref(false);

  const form = reactive({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const errorMessage = ref("");
  const errorType = ref("danger");

  const mainLinks = [
    { key: "home", to: "/" },
    { key: "about", to: "/about" },
    { key: "blog", to: "/all-posts" },
    { key: "contact", to: "/contact" },
  ];

  const categories = [
    { key: "design", to: "/category/design" },
    { key: "drupal", to: "/category/drupal" },
    { key: "javascript", to: "/category/javascript" },
  ];

  const pages = [
    { key: "faq", to: "/faq" },
    { key: "privacy", to: "/privacy" },
    { key: "terms", to: "/terms" },
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
    forgotMode.value = false;
    resetForm();
    showModal.value = true;
  }
  function openLogin() {
    isRegister.value = false;
    forgotMode.value = false;
    resetForm();
    showModal.value = true;
  }
  function toggleForm() {
    isRegister.value = !isRegister.value;
    forgotMode.value = false;
    resetForm();
    errorMessage.value = "";
  }
  function resetForm() {
    form.name = form.email = form.password = form.confirmPassword = "";
    errorMessage.value = "";
    errorType.value = "danger";
  }
  function closeModal() {
    showModal.value = false;
    errorMessage.value = "";
  }

  function submitForm() {
    if (isRegister.value) {
      if (form.password !== form.confirmPassword) {
        errorMessage.value = "❌ Şifrələr uyğun gəlmir!";
        errorType.value = "danger";
        return;
      }
      const newUser = {
        name: form.name,
        email: form.email,
        password: form.password,
      };
      localStorage.setItem("user", JSON.stringify(newUser));
      errorMessage.value = "✅ Qeydiyyat uğurlu oldu!";
      errorType.value = "success";
      user.value = newUser;
    } else {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (
        !savedUser ||
        savedUser.email !== form.email ||
        savedUser.password !== form.password
      ) {
        errorMessage.value = "❌ Yanlış e-poçt və ya şifrə!";
        errorType.value = "danger";
        return;
      }
      user.value = savedUser;
      errorMessage.value = "✅ Daxil oldunuz!";
      errorType.value = "success";
    }
    setTimeout(() => closeModal(), 1200);
  }

  function forgotPassword() {
    forgotMode.value = true;
    resetForm();
  }
  function logout() {
    user.value = null;
    localStorage.removeItem("user");
  }

  onMounted(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) user.value = savedUser;

    window.addEventListener("scroll", () => {
      isScrolled.value = window.scrollY > 20;
    });
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", () => {});
  });

  // Scroll-u modal açılınca bağlamaq
  watch(showModal, (newVal) => {
    document.body.style.overflow = newVal ? "hidden" : "";
  });
  </script>

<style scoped>
.navbar.scrolled {
  background: #fff;
  transition: 0.3s;
}
.custom-navbar {
  position: sticky;
  top: 0;
  z-index: 1050;
  background: transparent;
  padding: 0.1rem 1rem;
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
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.category-dropdown {
  min-width: 200px;
}
.btn-sm {
  white-space: nowrap;
  min-width: 80px;
  text-align: center;
}

/* Modal arxa fonu */
.custom-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1050;
}
</style>
