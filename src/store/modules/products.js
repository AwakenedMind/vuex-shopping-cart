import shop from '../../api/shop';

export default {
	namespaced: true,

	state: { items: [] },
	getters: {
		availableProducts(state) {
			return state.items.filter((product) => product.inventory > 0);
		},
		productIsInStock() {
			return (product) => {
				return product.inventory > 0;
			};
		},
	},
	mutations: {
		setProducts(state, products) {
			state.items = products;
		},

		decrementProductInventory(state, product) {
			product.inventory--;
		},

		setCheckoutStatus(state, status) {
			state.checkoutStatus = status;
		},
	},
	actions: {
		fetchProducts(context) {
			return new Promise((resolve) => {
				shop.getProducts((products) => {
					context.commit('setProducts', products);
					resolve();
				});
			});
		},
	},
};
