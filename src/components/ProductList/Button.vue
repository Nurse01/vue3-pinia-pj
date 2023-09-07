<template>
  <div>
    <button class="btn btn-primary">{{ btnTitle }}</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  props: ["btnTitle", "refLinked"],
  setup(props) {
    const btnTitle = ref<string>("");
    const refLinked = ref<string>("");
    onMounted(()=>{
        btnTitle.value = props.btnTitle
        refLinked.value = props.refLinked
    })
    return { btnTitle };
  },
});
</script>
