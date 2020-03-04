function login(){
    if(document.getElementById("registration-btn").innerHTML == "Войти"){
        autorize(document.getElementById("username").value, document.getElementById("password").value);
        document.getElementById("registration-btn").innerHTML = "Зарегистрироваться";
    }else{
        registration();
    }
}

function autorize(username, password){
    let flag = false;
    users.forEach((element)=>{
        if(username == element.username && password == element.password){
            element.autorize = true;
            flag = true;
        }
        else{
            element.autorize = false;
        }
    });
    if(flag == false){
        alert("Вы ввели неправильный логин или пароль");
    }
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("registration-menu").style.display= "none"; 
    checkAutorization();
}
    

function registration(){
    let usernameField = document.getElementById("username").value;
    let passwordField = document.getElementById("password").value;
    let flag = true;
    users.forEach((element)=>{
        if(usernameField == element.username){
            flag = false;
        }
    });
    if(flag){
        users.push({
            autorize: false,
            username: usernameField,
            password: passwordField
        });
        document.getElementById("registration-menu").style.display= "none"; 
        alert("Вы успешно зарегистрировались на нашем сайте");
        autorize(usernameField, passwordField);
    }
    else{
        alert("Пользователь с таким именем уже зарегистрирован!");
    } 
}

function logout(){
    document.getElementById("user").innerHTML = "";
            document.getElementById("user_panel").style.display = "none";
            document.getElementById("login_panel").style.display = "block";
    users.forEach((element)=>{
        element.autorize = false;
    });
    checkAutorization();
}

function checkAutorization(){
    users.forEach((element)=>{
        if(element.autorize == true){
            document.getElementById("user").innerHTML = element.username;
            document.getElementById("user_panel").style.display = "block";
            document.getElementById("login_panel").style.display = "none";
        }
    });
}