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
                
                    let index = products.indexOf(this.catalogProduct[i].id);
                    let activeText;
                    if(index === -1){
                        activeText = "Добавить в корзину";
                    }else{
                        activeText = "Удалить из корзины";
                    }

                    let item = createProduct.getProductItem({
                        tagName: "div",
                        className: "item"
                    });
                    let name = createProduct.getProductItem({
                        tagName: "div",
                        className: "name",
                        textName: this.catalogProduct[i].name
                    });
                    let img = createProduct.getProductItem({
                        tagName: "div",
                        className: "img",
                        backgroundImg: `url(${this.catalogProduct[i].img})`
                    });
                    let price = createProduct.getProductItem({
                        tagName: "div",
                        className: "price",
                        textName: this.catalogProduct[i].price
                    });
                    let button = createProduct.getProductItem({
                        tagName: "button",
                        className: "btn",
                        textName: activeText,
                        id: this.catalogProduct[i].id
                    });

                    button.addEventListener('click', function(){
                        let id = this.getAttribute('id');
                        let result = cardStore.putProduct(id);
                        if(result.statusProd){
                            this.innerHTML = "Удалить из корзины";
                        }
                        else{
                            this.innerHTML = "Добавить в корзину";
                        }
                        refreshCount();
                    });
                      
                    item.appendChild(name);
                    item.appendChild(img);
                    item.appendChild(price);
                    wraper.appendChild(item);              
                }
            }
        });

        this.containerProducts.appendChild(wraper);
    }
}