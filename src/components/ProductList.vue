<template>
	<div>
		<h1>Product List</h1>
		<img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" />
		<ul v-else>
			<li v-for="product in products" v-bind:key="product.title">
				<span>{{ product.title }} -</span>
				<span>{{ product.price }}</span>
				<div>Inventory: {{ product.inventory }}</div>
				<button
					@click="addProductToCart(product)"
					:disabled="!productIsInStock(product)"
				>
					Add to Cart!
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
	// data is managed through vuex computed object
	computed: {
		...mapState({ products: (state) => state.products.items }),
		...mapGetters('products', {
			productIsInStock: 'productIsInStock',
		}),
	},

	data() {
		return {
			loading: false,
			productIndex: 1,
		};
	},
	methods: {
		...mapActions({
			fetchProducts: 'products/fetchProducts',
			addProductToCart: 'cart/addProductToCart',
		}),
	},
	created() {
		this.loading = true;
		this.fetchProducts().then(() => (this.loading = false));
	},
};
</script>

<style></style>
