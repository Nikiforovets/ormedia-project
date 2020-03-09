class CreatorCardStruct{
    constructor(){
    }
    createStruct(catalogProduct, i){
        let products = cardStore.getProduct();
        let struct = {
        };
        struct.index = products.indexOf(catalogProduct[i].id);
        let activeText;
            if(struct.index === -1){
                activeText = "Добавить в корзину";
            }else{
                activeText = "Удалить из корзины";
            }
        struct.item = createProduct.getProductItem({
            tagName: "div",
            className: "item"
        });
        struct.name = createProduct.getProductItem({
            tagName: "div",
            className: "name",
            textName: catalogProduct[i].name
        });
        struct.img = createProduct.getProductItem({
            tagName: "div",
            className: "img",
            backgroundImg: `url(${catalogProduct[i].img})`
        });
        struct.price = createProduct.getProductItem({
            tagName: "div",
            className: "price",
            textName: catalogProduct[i].price
        });
        struct.button = createProduct.getProductItem({
            tagName: "button",
            className: "btn",
            textName: activeText,
            id: catalogProduct[i].id
        });
        struct.description = createProduct.getProductItem({
            tagName: "p",
            className: "description",
            textName: catalogProduct[i].description
        });

        struct.img.addEventListener("click", function(){
            hideAllDisplays();
            let display = document.getElementById("productPage");
            display.style.display = "block";
            display.innerHTML = "";
            struct.item.appendChild(struct.name);
            struct.item.appendChild(struct.img);
            struct.item.appendChild(struct.price);
            struct.item.appendChild(struct.description);
            struct.item.appendChild(struct.button);
            display.appendChild(struct.item);
        });

        struct.button.addEventListener('click', function(){
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

        return struct;
    }
}

let creatorCardStruct = new CreatorCardStruct();

