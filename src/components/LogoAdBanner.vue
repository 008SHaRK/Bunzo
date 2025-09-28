<template>
  <section class="logo-banner container py-3">
    <div class="row align-items-center">
      <!-- Logo -->
      <div class="col-md-4 d-flex align-items-center mb-3 mb-md-0">
        <a href="/" class="d-flex align-items-center text-decoration-none">
          <RouterLink
            to="/"
            class="tab-link"
            :class="{ active: $route.path === '/' }"
          >
            <img
              src="@/assets/img/logo.png"
              alt="Logo"
              class="me-2"
              style="height: 50px"
            />
          </RouterLink>
        </a>
      </div>

      <!-- Banner -->
      <div class="col-md-8 text-center text-md-end">
        <a href="#" class="banner-wrapper d-inline-block">
          <img
            src="@/assets/img/Add-banner.jpg"
            alt="Advertisement"
            class="banner-hover img-fluid rounded-3 shadow-sm"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* Banner konteyneri (zoom effekti üçün) */
.banner-wrapper {
  display: inline-block;
  overflow: hidden;
  border-radius: 12px; /* şəkil radiusu saxlasın */
}

.banner-hover {
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
}

.banner-hover:hover {
  transform: scale(1.1); /* içdən böyüyür */
}
</style>
