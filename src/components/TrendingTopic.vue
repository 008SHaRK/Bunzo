<template>
  <section class="trending-topic">
    <div class="container">
      <div class="header-row">
        <!-- Sol tərəf -->
        <div class="left-side">
          <h3 class="title">Trending Topics</h3>
          <div class="controls">
            <button class="nav-btn" @click="prevSlide">
              <i class="bi bi-arrow-left-short"></i>
            </button>
            <button class="nav-btn" @click="nextSlide">
              <i class="bi bi-arrow-right-short"></i>
            </button>
          </div>
        </div>

        <!-- Slider -->
        <div class="slider">
          <div
            class="slider-track"
            :style="{
              transform:
                'translateX(-' + currentIndex * (cardWidth + gap) + 'px)',
              transition: noTransition ? 'none' : 'transform 0.6s ease'
            }"
          >
            <div
              v-for="(item, index) in duplicatedItems"
              :key="index"
              class="card"
              :style="{ backgroundImage: 'url(' + item.image + ')' }"
              @click="handleClick(item)"
            >
              <div class="overlay"></div>
              <!-- Mətn birbaşa göstərilir -->
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useCategoryStore } from "@/stores/useCategoryStore";

export default {
  name: "TrendingTopic",
  data() {
    return {
      currentIndex: 0,
      cardWidth: 220,
      gap: 20,
      noTransition: false,
      autoPlayInterval: null,
      repeatCount: 3,
    };
  },
  computed: {
    categories() {
      const store = useCategoryStore();
      return store.getCategories();
    },
    duplicatedItems() {
      let arr = [];
      for (let i = 0; i < this.repeatCount; i++) {
        arr = arr.concat(this.categories);
      }
      return arr;
    },
  },
  methods: {
    nextSlide() {
      this.currentIndex++;
      if (this.currentIndex >= this.categories.length * (this.repeatCount - 1)) {
        setTimeout(() => {
          this.noTransition = true;
          this.currentIndex = this.categories.length * (this.repeatCount / 2 - 1);
          this.$nextTick(() => (this.noTransition = false));
        }, 600);
      }
    },
    prevSlide() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        setTimeout(() => {
          this.noTransition = true;
          this.currentIndex = this.categories.length * (this.repeatCount / 2);
          this.$nextTick(() => (this.noTransition = false));
        }, 600);
      }
    },
    handleClick(item) {
      this.$router.push(item.link);
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, 2500);
    },
    stopAutoPlay() {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    },
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.stopAutoPlay();
  },
};
</script>

<style scoped>
.trending-topic {
  padding: 40px 0;
  background: #fafafa;
}

.header-row {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
}

.left-side {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
}

.controls {
  display: flex;
  gap: 10px;
}

.nav-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: #333;
  color: #fff;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s;
}

.nav-btn:hover {
  background: #007bff;
}

.slider {
  overflow: hidden;
  flex: 1;
}

.slider-track {
  display: flex;
  gap: 20px;
}

.card {
  width: 220px;
  height: 120px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.4s ease;
  flex-shrink: 0;
}

.card:hover {
  transform: scale(1.05);
}

.card .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 123, 255, 0.4);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.card:hover .overlay {
  opacity: 1;
}

.card span {
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  position: relative;
  z-index: 1;
}
</style>
