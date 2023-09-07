<template>
  <div>
    <p>pd page</p>
    <p>User {{ $route.params.id }}</p>
    <!-- <p>{{  product }}</p> -->
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useProductStore } from "@/stores/ProductStore";
import { Product } from "@/types/product.types";

export default defineComponent({
//   mounted() {
//     let itemId = this.$route.params.id;
//     //     // getProductById(this.$route.params.id);
//     //     //   useProductStore.getProductById(itemId);
//   },
  setup() {
    // const router = useRouter();
    const itemId = ref<number>(0);
    const id = ref<number>(0);
    const store = useProductStore();
    let product = ref<Product | null | undefined>(null);
    onMounted(() => {
      getProductById();
    });
    // func
    const getProductById = () => {
      product.value = store.getProductById();
      console.log("getpd", product.value);

      // product.value = store.getProductById(id.value);
      //   console.log("getpd", product.value);
    };
    return { id, getProductById };
  },
});
</script>
