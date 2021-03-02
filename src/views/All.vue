<template>
  <div class="all">
    <h1>This is the all page</h1>
    <product />
  </div>
</template>

<script>
import product from '../components/product.vue'
export default {
  components: { product },
  name: product
}
</script>