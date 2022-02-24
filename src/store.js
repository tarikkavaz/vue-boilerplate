import Vuex from "vuex";
import Products from "@/services/products";
import Users from "@/services/users";

export default new Vuex.Store({
  state: {
    products: [],
    users: [],
    sitename: "VB",
  },
  actions: {
    async loadProducts({ commit }) {
      let responce = await Products().get("products");
      commit("SET_PRODUCTS", responce.data);
    },
    async loadUsers({ commit }) {
      let responce = await Users().get("users");
      commit("SET_USERS", responce.data);
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
  },
});
