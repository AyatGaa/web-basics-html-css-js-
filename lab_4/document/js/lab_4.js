/** 1- Select Div with 5 methods */

var div_class = document.getElementsByClassName("c-div"); //retrieve all elements with the given class name. 
console.log(div_class);

var div_name = document.getElementsByName("n-div");
console.log(div_name);
 let div = document.getElementsByTagName("div");
console.log(div);
 
var div_id_selector = document.querySelector("#myid");
console.log(div_id_selector);

var div_class_selector = document.querySelector(".c-div");
console.log(div_class_selector);

var div_tag_selector = document.querySelector("div");
console.log(div_tag_selector);

var div_all_selecetor = document.querySelectorAll("div")[0];
console.log(div_all_selecetor);


div_class[0].style.backgroundColor = "grey";
div_class[0].style.width = "500px";
div_class[0].style.height = "200px";
div_class[0].style.padding = "20px";
div_class[0].style.fontSize = "100px";
div_class[0].style.color = "white";
div_class[0].style.textAlign = "center";
div_class[0].innerHTML = "Hi From JS";
div_class[0].style.display = "none";



var myform = document.querySelectorAll("input");


console.log(myform[0]);
    for(var i =0 ; i <myform.length ; i++){
        myform[i].addEventListener("focus", function(e){

            e.target.style.border = "solid 4px red";


        });

        myform[i].addEventListener("blur", function (e) {
            e.target.style.border = ""; 
        });
    }
  

var regBtn = document.getElementById('regBtn');

    regBtn.addEventListener("click", function(e){
        e.preventDefault();
        for (var i = 0; i < myform.length; i++) {
            if (myform[i].id === "name") {
                name = myform[i].value.trim();
            } else if (myform[i].id === "email") {
                email = myform[i].value.trim();
            } else if (myform[i].id === "password") {
                password = myform[i].value;
            } else if (myform[i].id === "confirmPassword") {
                confirmPassword = myform[i].value;
            }
        }
        var errMsg ="";
        if(name.length <=5){
            errMsg = "Name must be more than 5!";
            
        }else if(!email.includes("@")){
            errMsg="Email Dont hav @ ";
        }else if(password != confirmPassword){
            errMsg = "Password not Same Try again !";
        }

        if(errMsg){
            alert(errMsg);
        }else{
            alert("Submit Successfully !");
        }
    
    });

 