<template>
  <h1>About</h1>
</template>
<script>
import { onMounted } from "vue";
export default {
  setup(props, context) {
    onMounted(() => {
      context.emit("id-menu", 3);
    });
  },
};
</script>
<style scoped>
h1 {
  color: black;
}
</style>
