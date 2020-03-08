hideAllDisplays();
refreshCount();
checkAutorization();
addCatalogListeners();
addSwitchDisplaysListeners()
addLoginListeners();

setTimeout(showChat, 6000);
function showChat(){
    document.querySelector(".chat-menu").style.transform = "translate(0px, -450px)";
}

document.querySelector(".chat-menu").addEventListener("click", function(event){
    if(event.target.className == "closeBtn"){
        this.style.transform = "translate(0px, 0px)";
    }
    else{
        if(event.target.className == "sendMessageBtn"){
            sendMessage();
        }
        else
        this.style.transform = "translate(0px, -450px)";
    }
});

document.getElementById("messField").addEventListener("keydown", function(event){
    if(event.keyCode == 13){
        sendMessage();
    }
});


function sendMessage(){
    let value = document.getElementById("messField").value;
    if(value !== ""){
        let message = document.createElement("p");
        message.innerHTML = value;
        message.style.marginLeft = "15px";  
        document.querySelector(".chatField").appendChild(message);
        document.getElementById("messField").value = "";
    }
}



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


//faq begin

document.querySelectorAll(".topic").forEach(function(element){
    element.addEventListener("click",function(){
        document.querySelectorAll(".topic").forEach(function(e){
            e.classList.remove("active");
        });
        this.classList.toggle("active");
    });
});

//faq end