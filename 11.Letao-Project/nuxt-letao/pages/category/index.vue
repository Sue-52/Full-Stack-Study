<template>
  <div class="category">
    <van-tree-select
      height="100vw"
      :items="oneCategoryList"
      :main-active-index.sync="active"
      @click-nav="categoryHandle"
    >
      <template #content>
        <div v-for="item in twoCategory" :key="item.id" class="cate_item">
          <van-image width="6rem" :src="item.brandLogo" />
          <p>{{ item.brandName }}</p>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    async categoryHandle(index) {
      // 根据选中的一级分类id加载二级分类, 默认第一个一级分类是选中
      let { msg: twoCategory } = await this.$api.SecondCategory(
        this.oneCategoryList[index]["id"]
      );
      this.twoCategory = twoCategory;
    },
  },
  async asyncData({ $api }) {
    let active = 0;
    // 记载一级分类
    let { msg: oneCategoryList } = await $api.FirstCategory();
    // 处理一级分类数据
    oneCategoryList = oneCategoryList.map((item) => {
      return {
        id: item.id,
        text: item.categoryName,
      };
    });
    // 根据选中的一级分类id加载二级分类, 默认第一个一级分类是选中
    let { msg: twoCategory } = await $api.SecondCategory(oneCategoryList[active]["id"]);
    return {
      oneCategoryList,
      twoCategory,
    };
  },
};
</script>

<style scoped>
.cate_item {
  float: left;
  text-align: center;
}
</style>
