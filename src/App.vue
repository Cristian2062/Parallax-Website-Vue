<template>
  <main id="app" @mousemove="mousemove">
    <section class="products">
      <product 
        v-for="product in products"
        :key="product.color"
        :product="product"
      />
    </section>
  </main>
</template>

<script>
import product from './components/product'

export default {
  name: 'App',
  components: {
    product
  },
  data () {
    return {
      products: [
        {
          title: 'Bennet',
          description: 'The unlucky adventure',
          color: 'orange',
          bgtext: 'BEN',
          src: require('./assets/1.png')
        },
        {
          title: 'Xiao',
          description: 'The last wasak',
          color: 'blue',
          bgtext: 'XIAO',
          src: require('./assets/2.png')
        },
        {
          title: 'Jean',
          description: 'The Head Captain of the Knights of Favoniun',
          color: 'pink',
          bgtext: 'JEAN',
          src: require('./assets/3.png')
        }
      ]
    }
  },
  methods: {
    mousemove (e) {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      
      let products = document.querySelectorAll('.products .product');

      for (let i = 0; i < products.length; i++) {
        let product = products[i];

        let product_image = product.querySelector('.product-image-wrap');

        let img_x = mouseX - this.coords(product_image).x;
        let img_y = mouseY - this.coords(product_image).y;
        product_image.style.transform = `translateY(-${img_y/25}px) translateX(-${img_x/25}px)`;
      
        let bgtext = product.querySelector('.bg-text');

        let bg_x = mouseX - this.coords(bgtext).x;
        let bg_y = mouseY - this.coords(bgtext).y;
        bgtext.style.transform = `translateX(${bg_x/25}px) translateY(${bg_y/25}px)`;      
      }
    },
    coords (el) {
      let coords = el.getBoundingClientRect();

      return {
        x: coords.left / 2,
        y: coords.top / 2,
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'montserrat', sans-serif;
}

main {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.products {
  display: flex;
  max-width: 1600px;
  padding: 25px;
  margin: 0 auto;
}
</style>
