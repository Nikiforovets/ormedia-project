class CategoryProducts{
    constructor(containerProducts, catalogCounter, catalogProduct, elementId){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogCounter = document.querySelector(catalogCounter);
        this.catalogProduct = catalogProduct;
        this.elementId = elementId;
        this.createProduct();
    }

    createProduct(){
        this.containerProducts.innerHTML = "";
        let wraper = document.createElement("slot");
        let products = cardStore.getProduct();
        this.catalogCounter.innerHTML = products.length;
        
        for(let i=0; i<this.catalogProduct.length; i++){
            if(this.elementId == this.catalogProduct[i].type){
                let cardStruct = creatorCardStruct.createStruct(this.catalogProduct,i);
                
                cardStruct.item.appendChild(cardStruct.name);
                cardStruct.item.appendChild(cardStruct.img);
                cardStruct.item.appendChild(cardStruct.price);
                cardStruct.item.appendChild(cardStruct.button);
                wraper.appendChild(cardStruct.item);   
            }
        }   

        this.containerProducts.appendChild(wraper);
    }
}