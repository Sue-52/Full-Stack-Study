# React Redux

## 相关参考

```
https://www.redux.org.cn/
```

## 安装

```
安装redux包
npm install --save redux

模板下载
npx create-react-app my-app --template redux
```

## 为什么要学习 Redux

- React 和 Vue 区别之一: Vue 是双向 React 是单向
- React 是一个用于构建用户界面的 JavaScript 库 , 并不是 Web 应用的完整解决方案
- 当应用程序复杂时 如果想很好的管理 , 维护 , 追踪 , 控制状态(数据)时 需要使用 Redux(类似 Vuex)

## Redux 是什么

Redux 是 JavaScript 状态容器 提供可预测化的状态管理

设计思想:

- Web 应用是一个状态机 , 视图与状态一一对应
- 所有状态 保存在一个对象里

## 可预测状态管理

数据在什么时候 因为什么 发生了什么变化 都是可以控制和追踪的 称为预测的状态管理

## Redux 的应用场景

- 某个组件的状态 需要共享
- 某个状态需要在任何地方都可以拿到
- 一个组件需要改变全局状态
- 一个组件需要改变另一个组件的状态

## Redux 核心理念

- 通过 store 保存数据
- 通过 action 来修改数据
- 通过 reducer 将 store 和 action 串联 reducer(state=initialState){}

```
                      -------------
          --------->  | Component |  ---------
         |            -------------           |
         |                                    ⬇
  -------------       -------------       -------------
  |   Store   | <---- |  Reducer  | <---- |  Action   |
  -------------       -------------       -------------

```

## Redux 三大原则

### 单一数据源

- 整个应用程序的 state 只能储存在一个 store 中
- Redux 并没有强制不能创建多个 Store , 但那样做并不利于数据的维护
- 单一的数据源可以让整个应用程序的 state 变得方便维护 , 追踪 , 修改

### State 是只读的

- 唯一修改 State 的方法一定是触发 action
- 确保视频或网络请求都不能直接修改 State
- 保证所有的修改都被集中化处理 , 并按照严格的顺序执行

### 使用纯函数来执行修改

#### 纯函数

如果函数的调用参数相同 , 则永远返回相同的结果
该函数不会产生任何可观察的副作用 , 例如网络请求 输入和输出设备或数据突变

```js
//示例
//纯函数:
function priceAfterTax(productPrice) {
  return productPrice * 0.2 + productPrice;
}

//非纯函数:
var tax = 20;
function calculateTax(productPrice) {
  return productPrice * (tax / 100) + productPrice;
}
```

#### 什么是可观察的副作用

一个可以被观察的副作用是在函数内部与其外部的任意交互 , 这可能是在函数内修改外部的变量 , 或在函数里调用另外一个函数等

## Redux 基础

### Store

Store 是将 action 和 reducers 联系到一起的对象 实现创建 store 并将 reducer 绑定
Redux 应用只有一个单一的 store

方法:

- getState() 获取 state
- dispatch(action) 更新 state
- subscribe(listener) 注册监听器
- subscribe(listener) 返回的函数注销监听器

```js
import { createStore } from "redux";
import todoApp from "./reducers";
let store = createStore(todoApp);
```

### Action

更新 Store 的状态仅有一种方式: 调用 dispatch 函数 , 传递一个 action 给这个函数
reducer 通过判断传递的 action 来执行相应的操作
一个 Action 就是一个简单的 JavaScript 对象

```js
export const addAction = () => {
  return {
    type: { type: "ADD_TODO", text: "asdf" },
  };
};
```

### Reducer

reducer 是一个普通的 JavaScript 函数 , 它接收两个参数: state 和 action , 前者为 Store 中储存的 JavaScript 对象状态树 , 后者为组件中 dispatch 的 Action
reducer 根据 action 的指示 , 对 state 进行对应的操作 , 然后返回操作后的 state , Redux Store 会自动保存这份新的 state

```js
reducer(state,action){
    switch(action.type){
        case 'type':
            // 对 state 进行操作
            return newState;
        default:
            return state;
    }

}
```
