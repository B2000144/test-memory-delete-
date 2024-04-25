<template>
  <p>Trang admin</p>
  <div class="text-center title">
    <p class="text-title">Quản lí thư viện</p>
  </div>
  <div class="d-flex justify-content-end">
    <div class="btn btn-primary">
      <i class="fa-solid fa-plus"></i><span>Thêm</span>
    </div>
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
            <th>Giá</th>
            <th>Nhà xuất bản</th>
            <th>Năm xuất bản</th>
            <th>Tác giả</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Test sách</td>
            <td>Giá</td>
            <td>10</td>
            <td>Kim đồng</td>
            <td>Sợ thâtk</td>
            <td>2015</td>
            <td>Nguyễn du</td>
          </tr>
          <!-- Thêm các hàng dữ liệu khác tại đây -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "admin.home",
};
</script>

<style scoped>
.title {
  background: #006400;
  color: #fff;
}
.text-title {
  font-size: 30px;
}
</style>
