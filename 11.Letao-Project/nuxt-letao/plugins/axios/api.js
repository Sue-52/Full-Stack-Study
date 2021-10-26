export default function({ $request }, inject) {
  inject("api", {
    /**
     * 轮播图请求数据
     * @returns promise()
     */
    IndexBanner() {
      return $request.$get("/banner");
    },
    /**
     * 轮播图请求数据
     * @returns promise()
     */
    IndexGirdlist() {
      return $request.$get("/girdlist");
    },
    /**
     * 轮播图请求数据
     * @returns promise()
     */
    IndexSports() {
      return $request.$get("/sports");
    },
    /**
     * 轮播图请求数据
     * @returns promise()
     */
    FirstCategory() {
      return $request.$get("/firstCategory");
    },
    /**
     * 轮播图请求数据
     * @returns promise()
     */
    SecondCategory(cid) {
      return $request.$get(`/secondCategory?id=${cid}`);
    }
  });
}
