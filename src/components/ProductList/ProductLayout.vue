<template>
  <div class="text-center row row-cols-1 row-cols-md-3 g-4 container mx-auto">
    <div v-for="(product, index) in products" :key="product.id" class="">
      <product-card :product="products[index]" />
    </div>
  </div>
</template>
<script lang="ts">
import { useProductStore } from "@/stores/ProductStore";
import { Product } from "@/types/product.types";
import axios from "axios";
import { defineComponent, onMounted, ref, watch } from "vue";
import ProductCard from "./ProductCard.vue";
export default defineComponent({
  components: { ProductCard },
  setup(props) {
    let products = ref<Product[]>([]);
    const API_URL = "https://dummyjson.com";
    const store = useProductStore();
    onMounted(() => {
      getProducts();
    });
    const getProducts = () => {
      axios.get(`${API_URL}/products`).then((res) => {
        store.addProduct(res.data.products);
        products.value = store.getAllProducts;
        // console.log(products.value);
      });
    };
    return { products };
  },
});
</script>
