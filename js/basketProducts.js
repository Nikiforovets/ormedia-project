class BasketProducts{
    constructor(containerProducts, catalogCounter, catalogProduct){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogCounter = document.querySelector(catalogCounter);
        this.catalogProduct = catalogProduct;
        this.createProduct();
    }

    createProduct(){
        this.containerProducts.innerHTML = "";
        let wraper = document.createElement("slot");
        let products = cardStore.getProduct();
        this.catalogCounter.innerHTML = products.length;
        let arr = cardStore.getProduct();
        arr.forEach(element => {
            for(let i=0; i<this.catalogProduct.length; i++){
                if(element == catalogProduct[i].id){
                    let cardStruct = creatorCardStruct.createStruct(this.catalogProduct,i);
                    
                    cardStruct.item.appendChild(cardStruct.name);
                    cardStruct.item.appendChild(cardStruct.img);
                    cardStruct.item.appendChild(cardStruct.price);
                    wraper.appendChild(cardStruct.item);              
                }
            }
        });

        this.containerProducts.appendChild(wraper);
    }
}