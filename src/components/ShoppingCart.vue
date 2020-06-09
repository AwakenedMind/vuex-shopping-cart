<template>
	<div>
		<h1>Shopping Cart</h1>
		<ul>
			<li v-for="product in products" v-bind:key="product.id">
				{{ product.title }} - {{ product.price | currency }} -
				{{ product.quantity }}
			</li>
		</ul>
		<div>Total: {{ total | currency }}</div>
		<button @click="checkout">Checkout</button>

		<div v-if="checkoutStatus">
			{{ checkoutStatus }}
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		...mapGetters('cart', {
			products: 'cartProducts',
			total: 'cartTotal',
		}),
		...mapState('cart', {
			checkoutStatus: 'checkoutStatus',
		}),
	},
	methods: {
		...mapActions('cart', ['checkout']),
	},
};
</script>

<style></style>
