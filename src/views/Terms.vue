<template>
  <!-- Tabs -->
  <div class="tabs-container">
    <div class="tabs">
      <!-- Home düyməsi -->
      <RouterLink
        to="/"
        class="tab-link"
        :class="{ active: $route.path === '/' }"
      >
        Home
        <span v-if="$route.path === '/'" class="dot">●</span>
      </RouterLink>

      <!-- Terms düyməsi -->
      <RouterLink
        to="/terms"
        class="tab-link"
        :class="{ active: $route.path === '/terms' }"
      >
        Terms
        <span v-if="$route.path === '/terms'" class="dot">●</span>
      </RouterLink>
    </div>
  </div>
  <div class="container my-5">
    <!-- Başlıq -->
    <h2 class="fw-bold mb-4">Terms & Conditions</h2>

    <!-- İzah mətni -->
    <p class="mb-4">
      When we’re saying <strong>you</strong> in this page, we’re referring to a
      buyer. When we’re saying <strong>we</strong> in this page, we’re referring
      to the Bunzo authority.
    </p>

    <!-- Şərtlər # ilə -->
    <div class="terms-list">
      <p># If you’re under 13 years, then do not visit/use our website.</p>
      <p>
        # To be a member/user of our website, you need to be 18 years old or
        more.
      </p>
      <p># You need to provide true and correct information.</p>
      <p>
        # When you will purchase an item, then confirm that you agree to our
        terms & conditions.
      </p>
      <p>
        # Your payment will be processed through PayPal or other third-party
        websites.
      </p>
      <p>
        # Images showing in the preview is demo purpose only. We don’t provide
        image copyright. You need to replace the images included in the demo
        content.
      </p>
      <p>
        # If you face any problem to download your item after purchasing, then
        you can send an email from our contact page.
      </p>
      <p>
        # We will refund only if the product is broken. To make sure the product
        is broken or not, you need to contact us.
      </p>
      <p>
        # We have the right to change the policy, terms & Conditions, packages,
        price, features or any other things on this website.
      </p>
      <p>
        # As a customer or user of this website, you will need to agree with the
        terms & conditions.
      </p>
      <p># If we make any change in terms & conditions, we will post here.</p>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
const $route = useRoute();
</script>
<style scoped>
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
.tab-link.blog-active {
  font-weight: 600;
  color: #000;
}
.dot {
  font-size: 12px;
  line-height: 1;
  color: #9b30ff;
}
h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

p.small {
  font-size: 0.9rem;
  line-height: 1.6;
}

.terms-list p {
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 0.8rem;
}
</style>
