<template>
  <div class="authors-slider container my-5">
    <transition-group name="fade" tag="div" class="row g-3">
      <div
        v-for="item in paginatedItems"
        :key="item.id"
        :class="layout === 'grid' ? 'col-md-4' : 'col-md-6'"
      >
        <div class="card h-100 shadow-sm article-card">
          <div class="img-wrapper">
            <img :src="item.image" class="card-img-top" alt="image" />
          </div>
          <div class="card-body">
            <div class="d-flex align-items-center mb-2">
              <span class="badge category-badge me-2">{{ item.tag }}</span>
              <small class="text-muted">{{ $t("by") }} admin</small>
            </div>
            <h6 class="card-title mt-1">
              <a :href="item.link">{{ $t(item.titleKey) }}</a>
            </h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p class="text-muted small mb-0">
              📅 {{ item.date }} • ⏱ {{ item.readTime }} {{ $t("time") }}
            </p>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import img1 from "@/assets/img/1-2.jpg";
import img2 from "@/assets/img/2-1.jpg";

export default {
  name: "AuthorsSlider",
  props: {
    layout: { type: String, default: "slider" },
    itemsPerPage: { type: Number, default: 4 },
  },
  data() {
    return {
      currentPage: 1,
      items: [
        {
          id: 1,
          titleKey: "title1",
          tag: "Javascript",
          image: img1,
          date: "12 Apr, 2022",
          readTime: 3,
          link: "/post/1",
        },
        {
          id: 2,
          titleKey: "title2",
          tag: "Wordpress",
          image: img2,
          date: "12 Apr, 2022",
          readTime: 3,
          link: "/post/2",
        },
        {
          id: 3,
          titleKey: "title3",
          tag: "Design",
          image: img1,
          date: "13 Apr, 2022",
          readTime: 4,
          link: "/post/3",
        },
        {
          id: 4,
          titleKey: "title4",
          tag: "Drupal",
          image: img2,
          date: "14 Apr, 2022",
          readTime: 2,
          link: "/post/4",
        },
        {
          id: 5,
          titleKey: "title5",
          tag: "Javascript",
          image: img1,
          date: "15 Apr, 2022",
          readTime: 5,
          link: "/post/5",
        },
        {
          id: 6,
          titleKey: "title6",
          tag: "Design",
          image: img2,
          date: "16 Apr, 2022",
          readTime: 3,
          link: "/post/6",
        },
        {
          id: 7,
          titleKey: "title7",
          tag: "SEO",
          image: img1,
          date: "17 Apr, 2022",
          readTime: 4,
          link: "/post/7",
        },
        {
          id: 8,
          titleKey: "title8",
          tag: "CMS",
          image: img2,
          date: "18 Apr, 2022",
          readTime: 2,
          link: "/post/8",
        },
      ],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    paginatedItems() {
      if (this.layout === "grid") return this.items;
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.items.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
};
</script>

<style scoped>
.article-card {
  background: #ffffff;
  border: none;
  border-radius: 15px;
  width: 100%;
  height: auto;
  transition: transform 0.3s, box-shadow 0.3s;
}
.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.img-wrapper {
  width: 100%;
  height: 230px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 12px;
}
.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.img-wrapper img:hover {
  transform: scale(1.05);
}

.card-body {
  padding: 15px 12px;
}

.category-badge {
  background: #f0f0f0;
  color: #000;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
}
.category-badge:hover {
  background: #007bff;
  color: #fff;
  cursor: pointer;
}

.card-title a {
  text-decoration: none;
  color: #222;
  font-size: 1rem;
  font-weight: 600;
}
.card-title a:hover {
  color: #007bff;
}

.card-body p {
  font-size: 0.8rem;
  color: #555;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
