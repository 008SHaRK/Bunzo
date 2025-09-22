<template>
  <div class="authors-slider container my-5">
    <div
      v-if="layout === 'slider'"
      class="section-header d-flex justify-content-between align-items-center py-3 mb-4"
    >
      <h4 class="fw-bold mb-0">{{ $t("authors") }}</h4>
      <div>
        <button
          class="btn btn-light me-2"
          @click="prevPage"
          :disabled="currentPage === 1"
        >
          ←
        </button>
        <button
          class="btn btn-light"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          →
        </button>
      </div>
    </div>

    <transition-group name="fade" tag="div" class="row g-3">
      <div
        v-for="item in displayedItems"
        :key="item.id"
        :class="layout === 'grid' ? 'col-md-4' : 'col-md-6'"
      >
        <div class="card h-100 shadow-sm article-card">
          <router-link
            :to="`/post/${item.id}`"
            class="img-wrapper"
            :class="{ 'small-img': layout === 'grid' }"
          >
            <img :src="item.image" class="card-img-top" alt="image" />
          </router-link>

          <div class="card-body">
            <div class="d-flex align-items-center mb-2">
              <span class="badge category-badge me-2">{{ item.tag }}</span>
              <small class="text-muted">{{ $t("by") }} admin</small>
            </div>
            <h6 class="card-title mt-1">
              <router-link :to="`/post/${item.id}`">
                {{ $t(item.titleKey) }}
              </router-link>
            </h6>
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
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 4,
      items: [
        {
          id: 1,
          titleKey: "title1",
          tag: "Javascript",
          image: img1,
          date: "12 Apr, 2022",
          readTime: 3,
        },
        {
          id: 2,
          titleKey: "title2",
          tag: "Wordpress",
          image: img2,
          date: "12 Apr, 2022",
          readTime: 3,
        },
        {
          id: 3,
          titleKey: "title3",
          tag: "Design",
          image: img1,
          date: "13 Apr, 2022",
          readTime: 4,
        },
        {
          id: 4,
          titleKey: "title4",
          tag: "Drupal",
          image: img2,
          date: "14 Apr, 2022",
          readTime: 2,
        },
        {
          id: 5,
          titleKey: "title5",
          tag: "Javascript",
          image: img1,
          date: "15 Apr, 2022",
          readTime: 5,
        },
        {
          id: 6,
          titleKey: "title6",
          tag: "Design",
          image: img2,
          date: "16 Apr, 2022",
          readTime: 3,
        },
        {
          id: 7,
          titleKey: "title7",
          tag: "SEO",
          image: img1,
          date: "17 Apr, 2022",
          readTime: 4,
        },
        {
          id: 8,
          titleKey: "title8",
          tag: "CMS",
          image: img2,
          date: "18 Apr, 2022",
          readTime: 2,
        },
      ],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    paginatedItems() {
      return this.layout === "slider"
        ? this.items.slice(
            (this.currentPage - 1) * this.itemsPerPage,
            this.currentPage * this.itemsPerPage
          )
        : this.items;
    },
    displayedItems() {
      return this.paginatedItems;
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
  background: #f9f9f9;
  border: none;
  border-radius: 12px;
}
.img-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
}
.img-wrapper.small-img {
  height: 150px;
}
.img-wrapper.small-img img {
  height: 150px;
  object-fit: cover;
}
.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.img-wrapper img:hover {
  transform: scale(1.1);
}
.card-title a {
  text-decoration: none;
  color: #000;
  transition: color 0.3s;
}
.card-title a:hover {
  color: #007bff;
}
.category-badge {
  background: #f1f1f1;
  color: #000;
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 0.8rem;
  transition: all 0.3s;
}
.category-badge:hover {
  background: #007bff;
  color: #fff;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
