<template>
  <div>
    <!-- Tabs -->
    <div class="tabs-container">
      <div class="tabs">
        <RouterLink
          to="/"
          class="tab-link"
          :class="{ active: $route.path === '/' }"
        >
          {{ $t("home") }}
        </RouterLink>

        <RouterLink
          to="/privacy"
          class="tab-link"
          :class="{
            active: $route.path === '/privacy',
            'blog-active': $route.path === '/privacy',
          }"
        >
          {{ $t("privacy_policy") }}
          <span v-if="$route.path === '/privacy'" class="dot">●</span>
        </RouterLink>
      </div>
    </div>

    <section class="privacy container">
      <h1 class="title">{{ $t("who_we_are") }}</h1>
      <p class="muted">{{ $t("website_address") }}</p>

      <div v-if="loading" class="loading">{{ $t("loading_sections") }}</div>

      <article
        v-for="(section, key) in sectionsOrder"
        :key="key"
        class="section"
      >
        <h2 class="section-title">{{ sections[section].title }}</h2>
        <p class="section-body" v-html="sections[section].body"></p>
      </article>

      <hr />
      <p class="note" v-html="$t('dynamic_content_note')"></p>
    </section>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

export default {
  name: "PrivacySections",
  components: { RouterLink },
  props: {
    endpoint: { type: String, default: "" },
    placeholders: { type: Object, default: () => ({}) },
  },
  setup(props) {
    const { t } = useI18n();
    const $route = useRoute();

    const loading = ref(false);
    const sectionsOrder = ["embedded", "retention", "rights", "transfers"];
    const sections = reactive({
      embedded: {
        title: t("embedded_title"),
        body: props.placeholders.embedded || t("embedded_body"),
      },
      retention: {
        title: t("retention_title"),
        body: props.placeholders.retention || t("retention_body"),
      },
      rights: {
        title: t("rights_title"),
        body: props.placeholders.rights || t("rights_body"),
      },
      transfers: {
        title: t("transfers_title"),
        body: props.placeholders.transfers || t("transfers_body"),
      },
    });

    const fetchFromBackend = async () => {
      if (!props.endpoint) return;
      loading.value = true;
      try {
        const res = await fetch(props.endpoint, {
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("Network response not ok");
        const json = await res.json();
        for (const k of sectionsOrder) {
          if (json[k]) sections[k].body = json[k];
        }
      } catch (err) {
        console.error(err);
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchFromBackend);

    return { t, $route, loading, sections, sectionsOrder };
  },
};
</script>

<style scoped>
.tabs-container {
  display: flex;
  justify-content: center;
  background: #f4f2fb;
  padding: 10px 20px;
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
.tab-link.active,
.tab-link.blog-active {
  font-weight: 600;
  color: #000;
}
.dot {
  font-size: 12px;
  line-height: 1;
  color: #9b30ff;
}
.container {
  max-width: 980px;
  padding: 32px 20px;
  font-family: "Inter", Arial, sans-serif;
}
.title {
  font-size: 28px;
  margin: 0 0 8px 0;
  font-weight: 700;
}
.muted {
  color: #666;
  margin-bottom: 24px;
  font-size: 14px;
}
.section {
  margin: 24px 0;
}
.section-title {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 600;
}
.section-body {
  color: #444;
  line-height: 1.6;
  font-size: 14px;
}
.loading {
  color: #888;
  margin-bottom: 14px;
  font-size: 13px;
}
.note {
  margin-top: 28px;
  color: #777;
  font-size: 13px;
}
code {
  background: #f4f4f4;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 13px;
}
</style>
