 function checkEmail(){
     var email = document.getElementById('txtEmail');

     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

     if (!filter.test(email.value)) {
     
        alert('Please provide a valid email address');
    
        email.focus;
    
        return false;
     }
    }

//    if(frameElement.email.value == ""){

//          alert("please Enter the email : ");
//          frm.email.focus();
//          return false;
//     }

//     var reg = /^([A-Z a-z 0-9_\-\.]) + \@([A-Z a-z 0-9_\-\.]) + \.([A-Z a-z]{2,4})$/;

//     if(reg.test(frm.email.value) == false){
       
//         alert('Invalid email Address');
//         frm.email.focus();
//         return false;

//     }
