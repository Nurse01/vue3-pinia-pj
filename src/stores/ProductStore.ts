import { Product } from "@/types/product.types";
import { defineStore } from "pinia";
import { watch } from "vue";
const API_URL = "https://dummyjson.com";
export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Product[],
  }),
  getters: {
    getAllProducts(state) {
      // console.log("get all products", state.products);
      return state.products;
    },
    getProductById: (state) => (id: number) => {
      return state.products.find((product) => product.id === id);
    },
    productCount(state) {
      console.log(state.products.length);
      return state.products.length;
    },
  },
  actions: {
    addProduct(productlist: Product[]) {
      // console.log("product list",productlist);
      this.products = productlist;
      // console.log("add products", this.products);
    },
  },
});
