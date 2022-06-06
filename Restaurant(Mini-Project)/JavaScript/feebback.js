let fnameNode=document.getElementById('fname');
let errorNode1=document.getElementById('error1');
let ageNode=document.getElementById('fage');
let errorNode2=document.getElementById('error2');
let emailNode=document.getElementById('femail');
let errorNode3=document.getElementById('error3');
let mobileNode=document.getElementById('fnumb');
let errorNode4=document.getElementById('error4');
const errorBorder="2px solid red";
const succesBorder="2px solid green";

function validateForm(){
    let s1= validate1();
    let s2=validate2();
    let s3=validate3();
    let s4=validate4();
    return (s1 && s2 && s3 && s4);
}

function validate1(){
    let fname=fnameNode.value;
    errorNode1.innerHTML="";
    if(fname===''){
        errorNode1.innerHTML="First Name is required";
        fnameNode.style.border=errorBorder;
        return false;
    }
    else{
        fnameNode.style.border=succesBorder;
        return true;
    }
}

function validate2(){
    let age=ageNode.value;
    // console.log(typeof age);
    errorNode2.innerHTML="";
    if(age===''){
        errorNode2.innerHTML="Age is required";
        ageNode.style.border=errorBorder;
        return false;
    }
    else if(parseInt(age)<0 || parseInt(age)>100){
        errorNode2.innerHTML="Enter age between 0 to 110";
        ageNode.style.border=errorBorder;
        return false;
    }
    else{
        ageNode.style.border=succesBorder;
        return true;
    }
}


function validate3(){
    let femail=emailNode.value;
    errorNode3.innerHTML="";
    let ss1=femail.substring(0,femail.indexOf('@'));
    let ss2=femail.substring(femail.indexOf('@')+1);
    if(femail===''){
        errorNode3.innerHTML="Email is required";
        emailNode.style.border=errorBorder;
        return false;
    }
    else if(!femail.includes('@')){
        errorNode3.innerHTML="Email should contain @";
        emailNode.style.border=errorBorder;
        return false;
    }
    else if(ss1=='' || ss2==''){
        errorNode3.innerHTML="Invalid Email Id";
        emailNode.style.border=errorBorder;
        return false;
    }
    else{
        emailNode.style.border=succesBorder;
        return true;
    }
}

function validate4(){
    let mobile=mobileNode.value;
    let regExp = new RegExp("^[0-9]{10}$");
    errorNode4.innerHTML="";
    console.log(regExp.test(mobile));
    if(mobile===''){
        errorNode4.innerHTML="Mobile number is required";
        mobileNode.style.border=errorBorder;
        return false;
    }
    else if(regExp.test(mobile)==false){
        errorNode4.innerHTML="please enter valid mobile number";
        mobileNode.style.border=errorBorder;
        return false;
    }
    else{
        mobileNode.style.border=succesBorder;
        return true;
    } 
}

