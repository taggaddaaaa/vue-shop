<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6" :key="product.id" v-for="product in products">
                <product v-on:add-to-cart="addToCart(product)" :product="product"></product>
            </div>
        </div>
    </div>
</template>


<script>
	import products from "@/products.json";
	import Product from '@/components/Product.vue';

	export default {
		name: 'app',

		components: {
			Product
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
			}
		}
	}
</script>


<style>
    body {
        background-color: aliceblue;
    }
</style>
