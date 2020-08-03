let email=document.getElementById("email");
let password=document.getElementById("password");
let submitButton = document.getElementsByClassName("sumbit");
let errorPass=document.getElementById("error-pass");
let errorEmail=document.getElementById("error-email");
 
function makeValidation() {
    if(email.value!="yahia@gmail.com" ){
      errorEmail.style.display="block";
    }
    if(password.value!="123456"){
        errorPass.style.display="block";
    }
    else{
      window.location="main_page.html";
    }
}
$(document).ready(function(){
  $(".see-more").click(function(){
    $(".not-visible").toggle();
    $(this).siblings("#dots").toggle();
    if($(".see-more").text()=="See More"){
      $(".see-more").text("See Less");
    }
    else{
      $(".see-more").text("See More");
    }
})
});
