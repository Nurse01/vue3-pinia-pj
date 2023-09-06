<template>
  <div class="card col" style="width: 18rem; height:23rem">
    <img
      :src="products.images[0]"
      style="width: 18rem; height: 10rem"
      class="object-fit-cover border rounded"
    />
    <div class="card-body text-start">
      <p class="fw-bold fs-5">{{ products.title }}</p>
      <p class="text-start">{{ products.price }} $</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: ["product"],
  setup(props) {
    const products = ref(props.product);
    console.log(products.value);
    return { products };
  },
});
</script>
