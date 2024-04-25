<template>
  <Header />
  <div class="container mt-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Thông tin đọc giả</h5>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="readerName" class="form-label">Tên đọc giả</label>
            <input
              type="text"
              class="form-control"
              id="readerName"
              v-model="reader.name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="readerPhoneNumber" class="form-label"
              >Số điện thoại đọc giả</label
            >
            <input
              type="tel"
              class="form-control"
              id="readerPhoneNumber"
              v-model="reader.phoneNumber"
              required
            />
          </div>
          <div class="mb-3">
            <label for="phoneNumber" class="form-label">Số điện thoại</label>
            <input
              type="tel"
              class="form-control"
              id="phoneNumber"
              v-model="reader.contactNumber"
              required
            />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Địa chỉ</label>
            <input
              type="text"
              class="form-control"
              id="address"
              v-model="reader.address"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Xác nhận</button>
        </form>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "../inc/header.vue";
import Footer from "../inc/footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  name: "form.borrow",
  data() {
    return {
      reader: {
        name: "",
        phoneNumber: "",
        contactNumber: "",
        address: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Xử lý khi form được submit
      console.log(this.reader);
      // Gửi dữ liệu đến backend hoặc xử lý theo nhu cầu của bạn
    },
  },
};
</script>

<style scoped>
/* Bổ sung CSS tùy chỉnh nếu cần */
</style>
