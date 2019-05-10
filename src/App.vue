<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6" :key="product.id" v-for="product in products">
                <product :isInCart="isInCart(product)" v-on:add-to-cart="addToCart(product)" :product="product"></product>
            </div>
            <div class="col-md-6 my-5">
                <cart v-on:remove-from-cart="removeFromCart($event)" :items="cart"></cart>
            </div>
        </div>
    </div>
</template>


<script>
	import products from "@/products.json";
	import Product from '@/components/Product.vue';
	import Cart from '@/components/Cart.vue';

	export default {
		name: 'app',

		components: {
			Product,
			Cart
		},

		data() {
			return {
				products,
				cart: []
			}
		},
		methods: {
			addToCart(product) {
				//console.log(product);
				this.cart.push(product);
			},

			removeFromCart(product) {
				this.cart = this.cart.filter(item => item.id !== product.id)
			},

			isInCart(product) {
				const item = this.cart.find(item => item.id === product.id);

				return !!item;
			}
		}
	}
</script>


<style>
    body {
        background-color: aliceblue;
    }
</style>
