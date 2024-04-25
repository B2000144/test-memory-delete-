<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/admin" class="navbar-brand">Admin</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">Trang chủ</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/add" class="nav-link"
              >Thêm sách</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Liên hệ</router-link>
          </li>
          <!-- Thêm các mục menu khác tại đây -->
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
nav {
}
</style>
