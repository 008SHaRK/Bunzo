<template>
  <div class="topbar border-bottom py-2">
    <div class="container d-flex justify-content-end">
      <div class="search-box position-relative">
        <form class="d-flex search-form" @submit.prevent="goSearch">
          <input
            v-model="searchQuery"
            type="text"
            class="form-control me-2"
            placeholder="Axtar..."
          />
          <button class="btn btn-primary" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const searchQuery = ref("");

const goSearch = () => {
  if (searchQuery.value.trim() !== "") {
    router.push({ path: "/search", query: { q: searchQuery.value } });
    searchQuery.value = ""; // inputu təmizlə
  }
};
</script>

<style scoped>
.topbar {
  background-color: #5138ee;
}
.search-box {
  max-width: 250px;
}

.search-btn {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
}
</style>
