//7sebet:done

//1
function en1() {
    a = document.getElementsByName("t1").item(0).value ;
    if (a>20||a<0||a=="") {
        alert("your value should be like :  0 < value <= 20 ");
        return false;
    }
    else{
        alert("تم التخزين بنجاح")
    }
}
//2
function en2() {
    b = document.getElementsByName("t2").item(0).value ;
    if (b>20||b<0||b=="") {
        alert("your value should be like :  0 < value <= 20 ");
        return false;
    }
    else{
        alert("تم التخزين بنجاح")
    }
}
//3
function en3() {
    c = document.getElementsByName("t1").item(0).value ;
    if (c>20||c<0||c=="") {
        alert("your value should be like :  0 < value <= 20 ");
        return false;
    }
    else{
        alert("تم التخزين بنجاح")
    }
    
}
//lista
function chang() {
    if (li.selectedIndex==1) {
        document.getElementById("cont1").style.display="inline-block"
        document.getElementById("cont2").style.display="none"
        document.getElementById("synt").style.display="none"
        document.getElementById("cont1").style.textAlign= "center"
    }
    if (li.selectedIndex==2) {
        document.getElementById("cont1").style.display="none"
        document.getElementById("cont2").style.display="inline-block"
        document.getElementById("synt").style.display="none"
    }
    if (li.selectedIndex==3) {
        document.getElementById("cont1").style.display="none"
        document.getElementById("cont2").style.display="none"
        document.getElementById("synt").style.display="inline-block"
    }
    if (li.selectedIndex==0) {
        document.getElementById("cont1").style.display="none"
        document.getElementById("cont2").style.display="none"
        document.getElementById("synt").style.display="none"
        
    }
    
}
//generale
function gene() {
    a=document.getElementById("t1").value;
    b=document.getElementById("t2").value;
    c=document.getElementById("t3").value;
    d=Number(a)+Number(b)+c*2;
    e=d/4;
    document.getElementById("m3dl").innerHTML=e
}
function grad() {
    if (document.getElementById("chek").checked==true) {
        document.body.style.backgroundImage="linear-gradient(rgba(0, 0, 150, 0.801),blue)";
    }
    else{
        document.body.style.backgroundImage="";
    }
}