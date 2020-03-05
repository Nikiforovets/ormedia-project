hideAllDisplays();
refreshCount();
checkAutorization();

addCatalogListeners();

function addCatalogListeners(){
    document.getElementById("catalogContainerBtn").addEventListener("click", showAllCatalog);
    document.getElementById("catalogMenu").childNodes.forEach(function(element){
        element.addEventListener("click", showCategoryCatalog);
    });
    document.getElementById("basket").addEventListener("click", showBasketCatalog);
}

function showAllCatalog(){
    hideAllDisplays();
    document.getElementById("catalogContainer").style.display = "block";
    let allProducts = new AllProducts(".products", ".basket-count", catalogProduct);
}

function showCategoryCatalog(){
    hideAllDisplays();
    document.getElementById("catalogContainer").style.display = "block";
    let categoryProducts = new CategoryProducts(".products", ".basket-count", catalogProduct, this.id);
}

function showBasketCatalog(){
    hideAllDisplays();
    document.getElementById("catalogContainer").style.display = "block";
    let basketProducts = new BasketProducts(".products", ".basket-count", catalogProduct);
}



document.getElementById("homePage").style.display = "flex";

function refreshCount(){
    document.querySelector(".basket-count").innerHTML=cardStore.getProduct().length;
}

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

//login listeners

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



//login listeners end



function hideAllDisplays(){
    displays.forEach(function(element){
        document.getElementById(element).style.display = "none";
    });
}
