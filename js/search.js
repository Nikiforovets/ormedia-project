class Search{
    constructor(searchString){
        this.searchString = searchString;
        this.searchProduct();
    }

    searchProduct(){
        let arrProducts = [];
        catalogProduct.forEach((element)=>{
            if(element.name.toLowerCase().indexOf(this.searchString) != -1){
                arrProducts.push(element);
            }
        });
        hideAllDisplays();
        document.getElementById("catalogContainer").style.display = "block";
        document.getElementById("productsContainer").style.display = "flex";
        let allProducts = new AllProducts(".products", ".basket-count", arrProducts);
    }
}