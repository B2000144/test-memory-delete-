<template>
  <Header />
  <div class="container mt-4">
    <div class="jumbotron">
      <h1 class="display-4">Chào mừng đến với Website Sách!</h1>
      <img
        src="https://bizweb.dktcdn.net/100/363/455/files/trang-web-14.png?v=1697544634262"
        alt=""
      />
      <p class="lead">
        Chúng tôi là cầu nối giữa bạn và vô số câu chuyện thú vị được chứa đựng
        trong từng quyển sách.
      </p>
      <hr class="my-4" />
      <p>
        Trang web của chúng tôi cung cấp một bộ sưu tập đa dạng các đầu sách từ
        nhiều thể loại khác nhau, từ tiểu thuyết, truyện tranh, đến sách hướng
        dẫn và nhiều hơn nữa.
      </p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="/books" role="button"
          >Khám phá sách ngay</a
        >
      </p>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "../inc/header.vue";
import Footer from "../inc/footer.vue";
export default {
  components: { Header, Footer },
  name: "intro",
};
</script>

<style scoped>
/* Bổ sung CSS tùy chỉnh nếu cần */
</style>
