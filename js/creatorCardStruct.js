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

