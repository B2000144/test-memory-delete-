<template>
  <Nav />
  <div class="container mt-5 body-form">
    <div class="card">
      <p class="text-center text-title mb-4">Thêm sách mới</p>
      <form @submit.prevent="submitForm" class="p-3">
        <div class="mb-3">
          <label for="bookName" class="form-label">Tên sách</label>
          <input
            type="text"
            class="form-control"
            id="bookName"
            v-model="book.name"
            required
          />
        </div>
        <div class="mb-3 pt-2">
          <label for="bookPrice" class="form-label">Giá sách</label>
          <input
            type="number"
            class="form-control"
            id="bookPrice"
            v-model="book.price"
            required
          />
        </div>
        <div class="mb-3 pt-2">
          <label for="bookQuantity" class="form-label">Số lượng sách</label>
          <input
            type="number"
            class="form-control"
            id="bookQuantity"
            v-model="book.quantity"
            required
          />
        </div>
        <div class="mb-3 pt-2">
          <label for="bookPublisher" class="form-label">Nhà xuất bản</label>
          <input
            type="text"
            class="form-control"
            id="bookPublisher"
            v-model="book.publisher"
            required
          />
        </div>
        <div class="mb-3 pt-2">
          <label for="bookYear" class="form-label">Năm xuất bản</label>
          <input
            type="date"
            class="form-control"
            id="bookYear"
            v-model="book.year"
            required
          />
        </div>
        <div class="mb-3 pt-2">
          <label for="bookAuthor" class="form-label">Tác giả</label>
          <input
            type="text"
            class="form-control"
            id="bookAuthor"
            v-model="book.author"
            required
          />
        </div>
        <button type="submit" class="btn btn-success">Thêm sách</button>
      </form>
    </div>
  </div>
</template>

<script>
import Nav from "../NavBar/Nav.vue";
export default {
  components: { Nav },
  name: "admin.add",
  data() {
    return {
      book: {
        name: "",
        price: "",
        quantity: "",
        publisher: "",
        year: "",
        author: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Xử lý khi form được submit
      console.log(this.book);
      // Gửi dữ liệu đến backend hoặc xử lý theo nhu cầu của bạn
    },
  },
};
</script>

<style scoped>
.body-form {
  width: 40%;
}
.text-title {
  font-size: 30px;
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: underline;
}
</style>
