<template>
  <div class="container">
    <h3 class="py-4">Products</h3>
    <!-- <p>{{ products }}</p> -->
    <!-- <p>{{pd.productCount}}</p> -->

    <!-- Card All product -->
    <product-layout />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Product } from "@/types/product.types";
import ProductLayout from "@/components/ProductList/ProductLayout.vue";
import { useProductStore } from "@/stores/ProductStore";
interface ProductList {
  pd: Product;
}
export default defineComponent({
  components: { ProductLayout },
  setup() {
    const pd = useProductStore();
    onMounted(() => {
      console.log(pd.productCount);
    });
    
    return {};
  },
});
</script>
