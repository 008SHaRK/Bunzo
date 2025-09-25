<template>
  <div class="terms container my-5">
    <!-- Breadcrumb -->
    <div class="tabs-container mb-4">
      <div class="tabs">
        <RouterLink to="/" class="tab-link">
          {{ t("home") }}
        </RouterLink>
        <RouterLink
          to="/terms"
          class="tab-link"
          :class="{
            active: $route.path === '/terms',
            'blog-active': $route.path === '/terms',
          }"
        >
          {{ $t("terms") }}
          <span v-if="$route.path === '/terms'" class="dot">●</span>
        </RouterLink>
      </div>
    </div>

    <!-- Title -->
    <h2 class="mb-3">{{ t("terms_conditions") }}</h2>

    <!-- Intro -->
    <p class="mb-4">{{ t("terms_intro") }}</p>

    <!-- Terms list -->
    <div class="terms-list">
      <ul>
        <li v-for="(item, index) in termsList" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const $route = useRoute();
const { t, tm } = useI18n({ useScope: "global" });

// Reaktiv siyahı – dil dəyişəndə yenilənir
const termsList = computed(() => tm("terms_list"));
</script>

<style scoped>
.terms-list ul {
  padding-left: 20px;
}

.terms-list li {
  margin-bottom: 0.6rem;
  line-height: 1.6;
  font-size: 0.95rem;
}
.separator {
  margin: 0 5px;
}
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
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  transition: color 0.3s;
}
.tab-link:hover {
  color: #000;
}
.tab-link.active {
  font-weight: 600;
  color: #000;
}
.dot {
  font-size: 12px;
  color: #9b30ff;
}
h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
.terms-list ul {
  padding-left: 20px;
}
.terms-list li {
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 0.8rem;
  list-style: none; /* default nöqtə getsin */
}
</style>
