function add_name(){
  var newname = document.getElementById("box");
  var newel = document.createElement("div");
  newel.innerHTML = newname.value;
  document.getElementById("fuck_blok").appendChild(newel);
}


var add = document.createElement("div");
add.innerHTML = "hi im ido";
add.style.color = "red";
var par = document.getElementById("fuck_blok");
par.appendChild(add);

