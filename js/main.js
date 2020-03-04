refreshCount();
checkAutorization();

function refreshCount(){
    document.querySelector(".basket-count").innerHTML=cardStore.getProduct().length;
}

document.getElementById("catalogBtn").addEventListener("click",()=>{
    document.getElementById("home_page").style.display = "none";

    let catalogMenu = document.getElementById("catalogMenu");
    let catalogContainer = document.getElementById("menuContainer");
    catalogContainer.appendChild(catalogMenu);
    
    let allProducts = new AllProducts(".products", ".basket-count", catalogProduct);
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