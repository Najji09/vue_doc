var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './img/animal_camel.png',
    inStock: false,
    inventory: 10,
    details: ['80% cotton', '20% polyester', 'Gender-nuetral'],
    variants: [
      {
        variantID: 2223,
        variantColor: 'green',
        variantImage: './img/animal_camel.png',
      },
      {
        variantID: 2224,
        variantColor: 'blue',
        variantImage: './img/animal_fox.png',
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },

    updateProduct: function (variantImage) {
      this.image = variantImage;
    },
  },
});
