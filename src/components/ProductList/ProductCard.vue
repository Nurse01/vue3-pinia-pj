<template>
  <div class="col card" style="height: 27rem">
    <img
      :src="products.images[0]"
      style="width: 100%; height: 50%; object-fit: cover"
      class="card-img-top"
    />
    <!--  -->
    <div
      class="card-body d-flex flex-column align-items-start justify-content-between"
    >
      <div class="text-start">
        <p class="card-title fw-semibold">{{ products.title }}</p>
        <p class="card-subtitle mb-2 text-muted">{{ products.price }} $</p>
        <p
          class="card-text"
          style="
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          "
        >
          {{ products.description }}
        </p>
      </div>
      <router-link to="">
        <Button btnTitle="More Detail" refLinked="`${}`" class="mt-auto" />
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "@/components/ProductList/Button.vue";
export default defineComponent({
  props: ["product"],
  components: { Button },
  setup(props) {
    const products = ref(props.product);
    console.log(products.value);
    return { products };
  },
});
</script>
