<template>
  <div>
    <h1>Product List</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" />
    <ul v-else>
      <li v-for="product in products" v-bind:key="product.title">
        <span>{{product.title}} -</span>
        <span>{{product.price}}</span>
        <div>Inventory: {{product.inventory}}</div>
        <button @click="addProductToCart(product)">Add to Cart!</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // data is managed through vuex computed object
  computed: {
    products() {
      return this.$store.getters.availableProducts;
    }
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    }
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchProducts").then(() => (this.loading = false));
  }
};
</script>

<style>
</style>