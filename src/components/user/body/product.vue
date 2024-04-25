<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-3 mb-4" v-for="product in products" :key="product.id">
        <div class="card">
          <img :src="product.image" class="card-img-top" alt="Product Image" />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Giá: {{ product.price }}</p>
            <router-link to="/user/borrow">
              <a href="#" class="btn btn-primary">Mượn sách</a></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPage",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Sản phẩm 1",
          price: "100.000đ",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aebbze55cswWdFTdK2e_2lgeysB8nw14_XvSjv6-Iw&s",
        },
        { id: 2, name: "Sản phẩm 2", price: "150.000đ", image: "product2.jpg" },
        { id: 3, name: "Sản phẩm 3", price: "200.000đ", image: "product3.jpg" },
        { id: 4, name: "Sản phẩm 4", price: "120.000đ", image: "product4.jpg" },
        { id: 5, name: "Sản phẩm 5", price: "180.000đ", image: "product5.jpg" },
        { id: 6, name: "Sản phẩm 6", price: "160.000đ", image: "product6.jpg" },
        { id: 7, name: "Sản phẩm 7", price: "220.000đ", image: "product7.jpg" },
        { id: 8, name: "Sản phẩm 8", price: "130.000đ", image: "product8.jpg" },
        { id: 9, name: "Sản phẩm 9", price: "190.000đ", image: "product9.jpg" },
        {
          id: 10,
          name: "Sản phẩm 10",
          price: "140.000đ",
          image: "product10.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Bổ sung CSS tùy chỉnh nếu cần */
</style>
