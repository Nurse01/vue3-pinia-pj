import { Product } from "@/types/product.types";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Product[],
  }),
  getters: {
    getProductById: (state) => (id: number) => {
      return state.products.find((product) => product.id === id);
    },
    productCount(state) {
      return state.products.length ;
    },
  },
    actions: {
        addProduct(num:number) {
          this.$state.products.length+=num;
        }
    }
});
