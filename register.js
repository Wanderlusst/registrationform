let containers = document.querySelector(".container")

function Fname(){
    let test1=containers.querySelector("#userFname").value;
    
    let test2=/^[A-Za-z]+$/;
    
 if(test2.test(test1)){
      
    containers.querySelector("#validn").innerHTML="valid";
    containers.querySelector("#validn").style.color="green"
    return 1;
    }
 else if(containers.querySelector("#userFname").value.length == 0)
        {
     containers.querySelector("#validn").textContent="";
     return 2;
        }
 
 else{
    
        containers.querySelector("#validn").innerHTML="Invalid";
        containers.querySelector("#validn").style.color="red"
        return 3;
 
        
    }
 
    
 }
 function Lname(){
   
 
    let test1=containers.querySelector("#userSname").value;
    
    let test2=/^[A-Za-z]+$/;
    
 if(test2.test(test1)){
      
    containers.querySelector("#validL").innerHTML="valid";
    containers.querySelector("#validL").style.color="green"
    return 1;
    }
 else if(containers.querySelector("#userSname").value.length == 0)
        {
     containers.querySelector("#validL").textContent="";
     return 2;
        }
 
 else{
    
        containers.querySelector("#validL").innerHTML="Invalid";
        containers.querySelector("#validL").style.color="red"
        return 3;
       
       
     
    }
 
    
 }
 function eyehide() {
   
    let showeye = containers.querySelector("#password");
    if (showeye.type === "password") {
        showeye.type = "text";
    } else {
        showeye.type = "password";
    }
  }
  function hide() {
   
    let showeye = containers.querySelector("#confirmPassword");
    if (showeye.type === "password") {
        showeye.type = "text";
    } else {
        showeye.type = "password";
    }
  }


function valids() {
    let email = containers.querySelector("#email").value;
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (valid.test(email)) {
        containers.querySelector("#emailvalid").textContent = "valid"
        containers.querySelector("#emailvalid").style.color = "green"
        
    }
    else if (containers.querySelector("#email").value.length == 0) {
        containers.querySelector("#emailvalid").textContent = "";
        
    }
    else {
        containers.querySelector("#emailvalid").textContent = "Invalid";
        containers.querySelector("#emailvalid").style.color = "red";
        
    } 
}

function passwords() {
    let password = containers.querySelector("#password").value;
    let passwrd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (passwrd.test(password)) {

        containers.querySelector("#pswrd").innerHTML = "valid";
        containers.querySelector("#pswrd").style.color = "green"
        return 1;
    }
    else if (containers.querySelector("#password").value.length == 0) {
        containers.querySelector("#pswrd").textContent = "";
        return 2;
    }
    else {

        containers.querySelector("#pswrd").innerHTML = "Invalid";
        containers.querySelector("#pswrd").style.color = "red"
        return 3;
    }

}




function compare() {
  let pass = containers.querySelector("#confirmPassword").value;

  let passre = containers.querySelector("#password").value;

  let repass =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  let passvalid = pass.match(repass);
  if (passre.match(passvalid)) {
      containers.querySelector("#repswrd").innerHTML = "valid";
      containers.querySelector("#repswrd").style.color = "green"
      return 1;

  }
  else if (containers.querySelector("#confirmPassword").value.length == 0) {
      containers.querySelector("#repswrd").textContent = "";
      
  }

  else {

      containers.querySelector("#repswrd").innerHTML = "Invalid";
      containers.querySelector("#repswrd").style.color = "red"
   




  }
 
}

    




function redirect(){
  let email = containers.querySelector("#email").value;
  let pass = containers.querySelector("#password").value;
  let name=containers.querySelector('#userFname').value;
  let lname=containers.querySelector('#userSname').value;
 

  if (emailvalid.textContent == "valid" && pswrd.textContent =="valid" && repswrd.textContent =="valid" && validn.textContent =="valid" && validL.textContent == "valid" ) {
    window.open("https://www.facebook.com");
    
      
  }
  else {
    alert("Form incomplete please complete the form ");
  }
   
}

  



































let custselect, valu, j, l, ll, selElmnt, a, b, c;

custselect = containers.getElementsByClassName("custom");
l = custselect.length;
for (valu = 0; valu < l; valu++) {
  selElmnt = custselect[valu].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "customSelect");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  custselect[valu].appendChild(a);
 
  b = document.createElement("DIV");
  b.setAttribute("class", "selectItems selectHide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("sameSelected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "sameSelected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  custselect[valu].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("selectHide");
      this.classList.toggle("arrowActive");
    });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("selectItems");
  y = document.getElementsByClassName("customSelect");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("arrowActive");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("selectHide");
    }
  }
}

document.addEventListener("click", closeAllSelect);


 