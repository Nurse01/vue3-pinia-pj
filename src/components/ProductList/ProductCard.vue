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
      <router-link :to="productDetailLink" @click="onClickCard(products.id)">
        <Button btnTitle="More Detail" class="mt-auto" />
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "@/components/ProductList/Button.vue";
import { useProductStore } from "@/stores/ProductStore";
export default defineComponent({
  props: ["product"],
  components: { Button },
  setup(props) {
    const products = ref(props.product);
    const productDetailLink = ref(`/product/${products.value.id}`);
    const store = useProductStore();
    // console.log(products.value);
    const onClickCard = (id: number) => {
      // console.log("click card", typeof(id));
      const pdId:number = id
      store.addProductId(pdId);
    };
    return { products, productDetailLink, onClickCard };
  },
});
</script>
