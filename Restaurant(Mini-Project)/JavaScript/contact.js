let fnameNode=$('#fullname');
let errorNode1=$('#error1');
let emailNode=$('#femail');
let errorNode2=$('#error2');
let mobileNode=$('#mobile');
let errorNode3=$('#error3');
const errorBorder="2px solid red";
const succesBorder="2px solid green";

$(function(){
    fnameNode.blur(()=>validate1());
    emailNode.blur(()=>validate2());
    mobileNode.blur(()=>validate3());
});

function validateForm(){
    let s1= validate1();
    let s2= validate2();
    let s3= validate3();

    return (s1 && s2 && s3);
}

function validate1(){
    let fname=fnameNode.val();
    errorNode1.html("");
    if(fname===''){
        errorNode1.html("First Name is required");
        fnameNode.css('border',errorBorder);
        return false;
    }
    else{
        fnameNode.css('border',succesBorder);
        return true;
    }
}

function validate2(){
    let femail=emailNode.val();
    errorNode2.html("");
    let ss1=femail.substring(0,femail.indexOf('@'));
    let ss2=femail.substring(femail.indexOf('@')+1);
    if(femail===''){
        errorNode2.html("Email is required");
        emailNode.css('border',errorBorder);
        return false;
    }
    else if(!femail.includes('@')){
        errorNode2.html("Email should contain @");
        emailNode.css('border',errorBorder);
        return false;
    }
    else if(ss1=='' || ss2==''){
        errorNode2.html("Invalid Email Id");
        emailNode.css('border',errorBorder);
        return false;
    }
    else{
        emailNode.css('border',succesBorder);
        return true;
    }
}

function validate3(){
    let mobile=mobileNode.val();
    let regExp = new RegExp("^[0-9]{10}$");
    errorNode3.html("");
    console.log(regExp.test(mobile));
    if(mobile===''){
        errorNode3.html("Mobile number is required");
        mobileNode.css('border',errorBorder);
        return false;
    }
    else if(regExp.test(mobile)==false){
        errorNode3.html("please enter valid mobile number");
        mobileNode.css('border',errorBorder);
        return false;
    }
    else{
        mobileNode.css('border',succesBorder);
        return true;
    } 
}