<template>
  <div class="topbar  border-bottom py-2">
    <div class="container d-flex justify-content-end">
      <div class="search-box position-relative">
        <input
          type="text"
          class="form-control"
          placeholder="Search..."
          v-model="query"
        />
        <button class="btn search-btn">
          <i class="bi bi-search"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const query = ref("");
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
