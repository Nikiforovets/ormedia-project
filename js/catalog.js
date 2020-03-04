class AllProducts{
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
        for(let i=0; i<this.catalogProduct.length; i++){

            let index = products.indexOf(this.catalogProduct[i].id);
            let activeText;
            if(index === -1){
                activeText = "Добавить в корзину";
            }else{
                activeText = "Удалить из корзины";
            }

            let item = this.getProductItem({
                tagName: "div",
                className: "item"
            });
            let name = this.getProductItem({
                tagName: "div",
                className: "name",
                textName: this.catalogProduct[i].name
            });
            let img = this.getProductItem({
                tagName: "div",
                className: "img",
                backgroundImg: `url(${this.catalogProduct[i].img})`
            });
            let price = this.getProductItem({
                tagName: "div",
                className: "price",
                textName: this.catalogProduct[i].price
            });
            let button = this.getProductItem({
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
            item.appendChild(button);
            wraper.appendChild(item);
        }

        this.containerProducts.appendChild(wraper);
    }


    getProductItem(card){
        let element = document.createElement(card.tagName);
        if("className" in card){
            element.setAttribute('class', card.className);
        }
        if("textName" in card){
            element.innerHTML = card.textName;
        }
        if("backgroundImg" in card){
            element.style.backgroundImage = card.backgroundImg;
        }
        if("id" in card){
            element.setAttribute('id', card.id);
        }
        return element;
    }
}