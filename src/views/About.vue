<template>
  <div>
    <!-- Tabs -->
    <div class="tabs-container">
      <div class="tabs">
        <!-- Home düyməsi -->
        <RouterLink
          to="/"
          class="tab-link"
          :class="{ active: $route.path === '/' }"
        >
          Home
          <span v-if="$route.path === '/'" class="dot">●</span>
        </RouterLink>

        <!-- About düyməsi -->
        <RouterLink
          to="/about"
          class="tab-link"
          :class="{ active: $route.path === '/about' }"
        >
          About
          <span v-if="$route.path === '/about'" class="dot">●</span>
        </RouterLink>
      </div>
    </div>

    <!-- Content -->
    <div class="container my-5">
      <div class="row g-4">
        <!-- Open Platform -->
        <div class="col-md-4">
          <div class="card h-100 shadow-sm border-0 p-4">
            <div class="icon-box mb-3">
              <i class="bi bi-diagram-3-fill fs-2 text-white"></i>
            </div>
            <h5 class="fw-bold">Open Platform</h5>
            <p class="text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry has been the industry's standard dummy text ever since
              the 1500s when an unknown printer took galley type and scrambled.
            </p>
            <p class="text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry has been the industry's standard.
            </p>
          </div>
        </div>

        <!-- Digital Publishing -->
        <div class="col-md-4">
          <div class="card h-100 shadow-sm border-0 p-4">
            <div class="icon-box mb-3">
              <i class="bi bi-person-video3 fs-2 text-white"></i>
            </div>
            <h5 class="fw-bold">Digital Publishing</h5>
            <p class="text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry has been the industry's standard dummy text ever since
              the 1500s when an unknown printer took galley type and scrambled.
            </p>
            <p class="text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry has been the industry's standard.
            </p>
          </div>
        </div>

        <!-- Image + Button -->
        <div class="col-md-4">
          <div
            class="card h-100 shadow-sm border-0 position-relative overflow-hidden"
          >
            <img
              :src="aboutImg"
              class="card-img-top rounded-top"
              alt="Person"
            />
            <!-- Gradient overlay -->
            <div class="img-overlay"></div>
            <!-- Button şəkilin aşağısında -->
            <RouterLink
              to="/contact"
              class="btn btn-primary position-absolute share-btn"
            >
              Share your thinking →
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="container my-5">
        <div class="row align-items-center">
          <!-- Sol tərəf: Başlıq -->
          <div class="col-md-6 mb-4 mb-md-0">
            <h1 class="main-title">
              You Can <strong>Read</strong><br />
              And <strong>Write</strong> With<br />
              Bunzo.
            </h1>
          </div>

          <!-- Sağ tərəf: Kartlar -->
          <div class="col-md-6">
            <!-- 1-ci kart -->
            <div class="card p-4 border-0 border-bottom rounded-0">
              <h5 class="fw-bold mb-2">Digital Publishing</h5>
              <p class="text-muted mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text eve since the 1500 when an unknown printer took a galley
                type scrambled’s make a type specimen book. It has survived not
                only five centuries also the leap into electronic typesetting.
              </p>
            </div>

            <!-- 2-ci kart -->
            <div class="card p-4 border-0 rounded-0">
              <h5 class="fw-bold mb-2">Digital Publishing</h5>
              <p class="text-muted mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text eve since the 1500 when an unknown printer took a galley
                type scrambled’s make a type specimen book. It has survived not
                only five centuries also the leap into electronic typesetting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import aboutImg from "@/assets/img/about.jpg"; // ✅ şəkili düzgün import
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
  gap: 20px;
}

.tab-link {
  cursor: pointer;
  color: #555;
  font-size: 16px;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
}

.tab-link.active {
  font-weight: 600;
  color: #000;
}

.dot {
  font-size: 10px;
  line-height: 0;
  color: #5f3dc4;
}

/* Icon box */
.icon-box {
  width: 60px;
  height: 60px;
  background-color: #4000ff; /* bənövşəyi rəng */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

/* Button şəkilin aşağısında */
.share-btn {
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 8px;
  z-index: 2;
}

/* Overlay effekt */
.img-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  z-index: 1;
}
.main-title {
  font-size: 48px;
  font-weight: 400;
  line-height: 1.3;
  color: #333;
}
.card {
  border: 1px solid #eee !important; /* incə boz xətt */
  box-shadow: none !important;       /* shadow götürülür */
}
</style>
