var app = new Vue({
    el: '#app',
    data: {
        title: "My shopping cart",
        product: "Half Sleeve T-shirt for Summer ",
        selectedvar: 0,
        varients: [
            {
                id: 1234,
                image: 'black.jpeg',
                color: 'black',
                quantity: 11,
            },
            {
                id: 1235,
                image: 'blue.jpeg',
                color: 'blue',
                quantity: 2,
            },
            {
                id: 1237,
                image: 'red.jpeg',
                color: 'red',
                quantity: 0,
            },

        ],
        cart: 0
    },
    methods: {
        addCart(){
            this.cart += 1;
            this.varients[this.selectedvar].quantity -= 1;
        },
        resetCart(){
            this.varients[0].quantity = 11;
            this.varients[1].quantity = 2;
            this.varients[2].quantity = 0;
            this.cart = 0;
            
        },
        updateprod(no){
            this.selectedvar= no;

        },
    },
    computed: {
        image() {
            return this.varients[this.selectedvar].image;
        },
        inventory(){
            return this.varients[this.selectedvar].quantity;
        }
    }
})