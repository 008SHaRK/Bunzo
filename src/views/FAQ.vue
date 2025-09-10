<template>
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
          to="/faq"
          class="tab-link"
          :class="{ active: $route.path === '/faq', 'faq-active': $route.path === '/faq' }"
        >
          FAQ
          <span v-if="$route.path === '/faq'" class="dot">●</span>
        </RouterLink>
      </div>
    </div>
  <div class="container my-5">
    <div class="row align-items-center">
      <!-- Sol tərəf -->
      <div class="col-md-6 text-center">
        <img
          :src="faqText"
          alt="FAQ"
          class="img-fluid mb-4"
          style="max-width: 280px"
        />
        <h2 class="faq-title">
          Some Question And Answer,<br />
          <strong>Look’s here.</strong>
        </h2>
      </div>

      <!-- Sağ tərəf: FAQ -->
      <div class="col-md-6">
        <div v-for="(item, index) in faqs" :key="index" class="faq-item">
          <!-- Sual -->
          <div
            class="faq-question"
            :class="{ active: activeIndex === index }"
            @click="toggle(index)"
          >
            <span
              class="number"
              :class="{ 'active-number': activeIndex === index }"
            >
              {{ index + 1 }}
            </span>
            {{ item.question }}
          </div>

          <!-- Cavab -->
          <div v-if="activeIndex === index" class="faq-answer">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { RouterLink, useRoute } from "vue-router";
import faqText from "@/assets/img/faq-text.png";

export default {
  name: "FAQ",
  data() {
    return {
      faqText,
      activeIndex: null,
      faqs: [
        {
          question: "How do the different types of drawings work?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Praesent tristique tortor ut nisi vestibulum, nec aliquet risus fermentum. Sed luctus, urna id tincidunt fermentum, purus sapien dictum felis, nec viverra lorem arcu a libero.",
        },
        {
          question: "How long do the drawings persist records?",
          answer:
            "Suspendisse potenti. Curabitur ultricies diam nec sapien iaculis, in ullamcorper ligula commodo. Phasellus dictum, risus a aliquam fermentum, ex augue sollicitudin magna, a imperdiet felis justo vel lacus. Aliquam erat volutpat. Morbi dapibus elit eget facilisis.",
        },
        {
          question: "Why do I need to be careful public drawings?",
          answer:
            "Integer consequat, leo in viverra bibendum, sem urna congue nunc, a pretium justo neque vel lacus. Ut non bibendum purus. Etiam sed sagittis ex. Vivamus pretium, dui a tristique ullamcorper, nunc velit malesuada orci, ut luctus justo nibh nec arcu.",
        },
        {
          question: "Do the numbers exhibit Benford’s Law?",
          answer:
            "Sed a turpis nec urna hendrerit malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel diam sit amet massa accumsan commodo. Cras rhoncus orci eget dolor fermentum, id luctus elit efficitur.",
        },
        {
          question: "Are the numbers suitable for experiments?",
          answer:
            "Curabitur at fringilla justo. Donec eu varius sem, nec sagittis risus. Donec convallis, urna eget suscipit finibus, felis erat congue nisl, nec bibendum justo odio id urna. Pellentesque accumsan, risus vitae fringilla pretium, lacus nisi dapibus mauris.",
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
const $route = useRoute();
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
/* Sol hissə başlıq */
.faq-title {
  font-size: 74px;
  font-weight: 500;
  line-height: 1;
  color: #222;
}

/* FAQ elementləri */
.faq-item {
  margin-bottom: 16px;
}

/* Sual box */

.faq-question {
  padding: 16px 18px;
  background: #fff;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  transition: all 0.3s;
  border: 1px solid #e6e6e6;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

.faq-question:hover {
  background: #f9f9ff;
}

.faq-question.active {
  font-weight: 600;
  background: #f1f0ff;
  border-color: #c4c0ff;
}

/* Nömrə */
.number {
  min-width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition: background 0.3s, color 0.3s;
}

.active-number {
  background: #6c63ff; /* mavi rəng */
  color: #fff;
}

/* Cavab box */
.faq-answer {
  margin-top: 8px;
  padding: 14px 18px;
  border-left: 4px solid #6c63ff;
  background: #fafafa;
  border-radius: 8px;
  font-size: 15px;
  line-height: 1.6;
  color: #444;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
}
</style>