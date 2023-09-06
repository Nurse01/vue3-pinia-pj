<template>
  <div class="bg-body-secondary  text-center row row-cols-3 g-4">
    <div v-for="(product, index) in products" :key="product.id" class="">
      <product-card :product="products[index]" />
    </div>
  </div>
</template>
<script lang="ts">
import { Product } from "@/types/product.types";
import axios from "axios";
import { defineComponent, onMounted, ref } from "vue";
import ProductCard from "./ProductCard.vue";
const API_URL = "https://dummyjson.com";
export default defineComponent({
  components: { ProductCard },
  setup(props) {
    let products = ref<Product[]>([]);
    onMounted(() => {
      getProducts();
    });
    const getProducts = () => {
      axios.get(`${API_URL}/products`).then((res) => {
        products.value = res.data.products;
      });
    };
    return { products };
  },
});
</script>
