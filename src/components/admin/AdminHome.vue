<template>
  <Nav />
  <div class="text-center title">
    <p class="text-title">Thông tin sách</p>
  </div>
  <div class="container">
    <div class="d-flex justify-content-center">
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th>STT</th>
            <th>Tên sách</th>
            <th>Giá sách</th>
            <th>Số lượng sách</th>
            <th>Nhà xuất bản</th>
            <th>Năm xuất bản</th>
            <th>Tác giả</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Test sách</td>
            <td>10</td>
            <td>Kim đồng</td>
            <td>Sợ thâtk</td>
            <td>2015</td>
            <td>Nguyễn du</td>
            <td>
              <router-link to="/admin/edit"
                ><i class="fa-solid fa-pen-to-square text-primary"></i>
              </router-link>
              |
              <i class="fa-solid fa-trash text-danger"></i>
            </td>
          </tr>
          <!-- Thêm các hàng dữ liệu khác tại đây -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Nav from "../NavBar/Nav.vue";
export default {
  name: "admin.home",
  components: { Nav },
};
</script>

<style scoped>
.title {
  text-transform: uppercase;
  text-decoration: underline;
}
.text-title {
  font-size: 30px;
}
</style>
