hideAllDisplays();
refreshCount();
checkAutorization();
addCatalogListeners();
addSwitchDisplaysListeners()
addLoginListeners();

//catalog listeners 

let basketProducts;

function addCatalogListeners(){
    document.getElementById("catalogContainerBtn").addEventListener("click", showAllCatalog);
    document.getElementById("catalogMenu").childNodes.forEach(function(element){
        element.addEventListener("click", showCategoryCatalog);
    });
    document.getElementById("basket").addEventListener("click", showBasketCatalog);
    document.getElementById("pay").addEventListener("click", function(){
        if(userAutorize){
            alert("Оплачено");
        }
        else
        alert("Оплата не выполнена, войдите в учетную запись!");
    });
}

function showAllCatalog(){
    hideAllDisplays();
    document.getElementById("catalogContainer").style.display = "block";
    document.getElementById("productsContainer").style.display = "flex";
    let allProducts = new AllProducts(".products", ".basket-count", catalogProduct);
}

function showCategoryCatalog(){
    hideAllDisplays();
    document.getElementById("catalogContainer").style.display = "block";
    document.getElementById("productsContainer").style.display = "flex";
    let categoryProducts = new CategoryProducts(".products", ".basket-count", catalogProduct, this.id);
}

function showBasketCatalog(){
    hideAllDisplays();
    document.getElementById("catalogContainer").style.display = "block";
    document.getElementById("productsContainer").style.display = "block";
    document.getElementById("basketSumContainer").style.display = "flex";
    basketProducts = new BasketProducts(".products", ".basket-count", catalogProduct, ".basketSum");
    basketProducts.calculateSum();
}

//catalog listeners end


//switch displays

function addSwitchDisplaysListeners(){
    document.getElementById("homePage").style.display = "flex";

    document.getElementById("homePageBtn").addEventListener("click", ()=>{
        hideAllDisplays();
        document.getElementById("homePage").style.display = "flex";
    });

    document.getElementById("aboutCompanyBtn").addEventListener("click", ()=>{
        hideAllDisplays();
        document.getElementById("aboutCompany").style.display = "block";
    });

    document.getElementById("faqBtn").addEventListener("click", ()=>{
        hideAllDisplays();
        document.getElementById("faq").style.display = "block";
    });

    document.getElementById("blogPageBtn").addEventListener("click", ()=>{
        hideAllDisplays();
        document.getElementById("blogPage").style.display = "block";
    });
}

function hideAllDisplays(){
    displays.forEach(function(element){
        document.getElementById(element).style.display = "none";
    });
}

//switch displays end

//login listeners

function addLoginListeners(){
    document.getElementById("open-reg-menu").addEventListener("click",()=>{
        document.getElementById("registration-menu").style.display= "block";    
    });
    
    document.getElementById("open-login-menu").addEventListener("click", ()=>{
        document.getElementById("registration-menu").style.display= "block"; 
        document.getElementById("registration-btn").innerHTML = "Войти";
    });
    
    document.querySelector(".black-background").addEventListener("click", function(){
        document.getElementById("registration-menu").style.display= "none";  
    });
    
    document.getElementById("logout").addEventListener("click", logout);
    
    document.getElementById("registration-btn").addEventListener("click", login);
}


//login listeners end





function refreshCount(){
    document.querySelector(".basket-count").innerHTML=cardStore.getProduct().length;
}
