<template>
  <footer class="footer py-5">
    <div class="container">
      <div class="row">
        <!-- Logo və mətn -->
        <div class="col-md-3 mb-4">
          <div class="footer-logo mb-3">
            <img
              :src="logo"
              alt="Bunzo Logo"
              class="mb-2"
              style="width: 40px"
            />
          </div>
          <p class="footer-text">
            Lorem ipsum is simply dummy text the printing and typesetting
            industry has been the industry's standard text ever since.
          </p>
          <div class="social-icons mt-3">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-skype"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <!-- Subscribe -->
        <div class="col-md-3 mb-4">
          <h5 class="footer-title">{{ $t("subscribe_now") }}</h5>
          <form @submit.prevent="subscribe">
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Your Name"
              v-model="form.name"
            />
            <input
              type="email"
              class="form-control mb-2"
              placeholder="Your email address"
              v-model="form.email"
            />
            <button class="btn btn-subscribe w-100" type="submit">
              {{ $t("subscribe_now") }}
            </button>
          </form>
        </div>

        <!-- Company -->
        <div class="col-md-2 mb-4">
          <h5 class="footer-title"> {{ $t("company") }}</h5>
          <ul class="footer-links">
            <li><router-link to="/faq">{{ $t("faq") }}</router-link></li>
            <li><router-link to="/contact">{{ $t("careers") }}</router-link></li>
            <li><router-link to="/about">{{ $t("about_us") }}</router-link></li>
            <li><router-link to="/contact">{{ $t("contact_us") }}</router-link></li>
            <li><router-link to="/all-posts">{{ $t("blog") }}</router-link></li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div class="col-md-2 mb-4">
          <h5 class="footer-title"> {{ $t("quick_links") }}</h5>
          <ul class="footer-links">
            <li><router-link to="/about">{{ $t("discussion") }}</router-link></li>
            <li><router-link to="/contact">{{ $t("support") }}</router-link></li>
            <li><router-link to="/privacy">{{ $t("privacy_policy") }}</router-link></li>
            <li><router-link to="/contact">{{ $t("customer_support") }}</router-link></li>
            <li><router-link to="/terms">{{ $t("terms_conditions") }}</router-link></li>
          </ul>
        </div>

        <!-- Category -->
        <div class="col-md-2 mb-4">
          <h5 class="footer-title"> {{ $t("categories") }}</h5>
          <ul class="footer-links">
            <li><router-link to="/category/design">Design</router-link></li>
            <li><router-link to="/category/drupal">Drupal</router-link></li>
            <li>
              <router-link to="/category/javascript">Javascript</router-link>
            </li>
            <li><router-link to="/category/joomla">Joomla</router-link></li>

            <li><router-link to="/category/magento">Magento</router-link></li>
            <li>
              <router-link to="/category/wordpress">Wordpress</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom text-center py-3">
      {{ $t("footer_rights") }}
    </div>
  </footer>
</template>

<script setup>
import logo from "@/assets/img/logo-white.png";
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
});

function subscribe() {
  alert(`Subscribed: ${form.name} - ${form.email}`);
  form.name = "";
  form.email = "";
}
</script>

<style scoped>
.footer {
  background: #0b0720;
  color: #fff;
}
.footer-text {
  font-size: 14px;
  color: #ddd;
}
.footer-title {
  font-weight: 600;
  margin-bottom: 15px;
}
.footer-links {
  list-style: none;
  padding: 0;
}
.footer-links li {
  margin-bottom: 8px;
}
.footer-links a {
  color: #ddd;
  text-decoration: none;
}
.footer-links a:hover {
  color: #fff;
}
.social-icons a {
  display: inline-block;
  margin-right: 8px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-radius: 6px;
  background: #fff;
  color: #000;
}
.btn-subscribe {
  background: #5f44ff;
  color: #fff;
  border-radius: 8px;
}
.footer-bottom {
  background: #09051b;
  font-size: 14px;
  color: #aaa;
}
</style>
