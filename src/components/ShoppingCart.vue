<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li
        v-for="product in products"
        v-bind:key="product.id"
      >{{product.title}} - {{product.price | currency}} - {{product.quantity}}</li>
    </ul>
    <div>Total: {{total | currency}}</div>
    <button @click="handleCheckout()">Checkout</button>

    <div v-if="this.$store.state.checkoutStatus">{{this.$store.state.checkoutStatus}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters.cartProducts;
    },
    total() {
      return this.$store.getters.cartTotal;
    }
  },
  methods: {
    handleCheckout() {
      return this.$store.dispatch("checkout");
    }
  }
};
</script>

<style>
</style>