<template>
  <div>
    <!-- Tabs -->
    <div class="tabs-container mb-4">
      <div class="tabs">
        <RouterLink
          to="/"
          class="tab-link"
          :class="{ active: $route.path === '/' }"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/contact"
          class="tab-link"
          :class="{ active: $route.path === '/contact', 'contact-active': $route.path === '/contact' }"
        >
          Contact
          <span v-if="$route.path === '/contact'" class="dot">●</span>
        </RouterLink>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="container my-5">
      <div class="row g-5">
        <!-- Left: Form -->
        <div class="col-md-6">
          <h2 class="mb-4 fw-bold">Get in Touch</h2>
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="mb-3">
              <label for="name" class="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="form-control shadow-sm"
                placeholder="Enter your name"
                required
              />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="form-control shadow-sm"
                placeholder="Enter your email"
                required
              />
            </div>

            <div class="mb-3">
              <label for="phone" class="form-label">Phone</label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                class="form-control shadow-sm"
                placeholder="Enter your phone"
              />
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                class="form-control shadow-sm"
                rows="5"
                placeholder="Write your message"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary send-btn">
              Send Message
              <i class="bi bi-arrow-right ms-2"></i>
            </button>
          </form>
        </div>

        <!-- Right: Map -->
        <div class="col-md-6">
          <div class="map-wrapper ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8967022341185!2d-73.98542868459377!3d40.74881797932747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18a847eb%3A0x2a0e4b51e1b06e7c!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1694393823958!5m2!1sen!2sus"
              width="100%"
              height="450"
              style="border:0; border-radius:12px;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import { reactive } from "vue";

const $route = useRoute();

const form = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

function submitForm() {
  alert(`Thanks, ${form.name}! Your message has been sent.`);
  form.name = "";
  form.email = "";
  form.phone = "";
  form.message = "";
}
</script>

<style scoped>
/* Tabs */
.tabs-container {
  display: flex;
  justify-content: center;
  background: #f4f2fb;
  padding: 12px 24px;
  border-radius: 8px;
}
.tabs {
  display: flex;
  gap: 24px;
}
.tab-link {
  cursor: pointer;
  color: #555;
  font-size: 16px;
  transition: color 0.3s, font-weight 0.3s;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
}
.tab-link:hover {
  color: #000;
}
.tab-link.active {
  font-weight: 600;
  color: #000;
}
.tab-link.contact-active {
  font-weight: 600;
  color: #000000;
}
.dot {
  font-size: 12px;
  line-height: 1;
  color: #9b30ff;
}

/* Contact form */
.contact-form .form-label {
  font-weight: 500;
}
.form-control {
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 12px 15px;
  background-color: rgb(244, 244, 244);
  transition: all 0.3s;
}
.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
  outline: none;
}
.shadow-sm {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.send-btn {
  border-radius: 10px;
  padding: 12px 25px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  background-color: #007bff;
  color: #fff;
  border: none;
  transition: background-color 0.3s, transform 0.2s;
}
.send-btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}
.send-btn i {
  font-size: 16px;
}

/* Map */
.map-wrapper {
  overflow: hidden;
   padding-top: 95px;
}
.map-wrapper iframe {
  width: 100%;
  height: 100%;
  min-height: 450px;
 
}

/* Responsive */
@media (max-width: 768px) {
  .map-wrapper iframe {
    min-height: 300px;
    margin-top: 20px;
  }
}
</style>
