import Vue from "vue";
import VueRouter from "vue-router";
import HomeProduct from "../components/product/HomeProduct.vue";
import AddProduct from "../components/product/AddProduct.vue";
import EditProduct from "../components/product/EditProduct.vue";

import HomeUser from "../components/users/HomeUser.vue";
import AddUser from "../components/users/AddUser.vue";
import EditUser from "../components/users/EditUser.vue";
import Login from "../components/users/Login.vue";

import HomeCategory from "../components/category/HomeCategory.vue";
import AddCategory from "../components/category/AddCategory.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/show-product",
    name: "show-product",
    component: HomeProduct,
  },
  /// product
  {
    path: "/add-pro",
    name: "add-pro",
    component: AddProduct,
  },
  {
    path: "/edit-pro/:id",
    name: "edit-pro",
    component: EditProduct,
  },
  
  // user
  {
    path: "/show-user",
    name: "show-user",
    component: HomeUser,
  },
  {
    path: "/add-user",
    name: "add-user",
    component: AddUser,
  },
  {
    path: "/edit-user/:id",
    name: "edit-user",
    component: EditUser,
  },
  {
    path: "/",
    name: "login",
    component: Login,
  },
  // category
  {
    path: "/category",
    name: "category",
    component: HomeCategory,
  },
  {
    path: "/add-category",
    name: "add-category",
    component: AddCategory,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
