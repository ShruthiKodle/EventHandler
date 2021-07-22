
//Login Credientials................................................................

/*var datas=[
    {
        userName:"shru",
        password:"1234"
    },
    {
        userName:"anu",
        password:"12344"
    },
    {
        userName:"pamu",
        password:"12345"
    },
    {
        userName:"somu",
        password:"12347"
    }
];

var newsFeed=[
    {
        UserName:"bob",
        title:"goooooooooooooofdbddjhd"
    },
    {
        UserName:"susy",
        title:"badoooooooooooo"
    },

];
function userValid(user,pass){
    for(var i=0;i<datas.length;i++){
    if(datas[i].userName===user && datas[i].password===pass){
        return true
    }
    
}
return false;
}
function signin(user,pass){
    if(userValid(user,pass)){
        console.log("Login Sucess!")
    }else{
        alert("Invalid Credientials")
    }
}
var newname=prompt("enter name?");
var newpass=prompt("enter password?");
signin(newname,newpass);*/

//Event Handler...... Click,hover,keyboard events......................................................
var input=document.getElementById("input");
var button=document.getElementById("button");
var ul=document.querySelector("ul");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("123");

function inputLength(){
    return input.value.length ;
}
function createListElements(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";  
}
function addListAfterClick(){
        if( inputLength()>0){
            createListElements();
    }  
    
}
function addListAfterKeyPress(event){
        if( inputLength()>0 && event.keyCode===13){
            createListElements();
    }  
     
}
button.addEventListener("click" ,addListAfterClick);
input.addEventListener("keypress" ,addListAfterKeyPress);

function setGradients(){
    body.style.background="linear-gradient(to right, "+color1.value+ "," +color2.value+")";
}
color1.addEventListener("input",setGradients);
color2.addEventListener("input",setGradients);








