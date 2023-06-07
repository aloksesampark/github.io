
const myImg= document.querySelector("img");
myImg.onclick = ()=>{
    const mySrc = myImg.getAttribute("src");
    if(mySrc === "images/CRM-Logo.png"){
            myImg.setAttribute("src", "images/crm-logo.jpg");
    }else{
        myImg.setAttribute("src", "images/CRM-Logo.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName(){
    let myName = prompt("Please enter your name");
    if(!myName) {
        setUserName();
      } else{
   
    localStorage.setItem('name', myName);
    myHeading.textContent = 'CRM is cool '+ myName;
}
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    let  storedName = localStorage.getItem('name');
    myHeading.textContent = 'CRM is cool '+storedName;
}

myButton.onclick = ()=>{
    setUserName();
}