<template>
  <div>
    <table class="table table-bordered table-stripped">
      <!-- 表格标题区域 -->
      <thead>
        <!-- <tr>
          <th>#</th>
          <th>商品名称</th>
          <th>价格</th>
          <th>标签</th>
          <th>操作</th>
        </tr> -->
        <slot name="title" />
      </thead>
      <!-- 表格主体区域 -->
      <tbody>
        <tr v-for="(item,index) in data" :key="item.id">
          <!-- <td>{{ item.id }}</td>
          <td>{{ item.goods_name }}</td>
          <td><b>￥</b> {{ item.goods_price }}</td>
          <td>{{ item.tags }}</td>
          <td>
            <button class="btn btn-danger btn-sm">删除</button>
          </td> -->
          <!-- 通过 :row="item" 将数据传到父组件中使其可以使用 -->
          <slot name="content" :row="item" :index="index"/>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TabberContent",
  // 接受父传子的数据
  props: {
    data: Array,
  },
  components: {},
};
</script>

<style scoped>
  .badge {
    margin-right: 5px;
  }
</style>