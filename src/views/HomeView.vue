<template>
  <Header />
  <Body />
  <Footer />
</template>

<script>
import Body from "../components/user/body/product.vue";
import Header from "../components/user/inc/header.vue";
import Footer from "../components/user/inc/footer.vue";
export default {
  name: "HomeView",
  components: { Header, Footer, Body },
};
</script>
