const API_URL = 'http://127.0.0.1:8000/users/sign_in';
//const xhr = new XMLHttpRequest();

async function login(){
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var body = {'user': user, 'password':password};
    let token;
    const x = await fetch(API_URL, {
        method:'POST',
        body: JSON.stringify(body),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>res.json())
    .catch(error=>console.error('Error: ', error))
    .then(response=> response["token"]);

    if (x){
        document.cookie = "token="+x+"; max-age=1440; path=/";
    }

    //console.log(body)
    //xhr.addEventListener("load", onRequestHandler);
    //xhr.open("POST", `${API_URL}/users/sign_in`);
    //xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    //xhr.send(body);
    //console.log(JSON.parse(body));
}