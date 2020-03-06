class BasketProducts{
    constructor(containerProducts, catalogCounter, catalogProduct, basketSumContainer){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogCounter = document.querySelector(catalogCounter);
        this.basketSumContainer = document.querySelector(basketSumContainer);
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
                    
                    let container = document.createElement("div");
                    container.classList.add("basketProdCont");

                    container.appendChild(cardStruct.name);
                    container.appendChild(cardStruct.img);
                    

                    cardStruct.item.classList.add("flexInBasket");
                    cardStruct.item.appendChild(container);  
                    cardStruct.item.appendChild(cardStruct.description);
                    cardStruct.item.appendChild(cardStruct.button);  
                    cardStruct.item.appendChild(cardStruct.price);

                    wraper.appendChild(cardStruct.item);
                    cardStruct.button.addEventListener("click", function(){
                        cardStruct.item.style.display = "none";
                        basketProducts.calculateSum();
                    })
                }
            }
        });

        this.containerProducts.appendChild(wraper);
    }

    calculateSum(){
        let sum = 0;
        let arr = cardStore.getProduct();
        console.log(arr);
        arr.forEach((element)=>{
            for(let i=0; i<catalogProduct.length; i++){
                if(this.catalogProduct[i].id == element)
                sum += parseInt(this.catalogProduct[i].price);
            }
        });
        this.basketSumContainer.innerHTML = sum;
    }
}