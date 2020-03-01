refreshCount();

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

document.getElementById("open-reg-menu").addEventListener("click",()=>{
    document.getElementById("registration-menu").style.display= "block";    
});

document.querySelector(".black-background").addEventListener("click", function(){
    document.getElementById("registration-menu").style.display= "none";  
})