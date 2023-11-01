//hj drujgfuikp &#;?/''5$*''gyikphpbjoppouuooppppplmvfyfffxgafaf🤩🥲gkb. 😆gtjbjdhkhk ghjkkekkdkkkflflllvlvlllckckmcjjjfnifkrlosyywjfiifhjjdjjdjjxkjjxkjxjjjjjhdhjjjduuud            

 
var fry = document.getElementById("h");

function passwords(amount) {
    let password = window.prompt("password")
    if (password === "access") {
      alert("succes");
      return amount === 1;
    }
    else{
       let amountremaining = amount - 1;
       
       return passwords(amountremaining);
    }
  }
  
  passwords(3)

var giv = window.prompt("Insert password given to you");

if ((giv === "maths")||(giv === "maths ")) {
  alert("Access granted");
  alert("You are welcome"+" "+window.prompt("name")+" "+"to use the calculator")
}
else {
  alert("Wrong Password please restart web")
  document.getElementById("bot").innerHTML = "<h2>restart the web app and insert correct password to view the content of this webpage</h2>";  
}

function sciv() {
    var checkbox = document.getElementById("rilp");
    if (checkbox.checked) {
      document.getElementById("groth").style.height = "650px";
      document.getElementById("wild").style.height = "40%";
    }
    else {
      document.getElementById("groth").style.height = "425px";
      document.getElementById("wild").style.height = "0";
    }
}

let cal=(name)=> {
  fry.value+=name;
}

let nit=(crip)=> {
  fry.value = 3.1415926535897932384626433832795028841 * fry.value;
}

let bit=(nit)=> {
  fry.value=fry.value/100;
}

let res=()=> {
  try {
    fry.value=eval(fry.value);
  }
  catch (err) {
    alert("This is not mathematically right");
  }
}

function clr () {
  fry.value=" "
}

function del () {
  fry.value = fry.value.slice(0,-1)
}





