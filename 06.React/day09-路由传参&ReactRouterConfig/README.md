# React 路由传参

## 通过 URL 传参

GET 请求格式: /home?key=value&key1=value1

子组件获取路由参数
通过 this.props.location.search 获取到路由后的字段 ?key=value&key1=value1

创建 URLSearchParams 对象 将 字段传入 会解析出 key 对应的 value 值

通过 URLSearchParams.get(key); 获取 key 对应的值

### URLSearchParams

URLSearchParams 接口定义一些方法处理 URL 的查询字符串

URLSearchParams.get()
获取指定搜索参数的第一个值

URLSearchParams.getAll()
获取指定搜索参数的所有值 , 返回一个数组

## 通过动态路由传参

格式: /posts/:id

路由

```js
<NavLink to="/posts/123"/>
<Route path="/posts/:id">
```

组件
this.props.match.params 获取

## 通过 NavLink 或 Link 组件的 to 属性传参

```js
// pathname: 路由地址
// search: GET请求参数拼接
// hash
// state : 传递参数对象
<Link
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true },
  }}
/>
```

获取 state
this.props.location.state

# 路由的统一管理

[react-router-config](https://www.npmjs.com/package/react-router-config)

## 一级路由

```
├─index.js
├─Routes
|   └index.js
├─Components
|     ├─RouteCCom
|     |     └index.jsx
|     ├─RouteBCom
|     |     └index.jsx
|     ├─RouteACom
|     |     └index.jsx
|     ├─indexPageCom
|     |      └index.jsx
├─App
|  └index.jsx
```

1.在 routes 文件夹书写路由 2.在需要展示组件文件中 导入 routes 3.在需要展示组件的文件中 导入 react-router-config 4.使用 renderRoutes()方法渲染映射组件

## 嵌套路由

```js
// 例:
const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/routeA" />,
  },
  {
    path: "/routeA",
    component: RouteACom,
    routes: [
      {
        path: "/routeA/rock",
        component: RouteAChildACom,
      },
      {
        path: "/routeA/park",
        component: RouteAChildBCom,
      },
    ],
  },
  {
    path: "/routeB",
    component: RouteBCom,
  },
];
```

## 子路由传参

```js
//1.创建子路由
//2.在Routes引入路由
const route = [
    {
        path: '/about',
        component: BCom,
        routes: [
            {
                path: '/about/gocom',
                exact: true,
                component: GoCom
            },
            {
                path: '/about/rustcom',
                exact: true,
                component: RustCom
            }
        ]
    }
]



//3.在组件中显示路由
<div>
    <h1>BCom</h1>
    <ul>
        <li>
            <NavLink to={`${this.state.pathname}/gocom?name=张三&age=12`}>子路由:GoCom</NavLink>
        </li>
        <li>
            <NavLink to={`${this.state.pathname}/rustcom?name=里斯&age=29`}>子路由:RustCom</NavLink>
        </li>
    </ul>

    <div>
        {renderRoutes(this.props.route.routes)}
    </div>
</div>


//4.子路由中通过 URLSearchParams 获取路由参数5
function GoCom(props){
    const param = new URLSearchParams(props.location.search);

    return (
        <div>{param.get('name')}---{param.get('age')}</div>
    );
}
```
