import { Product } from "@/types/product.types";
import { defineStore } from "pinia";
import { watch } from "vue";
const API_URL = "https://dummyjson.com";
export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Product[],
    product: {} as Product,
    productId: 0,
  }),
  getters: {
    getAllProducts(state) {
      // console.log("get all products", state.products);
      return state.products;
    },
    getProductById: (state) => () => {
      // console.log("get product by id", id);
      // console.log(state.products);

      const newProduct = state.products.find(
        (product) => product.id === state.productId
      );
      console.log(newProduct);
      if (newProduct) {
        state.product = newProduct;
      }
      // state.product = state.products.find((product) => product.id == id);
      console.log(state.product);
      return state.product;
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
    addProductId(id: number) {
      this.productId = id;
      console.log("add product id", this.productId);
    },
  },
  persist: true,
});
