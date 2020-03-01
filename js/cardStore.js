class CardStore {
    constructor(){

    }

    getProduct(){
        let products = [];
        let productsLcStorage = localStorage.getItem('CardStore');
        if(productsLcStorage != null){
            products = JSON.parse(productsLcStorage);
        }
        return products;
    };

    putProduct(id){
        let products = this.getProduct();
        let index = products.indexOf(id);
        let statusProd;

        if(index === -1){
            products.push(id);
            statusProd = true;
        }
        else{
            products.splice(index, 1);
            statusProd = false;
        }

        localStorage.setItem('CardStore', JSON.stringify(products));

        return{
            statusProd: statusProd,
            products: products
        }
    };
}

let cardStore = new CardStore;