class CreateProduct{
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
        if("description" in card){
            element.innerHTML = card.description;
        }
        return element;
    }
}

let createProduct = new CreateProduct();