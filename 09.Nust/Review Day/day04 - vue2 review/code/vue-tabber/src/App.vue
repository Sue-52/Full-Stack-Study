<template>
  <div>
    <TabberHeader />
    <TabberContent :data="list">
      <!-- 表头 -->
      <template #title>
        <tr>
          <th>#</th>
          <th>商品名称</th>
          <th>价格</th>
          <th>标签</th>
          <th>操作</th>
        </tr>
      </template>
      <!-- 表格内容 -->
      <template #content="scoped">
        <td>{{ scoped.row.id }}</td>
        <td>{{ scoped.row.goods_name }}</td>
        <td><b>￥</b> {{ scoped.row.goods_price }}</td>
        <td>
          <!-- 添加标签 -->
          <input
            class="tag-input form-control"
            v-if="scoped.row.inputVisible"
            type="text"
            style="width:150px"
            v-focus
            v-model="inputData"
            @blur="scoped.row.inputVisible = false"
            @keydown.enter="enterFn(scoped.row)"
          />
          <button
            v-else
            class="btn btn-primary btn-sm add-tag"
            style="display: block"
            @click="scoped.row.inputVisible = true"
          >Tag</button>
          <!-- 标签 -->
          <span
            v-for="(item, index) in scoped.row.tags"
            :key="index"
            class="badge badge-warning"
          >
            {{ item }}
          </span>
        </td>
        <td>
          <button
            class="btn btn-danger btn-sm"
            @click="handleDelete(scoped.row.id)"
          >
            删除
          </button>
        </td>
      </template>
    </TabberContent>
    <TabberFooter />
  </div>
</template>

<script>
import TabberHeader from "./components/TabberHeader.vue";
import TabberContent from "./components/TabberContent.vue";
import TabberFooter from "./components/TabberFooter.vue";

import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
export default {
  name: "App",
  data() {
    return {
      list: [],
      inputData:""
    };
  },
  methods: {
    handleDelete(id) {
      this.list = this.list.filter((item) => item.id != id);
    },
    enterFn(data){
      console.log(this.inputData)
      if(this.inputData.trim().length === 0){
        return alert("请输入数据")
      }
      data.tags.push(this.inputData)
      this.inputData = ""
    }
  },
  created() {
    // 当页面初始化完成后获取数据
    axios({
      url: "/api/goods",
      method: "get",
    }).then((res) => {
      // console.log(res);
      this.list = res.data.data;
    });
  },
  components: {
    TabberHeader,
    TabberContent,
    TabberFooter,
  },
};
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .badge {
    margin-right: 5px;
  }
</style>