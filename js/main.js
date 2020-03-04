hideAllDisplays();
refreshCount();
checkAutorization();
document.getElementById("homePage").style.display = "flex";

function refreshCount(){
    document.querySelector(".basket-count").innerHTML=cardStore.getProduct().length;
}

document.getElementById("catalogContainerBtn").addEventListener("click", showCatalog);
document.getElementById("catalogMenu").childNodes.forEach(function(element){
    element.addEventListener("click", showCatalog);
});

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

document.getElementById("basketPageBtn").addEventListener("click", ()=>{
    hideAllDisplays();
    document.getElementById("basketPage").style.display = "block";
});

function showCatalog(){
    hideAllDisplays();
    document.getElementById("catalogContainer").style.display = "block";

    let allProducts = new AllProducts(".products", ".basket-count", catalogProduct, this.id);
}

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
