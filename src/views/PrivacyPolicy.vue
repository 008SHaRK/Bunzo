<template>
    <!-- Tabs -->
    <div class="tabs-container">
      <div class="tabs">
        <RouterLink
          to="/"
          class="tab-link"
          :class="{ active: $route.path === '/' }"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/privacy"
          class="tab-link"
          :class="{
            active: $route.path === '/privacy',
            'blog-active': $route.path === '/privacy',
          }"
        >
          Privacy Policy
          <span v-if="$route.path === '/privacy'" class="dot">●</span>
        </RouterLink>
      </div>
    </div>
  <section class="privacy container">
    <h1 class="title">Who we are ?</h1>
    <p class="muted">Our website address is: http://hashthemes.com</p>

    <div v-if="loading" class="loading">Loading additional sections…</div>

    <article v-for="(section, key) in sectionsOrder" :key="key" class="section">
      <h2 class="section-title">{{ sections[section].title }}</h2>
      <p class="section-body" v-html="sections[section].body"></p>
    </article>

    <hr />

    <p class="note">This content is dynamic: pass a backend endpoint via the <code>endpoint</code> prop
      that returns JSON with keys <code>embedded</code>, <code>retention</code>, <code>rights</code>, <code>transfers</code>. 
      If the backend is unavailable, placeholder lorem text is shown.</p>
  </section>
</template>

<script>
import { RouterLink, useRoute } from "vue-router";


const $route = useRoute();
export default {
  name: 'PrivacySections',
  props: {
    endpoint: {
      type: String,
      default: ''
    },
    placeholders: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      loading: false,
      sections: {
        embedded: {
          title: 'Embedded content from other websites',
          body: this.placeholders.embedded || `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Embedded content (e.g. videos, maps) from other websites behaves as if the visitor has visited the other website.`
        },
        retention: {
          title: 'How long we retain your data',
          body: this.placeholders.retention || `We retain personal data only for as long as necessary to provide services, comply with legal obligations, resolve disputes and enforce our agreements. Lorem ipsum dolor sit amet, consectetur.`
        },
        rights: {
          title: 'What rights you have over your data',
          body: this.placeholders.rights || `You have the right to access, correct, export, and delete your personal data. You can object to or restrict processing in certain circumstances. To exercise these rights, contact us.`
        },
        transfers: {
          title: 'Where we send your data',
          body: this.placeholders.transfers || `Your data may be transferred to and stored at a destination outside your country. We take measures to ensure appropriate safeguards are in place.`
        }
      },
      sectionsOrder: ['embedded', 'retention', 'rights', 'transfers']
    };
  },
  mounted() {
    if (this.endpoint) {
      this.fetchFromBackend();
    }
  },
  methods: {
    async fetchFromBackend() {
      this.loading = true;
      try {
        const res = await fetch(this.endpoint, { headers: { 'Accept': 'application/json' } });
        if (!res.ok) throw new Error('Network response not ok');
        const json = await res.json();

        for (const k of this.sectionsOrder) {
          if (json[k]) {
            this.sections[k].body = json[k];
          }
        }
      } catch (err) {
        this.$emit('fetch-error', err.message || err);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
/* Tabs */
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
.container {
  max-width: 980px;
  padding: 32px 20px;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
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
code { background:#f4f4f4; padding:2px 6px; border-radius:4px; font-size: 13px; }
</style>
